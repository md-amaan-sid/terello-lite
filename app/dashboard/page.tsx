type Board = {
  id: number;
  title: string;
  tasks: number;
  status: string;
  statusColor: string;
  icon: string;
};

const boards: Board[] = [
  {
    id: 1,
    title: "Project Alpha",
    tasks: 5,
    status: "Active",
    statusColor: "bg-emerald-100 text-emerald-800",
    icon: "📋",
  },
  {
    id: 2,
    title: "Project Beta",
    tasks: 3,
    status: "In review",
    statusColor: "bg-amber-100 text-amber-800",
    icon: "🚀",
  },
  {
    id: 3,
    title: "Project Gamma",
    tasks: 8,
    status: "Active",
    statusColor: "bg-emerald-100 text-emerald-800",
    icon: "✅",
  },
];

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <nav className="w-full bg-white shadow-sm flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
          <h1 className="text-lg font-semibold">Trello Lite</h1>
        </div>
        <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
          Logout
        </button>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-slate-900">
            Good morning, Amaan
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Here are your active boards
          </p>
        </div>

        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Your boards
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {boards.map((board) => (
            <div
              key={board.id}
              className="space-y-4 rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md "
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                  {board.icon}
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${board.statusColor}`}
                >
                  {board.status}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {board.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {board.tasks} tasks remaining
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 inline-flex items-center rounded-2xl border-dashed border-2 border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-blue-500 hover:text-blue-500 ">
          + New board
        </button>
      </main>
    </div>
  );
};

export default DashboardPage;
