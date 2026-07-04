import Button from "@/components/ui/Button"

export default function CTA() {
  return (
    <section className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Open to Remote &amp; Ready to Relocate
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-700 dark:text-gray-300">
          I’m currently looking for Senior Full-Stack / AI Engineering roles
          where I can contribute to scalable systems and product-driven teams.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/resume">Download Resume</Button>
          <Button href="mailto:vaishalipurohit12@gmail.com" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
