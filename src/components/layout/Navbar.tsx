import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold">
          Vaishali Purohit
        </Link>

        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
