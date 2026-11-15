// Cloudflare Worker — bot tokenini yashirib, buyurtmani Telegramga yuboradi.
// Sozlash: Workers > Create > shu kodni qo'ying > Settings > Variables:
//   BOT_TOKEN, CHAT_ID (Secret sifatida) va ALLOWED_ORIGIN (masalan https://xatamjanovmuhammadyusuf-arch.github.io)
export default {
  async fetch(req, env) {
    const cors = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    if (req.method === "OPTIONS") return new Response(null, { headers: cors });
    if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: cors });
    try {
      const { text } = await req.json();
      if (!text || typeof text !== "string" || text.length > 3500) throw new Error("bad");
      const r = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: env.CHAT_ID, text })
      });
      return new Response(JSON.stringify({ ok: r.ok }), { status: r.ok ? 200 : 502, headers: { ...cors, "Content-Type": "application/json" } });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
    }
  }
};
