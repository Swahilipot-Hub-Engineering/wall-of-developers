import InfoPanel from "./InfoPanel";

const App = () => {
  return (
    <div className="min-h-screen p-4 bg-white">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">My Application</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <section className="md:col-span-3 bg-gray-50 p-4 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
          <p className="text-gray-700">Here is the main content of your app.</p>
        </section>

        <InfoPanel />
      </main>
    </div>
  );
};

export default App;



