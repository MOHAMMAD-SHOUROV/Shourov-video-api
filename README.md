# 🎥 Shourov Video API

A simple & powerful **Auto Video Trigger API** for Facebook Messenger Bots.  
Emoji + Text trigger দিলে API থেকে auto video response দেয় 🚀  

---

## ✨ Features

- 🔥 Emoji + Text trigger support (🙂 🥺 sm king shourov)
- 🎬 Multiple video per trigger
- 🔁 Random video response
- 🔐 Admin-only add system
- ⛔ On / Off video system
- ⚡ Fast & lightweight Express API
- 📦 JSON based storage (easy to edit)
- 🌐 Works with Facebook Messenger Bots

---

## 📡 API Endpoint
GET /video?q=TRIGGER
Copy code

### ✅ Example
http://YOUR_DOMAIN:3000/video?q=sm
Copy code

### 🔁 Response
```json
{
  "status": true,
  "body": "🖤 ALIHSAN SHOUROV 🖤",
  "trigger": "sm",
  "video": "https://i.imgur.com/tFVhdez.mp4"
}
📁 Project Structure
Copy code

video-api/
├── server.js
├── data.json
├── package.json
└── README.md
🗂 data.json Format
Copy code
Json
{
  "status": true,
  "body": "🖤 ALIHSAN SHOUROV 🖤",
  "videos": {
    "sm": [
      "https://i.imgur.com/tFVhdez.mp4"
    ],
    "🙂": [],
    "🥺": [],
    "king": [],
    "shourov": []
  }
}
🚀 Installation
Copy code
Bash
git clone https://github.com/MOHAMMAD-SHOUROV/Shourov-video-api.git
cd Shourov-video-api
npm install
node server.js
🔌 Use With Facebook Bot
Bot message → sm
Bot fetch → /video?q=sm
API returns video 🎬
Bot sends video automatically
👑 Author
👤 Name: Shourov
🌐 Facebook:
👉 https://www.facebook.com/shourov.sm24
📱 WhatsApp:
👉 01709281334
❤️ Credits
Developed by Shourov
Powered by Node.js & Express
Designed for Messenger Bot Automation
📜 License
This project is open-source and free to use.
Give credit if you use it ❤️
Copy code

---

## ✅ আপনি চাইলে আমি আরো যোগ করতে পারি:
- 🔐 Admin UID section  
- 🤖 Bot integration code  
- 🌍 Render / Railway hosting guide  
- 📦 Auto add API (`/add?trigger=sm&url=...`)  
- 🎨 Emoji styled banner  

👉 বলুন, **আর কী কী add করবেন?** 😌
