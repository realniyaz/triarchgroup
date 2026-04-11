const leaders = [
  { name: "Niyaz Ahmed", role: "Chief Executive Officer" },
  { name: "Sachin Maurya", role: "Chief Technology Officer" },
  { name: "Rohit Kumar", role: "Chief Operating Officer" },
];

export default function Leadership() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-sm font-medium text-blue-600 mb-4">
          LEADERSHIP
        </p>

        <h2 className="text-4xl font-bold mb-16">
          Guided by Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {leaders.map((l) => (
            <div
              key={l.name}
              className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {l.name[0]}
                </span>
              </div>

              <h3 className="font-semibold">
                {l.name}
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                {l.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
