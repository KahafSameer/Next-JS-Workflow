export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800 font-sans">
      <main className="flex flex-col items-center justify-center text-center px-6 py-12 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight tracking-tight">
            Kahaf Sameer
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
            Become the best DevOps Engineer in 2026
          </p>
        </div>
        <div className="mt-8">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            Let's Achieve It!
          </div>
        </div>
      </main>
    </div>
  );
}
