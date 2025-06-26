import React, { useEffect, useState } from "react";
import { Volume2, Mic, Zap, Heart, Star, Play, Users, Award, Clock } from "lucide-react";
import { SETTINGS } from "../lib/data";

const Layout = () => {
  const [data, setData] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data === "") {
      alert("Enter the text first!");
      return;
    }

    setIsPlaying(true);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(data);
    
    utterance.onend = () => {
      setIsPlaying(false);
    };
    
    synth.speak(utterance);
    setData("");
  };
const [settings, setSettings] = useState(null);

useEffect(() => {
  // Simulate API load
  setSettings(SETTINGS);
}, []);

  const features = [
    {
      icon: <Volume2 className="w-8 h-8 text-blue-400" />,
      title: "High-Quality Voice",
      description: "Crystal clear audio output with natural-sounding voices powered by advanced speech synthesis technology."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Lightning Fast",
      description: "Instant text-to-speech conversion with no delays. Process your text in real-time for immediate results."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Emotion Control",
      description: "Add emotional depth to your speech with mood and personality settings for more engaging audio."
    },
    {
      icon: <Mic className="w-8 h-8 text-green-400" />,
      title: "Multiple Voices",
      description: "Choose from various voice personalities and accents to match your content's tone and style."
    },
    {
      icon: <Star className="w-8 h-8 text-purple-400" />,
      title: "Premium Quality",
      description: "Professional-grade audio output suitable for presentations, audiobooks, and accessibility features."
    },
    {
      icon: <Play className="w-8 h-8 text-orange-400" />,
      title: "Easy to Use",
      description: "Simple, intuitive interface that anyone can use. Just type, customize, and listen to your text."
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "50K+", label: "Active Users" },
    { icon: <Volume2 className="w-6 h-6" />, number: "1M+", label: "Audio Generated" },
    { icon: <Award className="w-6 h-6" />, number: "99.9%", label: "Uptime" },
    { icon: <Clock className="w-6 h-6" />, number: "24/7", label: "Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 md:px-20 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transform Text into Voice
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Experience the power of AI-driven text-to-speech technology. Create natural, expressive audio from any text with our advanced voice synthesis platform.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Free
                </button>
                <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-400 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1589254065878-42c9da997008?w=300&h=200&fit=crop"
                alt="Voice AI Technology"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop"
                alt="Audio Waveform"
                className="rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1��993-04-02-09-36-35?w=300&h=200&fit=crop"
                alt="Modern Microphone"
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 -mt-4"
              />
              <img
                src="https://images.unsplash.com/photo-1��993-12-08-22-46-59?w=300&h=200&fit=crop"
                alt="Sound Engineering"
                className="rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                <div className="flex justify-center text-blue-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="px-4 md:px-20 py-16">
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-black/40 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-700/30">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                🎤 Text to Audio Converter
              </h2>
              <p className="text-gray-400">Customize your voice settings and convert your text to natural speech</p>
            </div>
<form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="block mb-1">Mood</label>
            <select className="w-full p-2 text-black rounded">
              <option value="">Select Mood</option>
              {settings && Object.entries(settings.mood).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Language</label>
            <select className="w-full p-2 text-black rounded">
              <option value="">Select Language</option>
              {settings && Object.entries(settings.language).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Speaker</label>
            <select className="w-full p-2 text-black rounded">
              <option value="">Select Speaker</option>
              {settings && Object.entries(settings.speaker).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Speed</label>
            <select className="w-full p-2 text-black rounded">
              <option value="">Select Speed</option>
              {settings && settings.speed.map((speed) => (
                <option key={speed} value={speed}>{speed}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2">Enter Text</label>
          <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
            rows={5}
            className="w-full p-4 rounded text-black"
            placeholder="Type something to speak..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isPlaying}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold"
        >
          {isPlaying ? "Playing..." : "Convert to Speech"}
        </button>
      </form>
            <p className="mt-8 text-sm text-gray-400 text-center">
              Powered by advanced browser Speech Synthesis API for instant, high-quality voice generation
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover why thousands of users choose our text-to-speech platform for their audio content needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-black/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  REFLECT
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transform your text into natural, expressive speech with our cutting-edge AI-powered text-to-speech platform. Perfect for content creators, educators, and accessibility needs.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-blue-400">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-blue-400">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-blue-400">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2024 VoiceAI. All rights reserved. Built with ❤️ for accessibility and innovation.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>Status: All systems operational</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;