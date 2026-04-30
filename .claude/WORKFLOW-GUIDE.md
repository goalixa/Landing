# Landing Page Workflow Guide

## Overview

The GitHub Actions workflow automatically builds, tests, and deploys the landing page to different environments based on the Git branch.

## Branch → Environment Mapping

### Staging Branch → Staging Environment

```
Push to staging branch
    ↓
Build npm package
    ↓
Build Docker image (landing-staging/landing:SHA)
    ↓
Push to Harbor
    ↓
Update ArgoCD app: goalixa-landing-staging
    ↓
Deploy to namespace: goalixa-landing-staging
```

**Resources:**
- **Git Branch:** `staging`
- **Harbor Repository:** `landing-staging/landing`
- **Kubernetes Namespace:** `goalixa-landing-staging`
- **ArgoCD Application:** `goalixa-landing-staging`
- **Helm Values:** `values-staging.yaml`
- **Ingress Domain:** `landing-staging.goalixa.com` (if ingress enabled)

---

### Main Branch → Production Environment

```
Push to main branch
    ↓
Build npm package
    ↓
Build Docker image (goalixa/landing:SHA)
    ↓
Push to Harbor
    ↓
Update ArgoCD app: goalixa-landing
    ↓
Deploy to namespace: goalixa-landing
```

**Resources:**
- **Git Branch:** `main`
- **Harbor Repository:** `goalixa/landing`
- **Kubernetes Namespace:** `goalixa-landing`
- **ArgoCD Application:** `goalixa-landing`
- **Helm Values:** `values-production.yaml`
- **Ingress Domain:** `goalixa.com` (if ingress enabled)

---

## Workflow Steps

### 1. Pull Request (on staging/main branches)

When a PR is created against `staging` or `main`:

✅ **Steps executed:**
- Checkout code
- Set up Node.js 18 (with npm cache)
- Install dependencies (`npm ci`)
- Build project (`npm run build`)
- Verify dist directory created
- Set up Docker Buildx
- **Build Docker image** (without pushing)

❌ **NOT executed:**
- Push to Harbor registry
- Update ArgoCD applications
- Deploy to Kubernetes

**Purpose:** Verify the code builds correctly before merging.

---

### 2. Push to Staging

When code is pushed to the `staging` branch:

✅ **Steps executed:**
- All steps from PR build
- **Push Docker image** to `harbor.goalixa.com/landing-staging/landing`
  - Tags: `<commit-sha>` (for rollback) + `latest` (for convenience)
- **Update ArgoCD app** `goalixa-landing-staging`
  - Sets image tag to commit SHA
  - Triggers auto-sync to deploy

**Kubernetes Namespace:** `goalixa-landing-staging`

**Timeline:** ~2-3 minutes from push to live deployment

---

### 3. Push to Main

When code is pushed to the `main` branch:

✅ **Steps executed:**
- All steps from PR build
- **Push Docker image** to `harbor.goalixa.com/goalixa/landing`
  - Tags: `<commit-sha>` (for rollback) + `latest` (for convenience)
- **Update ArgoCD app** `goalixa-landing`
  - Sets image tag to commit SHA
  - Triggers auto-sync to deploy

**Kubernetes Namespace:** `goalixa-landing`

**Timeline:** ~2-3 minutes from push to live deployment

---

## Image Tagging Strategy

### Why Use Commit SHA + Latest?

1. **Commit SHA** (`git rev-parse --short HEAD`)
   - Example: `a1b2c3d`
   - Allows rollback to any previous commit
   - Unique identifier for each build
   - Stored in Harbor for history

2. **Latest Tag**
   - Convenient for quick references
   - ArgoCD always deploys the latest tag when specified
   - Easier manual testing

### Rollback Example

If production deployment `goalixa/landing:a1b2c3d` has issues:

```bash
# Revert to previous commit SHA
kubectl patch application goalixa-landing -n argocd \
  --type='merge' \
  -p='{"spec":{"source":{"helm":{"parameters":[{"name":"image.tag","value":"a1b2c2c"}]}}}}'

# ArgoCD auto-syncs and deploys previous version
```

---

## Helm Values Files

### values.yaml (Base/Default)

```yaml
image:
  registry: harbor.goalixa.com
  repository: goalixa/landing
  tag: "latest"
  pullPolicy: Always
replicaCount: 1
```

### values-staging.yaml

```yaml
image:
  registry: harbor.goalixa.com
  repository: landing-staging/landing
  tag: "latest"
  pullPolicy: Always
replicaCount: 1
ingress:
  enabled: true
  host: "landing-staging.goalixa.com"
namespace:
  name: goalixa-landing-staging
```

### values-production.yaml

```yaml
image:
  registry: harbor.goalixa.com
  repository: goalixa/landing
  tag: "latest"
  pullPolicy: Always
replicaCount: 2
ingress:
  enabled: true
  host: "goalixa.com"
  tls: true
namespace:
  name: goalixa-landing
```

---

## ArgoCD Configuration

### Production App (goalixa-landing)

- **Git Repository:** https://github.com/goalixa/Landing.git
- **Git Branch:** `main`
- **Helm Path:** `helm/`
- **Values File:** `values-production.yaml`
- **Target Namespace:** `goalixa-landing`
- **Sync Policy:** Automated (prune, self-heal enabled)

### Staging App (goalixa-landing-staging)

- **Git Repository:** https://github.com/goalixa/Landing.git
- **Git Branch:** `staging`
- **Helm Path:** `helm/`
- **Values File:** `values-staging.yaml`
- **Target Namespace:** `goalixa-landing-staging`
- **Sync Policy:** Automated (prune, self-heal enabled)

---

## GitHub Secrets Required

For the workflow to push to Harbor and update ArgoCD:

1. **HARBOR_USERNAME** - Harbor registry username
2. **HARBOR_PASSWORD** - Harbor registry password
3. **KUBE_CONFIG** - Base64 encoded kubeconfig file (optional for ArgoCD updates)

### Setting Up KUBE_CONFIG Secret

```bash
# Encode your kubeconfig
cat ~/.kube/config | base64 | tr -d '\n'

# Add as GitHub secret: KUBE_CONFIG
```

---

## Deployment Flow Diagram

```
Developer push to branch
        ↓
GitHub Actions triggered
        ↓
┌─────────────────────────────────────┐
│  Build & Test (All branches)        │
│  - npm ci                           │
│  - npm run build                    │
│  - Docker build                     │
└─────────────────────────────────────┘
        ↓
   Pull Request?
   /            \
  YES            NO (Push to branch)
  │              │
  │         Is staging branch?
  │         /          \
  │        YES         NO
  │        │            │
  │    [Deploy to]   Is main branch?
  │    [Staging]     /         \
  │    [landing-staging/]    YES  NO
  │    [Namespace:        │      │
  │    [staging]      [Deploy]  [Skip]
  │                 [to Prod]
  │                 [goalixa/]
  │                 [landing]
  │                 [Namespace:
  │                 [production]
  │
  └→ Build Only (no deploy)
```

---

## Troubleshooting

### Build Fails

**Check:** GitHub Actions logs in Pull Request

```
If build fails:
1. Check npm dependencies (npm ci)
2. Check TypeScript compilation (npm run build)
3. Verify Tailwind CSS configuration
4. Check for missing environment variables
```

### Deployment Doesn't Start

**Check:** ArgoCD dashboard

```
1. Verify image exists in Harbor: harbor.goalixa.com
2. Check ArgoCD app status: kubectl get applications -n argocd
3. Check ArgoCD sync status: kubectl describe application <app-name> -n argocd
```

### Image Not Found in Harbor

**Possible causes:**
- Harbor credentials wrong
- GitHub Actions secrets not configured
- Harbor registry unreachable

**Solution:**
```bash
# Check Harbor login in Actions
# Verify HARBOR_USERNAME and HARBOR_PASSWORD secrets
# Test manually: docker login harbor.goalixa.com
```

---

## Manual Deployment

If you need to manually deploy without pushing code:

```bash
# Update image tag in staging
kubectl patch application goalixa-landing-staging -n argocd \
  --type='merge' \
  -p='{"spec":{"source":{"helm":{"parameters":[{"name":"image.tag","value":"new-tag"}]}}}}'

# Trigger sync
kubectl annotate application goalixa-landing-staging -n argocd \
  "force-sync-at=$(date +%s)" --overwrite

# Update image tag in production
kubectl patch application goalixa-landing -n argocd \
  --type='merge' \
  -p='{"spec":{"source":{"helm":{"parameters":[{"name":"image.tag","value":"new-tag"}]}}}}'

# Trigger sync
kubectl annotate application goalixa-landing -n argocd \
  "force-sync-at=$(date +%s)" --overwrite
```

---

## Workflow File Location

`.github/workflows/main.yml`

---

**Last Updated:** 2026-04-30
**Status:** ✅ Production Ready
