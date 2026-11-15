# Aroma Haven — Telegram sozlash

1. Telegramda @BotFather → /newbot → bot yarating → **token** oling.
2. Botingizga biror xabar yozing (/start). Chat ID'ni @userinfobot orqali bilib oling.
3. `config.js` ni to'ldiring:
   - Xavfsiz usul: `worker.js` ni Cloudflare Workers'ga joylang (BOT_TOKEN, CHAT_ID, ALLOWED_ORIGIN o'zgaruvchilari bilan), manzilini `ORDER_ENDPOINT` ga yozing.
   - Tez usul: `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID` ni yozing (token hammaga ko'rinadi!).

Eslatma: email/parol brauzerda (localStorage) saqlanadi — bu haqiqiy xavfsiz kirish emas. Haqiqiy hisoblar uchun server (Firebase Auth, Supabase va h.k.) kerak.
