export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500 flex justify-between">
        <p>© {new Date().getFullYear()} Vaishali Purohit</p>
        <p>Senior Full-Stack Engineer</p>
      </div>
    </footer>
  );
}
