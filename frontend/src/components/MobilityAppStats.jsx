import { useEffect, useRef, useState } from "react";
import { FaPersonWalking } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end, duration]);

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <div
      ref={countRef}
      className="text-4xl md:text-5xl font-bold text-gray-800"
    >
      {formatNumber(count)}
      {suffix}
    </div>
  );
};

const StatCard = ({
  icon,
  number,
  label,
  description,
  duration,
  suffix = "",
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <Counter end={number} duration={duration} suffix={suffix} />

      <h3 className="text-lg font-semibold text-gray-600 mt-4">{label}</h3>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

const MobilityAppStats = () => {
  const icons = {
    users: <FaPersonWalking className="w-10 h-10" />,
    cities: <MdLocationCity className="w-10 h-10" />,
    countries: <FaGlobe className="w-10 h-10" />,
    ratings: <FaStar className="w-10 h-10" />,
  };

  const stats = [
    {
      icon: icons.users,
      number: 1500000000,
      label: "Users",
      description: "Active monthly users worldwide",
      duration: 2500,
    },
    {
      icon: icons.cities,
      number: 3500,
      label: "Cities",
      description: "Cities across 6 continents",
      duration: 2000,
    },
    {
      icon: icons.countries,
      number: 112,
      label: "Countries",
      description: "Global presence and counting",
      duration: 1500,
    },
    {
      icon: icons.ratings,
      number: 4.3,
      label: "Store Ratings",
      description: "Average app store rating",
      duration: 1800,
      suffix: "/5",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            World's <span className="text-blue-600">#1</span> Mobility App
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Connecting millions of users across the globe with reliable
            transportation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              duration={stat.duration}
              suffix={stat.suffix}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 inline-block">
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Trusted by millions • 24/7 Support • Eco-friendly options
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilityAppStats;
