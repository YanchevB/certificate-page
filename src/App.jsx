function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-6 md:p-12">
      
      {/* Header Section */}
      <header className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
          My JS Journey
        </h1>
        <p className="text-lg text-gray-600">
          A collection of my JavaScript and web development certificates.
        </p>
      </header>

      {/* Main Content Area (Where the grid will go) */}
      <main className="max-w-5xl mx-auto">
        <div className="p-8 border-4 border-dashed border-gray-300 rounded-xl text-center text-gray-400">
          <p>This is where our CertGrid component will go!</p>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="max-w-5xl mx-auto mt-16 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Boyan Yanchev. Built with React & Tailwind.</p>
      </footer>

    </div>
  );
}

export default App;