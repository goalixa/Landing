import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import SocialProof from './components/sections/SocialProof'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import UseCases from './components/sections/UseCases'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'



function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
