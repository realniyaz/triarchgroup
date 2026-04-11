import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";




export default async function AdminMessagesPage() {
  // ✅ MUST await cookies()
  const cookieStore = await cookies();

  // ✅ .get works AFTER await
  const adminToken = cookieStore.get("admin-auth")?.value;

  // 🔒 AUTH CHECK
  if (adminToken !== process.env.ADMIN_SECRET) {
    redirect("/admin/login");
  }

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-10 text-red-600">
        Failed to load messages
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
        <form
  action="/api/admin/logout"
  method="POST"
  className="mb-8 text-right"
>
  <button
    type="submit"
    className="text-sm text-red-600 hover:underline"
  >
    Logout
  </button>
</form>
      <h1 className="text-3xl font-bold mb-10">
        Contact Messages
      </h1>

        

      <div className="space-y-6">
        {data?.length === 0 && (
        <div className="text-slate-500 text-sm">
         No contact messages yet.
        </div>
        )}
        {data?.map((msg) => (
          <div
            key={msg.id}
            className="bg-white border rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold">
                  {msg.full_name}
                </h3>
                <p className="text-sm text-slate-500">
                  {msg.email} {msg.company && `• ${msg.company}`}
                </p>
              </div>

              <span className="text-xs text-slate-400">
  {new Date(msg.created_at).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
</span>

            </div>

            {msg.subject && (
              <p className="text-sm font-medium mb-2">
                Subject: {msg.subject}
              </p>
            )}

            <p className="text-sm text-slate-700 whitespace-pre-wrap">
              {msg.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
