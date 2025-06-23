import React, { useState } from "react";
import { toast } from "react-toastify";

const Layout = () => {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data === "") {
      toast.error("Enter the text first!", {
        position: "top-center",
      });
      throw new Error("enter the data");
    }

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(data);
    synth.speak(utterance);
    toast.success("Audio played successfully", { position: "top-center" });
    setData("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#1a1a1a] text-white px-4 md:px-20 py-16 font-sans relative overflow-hidden">
      <img
        src="https://res.cloudinary.com/dhe9p6bo0/image/upload/v1750420820/ChatGPT_Image_Jun_20_2025_05_26_47_PM_ecdc8e.png"
        alt="Decorative"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto bg-[#121212]/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          🎤 Text to Audio Converter
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="mood" className="text-sm font-medium">
              Mood
            </label>
            <input
              id="mood"
              type="text"
              placeholder="Describe your mood"
              className="px-4 py-3 rounded-xl bg-[#1f1f1f] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="emotion" className="text-sm font-medium">
              Emotion
            </label>
                 <input
              id="emotion"
              type="text"
                 placeholder="Happy, Sad, etc."
              className="px-4 py-3 rounded-xl bg-[#1f1f1f] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
     <label htmlFor="personality" className="text-sm font-medium">
              Personality
         </label>
            <select
            id="personality"
              className="px-4 py-3 rounded-xl bg-[#1f1f1f] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Personality</option>
          <option value="a">a</option>
            <option value="b">b</option>
              <option value="c">c</option>
            <option value="d">d</option>
            </select>
          </div>

            <div className="flex flex-col gap-1">
            <label htmlFor="data" className="text-sm font-medium">
              Enter the Text
            </label>
            <textarea
              value={data}
              onChange={(e) => setData(e.target.value)}
              rows={8}
              placeholder="Hi, tell me the text you want to convert..."
              className="w-full p-4 text-base rounded-xl bg-[#1f1f1f] border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
              id="data"
              name="data"
            ></textarea>
          </div>

          <button
            type="submit"
            className="h-12 w-full sm:w-48 self-center bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white rounded-xl shadow-lg font-medium"
          >
            Submit
          </button>
        </form>

        <p className="mt-10 text-sm text-gray-400 text-center">
          Type anything above and convert it to speech using the browser’s built-in Speech API.
        </p>
      </div>
    </main>
  );
};

export default Layout;
