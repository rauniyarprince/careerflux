import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">CareerFlux AI</h1>
      </header>

      <div className="flex">
        <aside className="min-h-[calc(100vh-73px)] w-64 border-r bg-white p-4">
          <nav className="space-y-3">
            <Link to="/profile" className="block rounded-lg px-3 py-2 hover:bg-gray-100">
              Profile
            </Link>
            <Link to="/career-goal" className="block rounded-lg px-3 py-2 hover:bg-gray-100">
              Career Goal
            </Link>
            <Link to="/dashboard" className="block rounded-lg px-3 py-2 hover:bg-gray-100">
              Dashboard
            </Link>
            <Link to="/roadmap" className="block rounded-lg px-3 py-2 hover:bg-gray-100">
  Roadmap
</Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;