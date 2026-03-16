{{- define "goalixa-landing.labels" -}}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
app.kubernetes.io/name: goalixa-landing
{{- end }}
{{- define "goalixa-landing.selectorLabels" -}}
app: landing
{{- end }}
