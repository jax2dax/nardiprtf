import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <section className="py-32 px-6 max-w-6xl mx-auto">
          <SectionHeader
            title="Professional Focus"
            subtitle="A blend of clinical precision, empathy, and public health advocacy."
          />
        </section>
      </main>
    </>
  )
}
