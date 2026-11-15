// ==========================================================
//  SOZLAMALAR — buyurtmalar Telegramga kelishi uchun to'ldiring
// ==========================================================
// 1-usul (tavsiya etiladi, xavfsiz): worker.js ni Cloudflare Workers'ga joylab, manzilini shu yerga yozing.
//   Bot tokeni saytda ko'rinmaydi.
// 2-usul (tez, lekin xavfli): token va chat ID ni to'g'ridan-to'g'ri yozing.
//   DIQQAT: token sayt kodida hammaga ko'rinadi, kimdir botingizdan foydalanib ketishi mumkin.
window.AROMA_CONFIG = {
  ORDER_ENDPOINT: "",          // masalan: "https://aroma-orders.sizning-nom.workers.dev"
  TELEGRAM_BOT_TOKEN: "9217170823:AAEkg4Zgo1FKJIpxO-PcaLESA0BOewWaRvg",      // @BotFather bergan token
  TELEGRAM_CHAT_ID: "8539745368"         // sizning chat ID (@userinfobot orqali bilib oling)
};
