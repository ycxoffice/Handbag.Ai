//handbag company data
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Star,
  Users,
  Globe,
  TrendingUp,
  Instagram,
  Twitter,
  Linkedin,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                HandBag.ai
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Redefining Luxury
              <br />
              Through AI
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the future of fashion with AI-powered personalization
              and sustainable luxury handbags.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <button
          onClick={() => navigate("/companies")}
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Explore Companies
        </button>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCard icon={<Star />} number="150+" label="Luxury Products" />
            <StatsCard icon={<Users />} number="50k+" label="Happy Customers" />
            <StatsCard icon={<Globe />} number="25+" label="Countries Served" />
            <StatsCard
              icon={<TrendingUp />}
              number="$20M+"
              label="Annual Revenue"
            />
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2023, HandBag.ai combines cutting-edge AI technology
                with traditional craftsmanship to create sustainable luxury
                accessories for the modern consumer.
              </p>
              <div className="flex space-x-4">
                <SocialLink icon={<Instagram />} />
                <SocialLink icon={<Twitter />} />
                <SocialLink icon={<Linkedin />} />
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <div className="space-y-4">
                <InfoItem label="Headquarters" value="London, Uk" />
                <InfoItem label="Employees" value="100+" />
                <InfoItem
                  label="Target Market"
                  value="Luxury Sustainable Fashion"
                />
                <InfoItem
                  label="Retail Presence"
                  value="Online & Select Boutiques"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, number, label }) => (
  <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="inline-block p-3 rounded-full bg-purple-100 text-purple-600 mb-4">
      {icon}
    </div>
    <div className="text-2xl font-bold text-gray-800 mb-1">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const SocialLink = ({ icon }) => (
  <a
    href="#"
    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
  >
    {icon}
  </a>
);

const InfoItem = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}</span>
    <span className="font-semibold text-gray-800">{value}</span>
  </div>
);

export default LandingPage;
