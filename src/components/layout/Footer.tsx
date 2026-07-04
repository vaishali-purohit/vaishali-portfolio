import { SOCIALS } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-muted dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} Vaishali Purohit</p>
          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-70"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
