import Link from "next/link";

export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-6 py-2 bg-black text-white rounded-md hover:opacity-90"
    >
      {children}
    </Link>
  );
}
