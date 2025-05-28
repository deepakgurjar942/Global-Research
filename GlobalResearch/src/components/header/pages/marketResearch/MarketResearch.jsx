import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const tabs = ["Report Studio", "Global Signal", "We Also Offer", "Learning"];

const tabData = {
  "Report Studio": [
    {
      title: "Daily Market Brief",
      icon: "📰",
      items: ["Crypto Analysis", "Forex Trends", "Commodity Reports", "Global News Digest", "Expert Commentary", "Market Indices"],
      description: "Comprehensive daily reports covering all major markets"
    },
    {
      title: "Technical Outlook",
      icon: "📊",
      items: ["Gold Price Forecast", "Oil Market Trends", "Currency Pair Analysis", "Crypto Technicals", "Index Movements"],
      description: "Detailed technical analysis for informed trading decisions"
    },
    {
      title: "Research Navigator",
      icon: "🧭",
      items: ["Morning Digest", "Afternoon Update", "Closing Reports", "Weekend Analysis", "Special Events"],
      description: "Navigate through our research library with ease"
    },
    {
      title: "Track Record",
      icon: "🏆",
      items: ["Forex Performance", "Commodity Accuracy", "Crypto Predictions", "Index Forecasts"],
      description: "Verified historical performance metrics"
    }
  ],
  "Global Signal": [
    {
      title: "Real-Time Alerts",
      icon: "🚨",
      items: ["Entry Points", "Exit Signals", "Stop-Loss Levels", "Take-Profit Targets"],
      description: "Instant notifications for trading opportunities"
    },
    {
      title: "Risk Management",
      icon: "🛡️",
      items: ["Position Sizing", "Risk/Reward Ratios", "Volatility Analysis", "Portfolio Protection"],
      description: "Tools to protect your capital"
    },
    {
      title: "Market Scanner",
      icon: "🔍",
      items: ["Trend Identification", "Breakout Detection", "Volume Spikes", "Liquidity Zones"],
      description: "Automated market scanning technology"
    }
  ],
  "We Also Offer": [
    {
      title: "Premium Services",
      icon: "⭐",
      items: ["1-on-1 Coaching", "Portfolio Review", "Custom Strategy Development", "Institutional Grade Research"],
      description: "Exclusive services for serious traders"
    },
    {
      title: "Educational Resources",
      icon: "🎓",
      items: ["Webinars", "Video Tutorials", "E-books", "Trading Journals"],
      description: "Resources to accelerate your learning curve"
    },
    {
      title: "Community Access",
      icon: "👥",
      items: ["Private Discord", "Live Trading Rooms", "Expert Q&A", "Idea Sharing"],
      description: "Connect with like-minded traders"
    }
  ],
  "Learning": [
    {
      title: "Beginner Courses",
      icon: "🆕",
      items: ["Market Basics", "Chart Reading", "Order Types", "Risk Fundamentals"],
      description: "Start your trading journey right"
    },
    {
      title: "Advanced Strategies",
      icon: "🎯",
      items: ["Algorithmic Trading", "Options Strategies", "Hedging Techniques", "Quantitative Analysis"],
      description: "Take your skills to the next level"
    },
    {
      title: "Specialized Workshops",
      icon: "🔧",
      items: ["Crypto Masterclass", "Forex Intensive", "Commodity Deep Dive", "Index Trading"],
      description: "Focus on specific market segments"
    }
  ]
};

export default function MarketResearch() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Tabs Navigation */}
      <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
        <div className="flex space-x-2 mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tabData[activeTab]?.map((section, index) => (
          <div
            key={`${activeTab}-${index}`}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-3">{section.icon}</span>
              <div>
                <h3 className="text-xl font-bold mb-1">{section.title}</h3>
                <p className="text-gray-400 text-sm">{section.description}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <FiChevronRight className="text-orange-500 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}