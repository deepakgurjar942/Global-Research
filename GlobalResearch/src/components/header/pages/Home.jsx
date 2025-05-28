import { Link } from "react-router-dom";
import HeroImage from "../../../assets/hero.png";
import Image from "../../../assets/Com.png";
import Img from "../../../assets/img.png";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import MarketResearch from "./marketResearch/MarketResearch";

const Home = () => {
  // Data for market sections
  const marketSections = [
    {
      title: "Daily Market Brief",
      items: [
        "Crypto",
        "Forex",
        "Comex",
        "Global News",
        "Expert Opinion",
        "Indices",
      ],
      color: "bg-blue-500",
      link: "/market-research/report",
    },
    {
      title: "Technical Outlook",
      items: ["Gold", "Oil", "Forex Pair", "Crypto", "Indices"],
      color: "bg-purple-500",
      link: "/market-research/global",
    },
    {
      title: "Research Navigator",
      items: [
        "Daily Digest",
        "Market Updates",
        "Trending Fundamental market News",
      ],
      color: "bg-green-500",
      link: "/market-research/offer",
    },
    {
      title: "Track Record",
      items: ["Forex", "Comex", "Crypto", "Indices"],
      color: "bg-orange-500",
      link: "/market-research/learning",
    },
  ];

  // Data for report making sections
  const reportSections = [
    {
      title: "Report Making",
      categories: [
        {
          title: "Crypto",
          items: ["Spot", "Future", "Option"],
        },
        {
          title: "Forex & Comex",
          items: ["Currency", "Comex", "Indices"],
        },
      ],
      services: ["Signal Provide", "Other Services", "Learning"],
    },
    {
      title: "AI Services",
      categories: [
        {
          title: "AI Bot X",
          items: [
            "Client Briefing",
            "Setup 360",
            "Game Changer Strategies",
            "Research Support",
          ],
        },
        {
          title: "Content Catalyst",
          items: ["Client Care"],
        },
      ],
      services: ["Signal Provide", "Other Services", "Learning"],
    },
    {
      title: "Learning",
      categories: [
        {
          title: "Client Session",
          items: ["Crypto Learning", "Forex Learning", "Technical Analysis"],
        },
      ],
      services: ["Signal Provide", "Additional", "Learning"],
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#101010] overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
          <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-4 font-medium animate-fadeIn">
            Unlock the Power of In-Depth Research with R&G Global Research
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fadeIn delay-100">
            Comprehensive{" "}
            <span className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
              Forex, Crypto, and Commodities
            </span>{" "}
            Insights for Every Trader.
          </h2>

          <h4 className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 animate-fadeIn delay-200">
            From{" "}
            <span className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
              Real-Time Signals to Expert Analysis
            </span>
            , We Provide the Tools You Need to Trade Smart
          </h4>

          <p className="text-base text-gray-400 mb-8 sm:mb-12 animate-fadeIn delay-300">
            Welcome to R&G Global Research, your ultimate destination for
            premium forex and crypto market research services. Our certified and
            experienced analysts provide tailored solutions to help your
            business stay ahead in the ever-evolving global financial markets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-400">
            <Link
              to="/market-research"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/30 text-center"
            >
              Get Started
            </Link>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/20">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img
            src={HeroImage}
            alt="Market analysis illustration"
            className="w-full max-w-lg xl:max-w-xl object-contain animate-float hover:scale-105 transition-transform duration-700 cursor-pointer"
          />
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto h-24 md:h-28 lg:h-[99px] my-8 rounded-lg bg-gray-900/50 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10 border border-gray-800 hover:border-orange-500/30">
        <div className="w-full max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
          <img
            src={Image}
            className="w-full h-auto object-contain filter grayscale cursor-pointer hover:grayscale-0 transition-all duration-500"
            alt="Company partners or sponsors"
          />
        </div>
      </div>

      {/* Market Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Market Insights & Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketSections.map((section, index) => (
            <Link
              to={section.link}
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div
                className={`${section.color} w-12 h-1 rounded-full mb-4`}
              ></div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-between">
                {section.title}
                <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center"
                  >
                    <FiArrowRight className="mr-2 text-orange-500 text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>

      {/* Report Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reportSections.map((report, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
            >
              <h2 className="text-xl font-bold text-white mb-4">
                {report.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {report.services.map((service, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-orange-500 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                {report.categories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="font-semibold text-orange-500 mb-3">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                        >
                          <span className="w-2 h-2 rounded-full bg-orange-500 mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fundamental Analysis Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">
            Fundamental Analysis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Economic Indicators",
              "Political Events",
              "Market Sentiment",
              "Industry Trends",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer group"
              >
                <h3 className="font-medium text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {item}
                </h3>
                <p className="text-gray-400 text-sm">
                  Detailed analysis coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 leading-tight">
          Why Choose{" "}
          <span className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
            R&G Global Research?
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Analysis",
              description:
                "Our team of certified analysts provides in-depth market insights",
              icon: "📊",
            },
            {
              title: "Real-Time Signals",
              description:
                "Get instant trading signals for optimal market entry",
              icon: "⚡",
            },
            {
              title: "Tailored Solutions",
              description: "Custom research services for your specific needs",
              icon: "✨",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer"
            >
              <div className="text-4xl mb-4 hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <MarketResearch/>
        </div>
        <p>Signal Provider & Trading Insights</p>
        <h2>
          <span className="text-orange-400">Accurate & Real-Time</span> Trading
          Signals Across All Markets.
        </h2>
        <p>
          We provide comprehensive trade signals for the Forex, Crypto, and
          Commodities markets. Our signals are designed to help you trade
          effectively and profitably across various market conditions.
        </p>
        <div>
          <div>
            <img src={Img} alt="img" />
          </div>
          <div>
            //icon
            <h3>Specialized Expertise:</h3>
            <p>Signals for currency pairs, indices, and Comex markets.</p>
          </div>
          <div>
            //icon
            <h3>Market Signals:</h3>
            <p>Including Crypto, Forex, US and UK</p>
          </div>
          <div>
            //icon
            <h3>Trading Styles:</h3>
            <li>Positional Trading</li>
            <li>Intraday </li>
            <li>Swing Trading</li>
            <li>Scalping</li>
          </div>
          <div>
            //icon
            <h3>Features:</h3>
            <li>Real-time notifications via email or mobile.</li>
            <li>
              Accurate entry/exit points, stop-loss levels, and profit targets.
            </li>
            <li>
              Easy-to-follow signals for traders of all experience levels.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
