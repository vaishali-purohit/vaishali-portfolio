export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Resume</h1>

      <p className="mt-6 text-gray-700">
        Download my resume or view experience summary below.
      </p>

      <a
        href="/resume.pdf"
        className="mt-6 inline-block px-5 py-2 border rounded-md"
      >
        Download Resume
      </a>

      <div className="mt-10 space-y-6">
        <div>
          <h2 className="font-semibold">Senior Software Engineer – Modelia</h2>
          <p className="text-gray-600 text-sm">AI Platform, 100k+ users</p>
        </div>

        <div>
          <h2 className="font-semibold">Software Engineer – AXA</h2>
          <p className="text-gray-600 text-sm">Enterprise Insurance Systems</p>
        </div>

        <div>
          <h2 className="font-semibold">Solution Engineer – Deqode</h2>
          <p className="text-gray-600 text-sm">Real-time systems, trading UI</p>
        </div>
      </div>
    </div>
  );
}
