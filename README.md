# 🚀 CryptoTracker — Real-Time Cryptocurrency Price Tracker

A modern, responsive **React + TypeScript** application that displays **real-time cryptocurrency prices** with simulated WebSocket updates and powerful state management via **Redux Toolkit**.

![CryptoTracker Demo](https://i.imgur.com/YourDemoGif.gif)

---

## 🔥 Features

- 📈 Real-time simulated price updates for top cryptocurrencies
- 📊 Interactive and responsive data table with live market insights
- 🔺 Color-coded price change indicators with transition animations
- 📉 7-day sparkline charts to visualize historical trends
- 💾 State persistence using `localStorage`
- ⚛️ Scalable state management with Redux Toolkit & optimized selectors

---

## 🛠️ Tech Stack

| Category         | Technology               |
|------------------|--------------------------|
| Frontend         | React 18 + TypeScript    |
| Styling          | Tailwind CSS             |
| State Management | Redux Toolkit            |
| Charts           | Chart.js, react-chartjs-2|
| Icons            | Lucide React             |
| Build Tool       | Vite                     |

---

## 📁 Project Structure

crypto-tracker/
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components
│ ├── features/ # Redux slices, selectors, mock services
│ ├── hooks/ # Custom hooks (e.g., typed useSelector)
│ ├── types/ # TypeScript interfaces & types
│ ├── utils/ # Formatters and utility functions
│ ├── App.tsx # Root component
│ └── main.tsx # Application entry point
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts

---

## ⚙️ Getting Started

### 1. Clone the Repository
git clone https://github.com/yourusername/crypto-tracker.git
cd crypto-tracker
### 2. Install Dependencies
npm install
### 3. Run Development Server
npm run dev
Open your browser and navigate to:
http://localhost:5173

### 📦 Build for Production
npm run build
The production-ready files will be located in the dist/ directory.

### 🌟 Future Enhancements
🔗 Integration with live cryptocurrency APIs (e.g., CoinGecko, Binance)

🧮 Advanced filtering, search, and sorting features

🧑‍💼 User authentication with favorite coin tracking

🌓 Dark mode & theme customization

🔔 Real-time alerts & push notifications

📆 Historical price charts with dynamic time range selection

### 🤝 Contribution
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

### 📜 License
This project is licensed under the MIT License.

💡 Inspired by real-time trading dashboards and tailored for developers looking to build scalable React apps with Redux and Tailwind.
### Demo video link: https://drive.google.com/file/d/1nodf9d6Ky767PP4zVYdZvpdCxrK3PAi3/view?usp=sharing
---
