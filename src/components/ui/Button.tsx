import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-medium transition"
  const styles =
    variant === "primary"
      ? `${base} bg-accent text-accent-fg hover:opacity-90`
      : `${base} border border-border text-muted-foreground hover:bg-muted dark:hover:bg-muted`

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  )
}
