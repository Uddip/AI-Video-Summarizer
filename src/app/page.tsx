"use client";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(""); // TODO: Write API route logic and hook up to the backend
  const [inputText, setInputText] = useState("");
  const [videoId, setVideoId] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const extractVideoId = (url: string) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleInputChange = (e: { target: { value: any } }) => {
    const url = e.target.value;
    setInputText(url);
    const id = extractVideoId(url);
    setVideoId(id || "");
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ease-in-out 
        ${sidebarVisible ? "w-64" : "w-0 overflow-hidden"}`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          {sidebarVisible && <h2 className="text-xl font-bold">Menu</h2>}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors text-xl"
            aria-label="Close sidebar"
          >
            ❌
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded hover:bg-gray-700 transition-colors"
              >
                🏠 {sidebarVisible && <span className="ml-3">Home</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded hover:bg-gray-700 transition-colors"
              >
                📜 {sidebarVisible && <span className="ml-3">History</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded hover:bg-gray-700 transition-colors"
              >
                📜{" "}
                {sidebarVisible && (
                  <span className="ml-3">Text Summarizer</span>
                )}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded hover:bg-gray-700 transition-colors"
              >
                ⚙️ {sidebarVisible && <span className="ml-3">About</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 flex flex-col relative">
        {!sidebarVisible && (
          <button
            onClick={toggleSidebar}
            className="absolute left-4 top-4 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors text-xl"
            aria-label="Open sidebar"
          >
            ☰
          </button>
        )}

        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-xl font-bold mb-4">
            AI Video Insights Generator
          </h1>
          <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-6 text-center">
            <div className="mb-4">
              <label
                htmlFor="videoInput"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter YouTube URL
              </label>
              <input
                id="videoInput"
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {videoId && (
              <div className="mt-4 aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-md"
                ></iframe>
              </div>
            )}

            <button
              onClick={() => setResult("Summary will appear here")}
              disabled={!videoId}
              className={`bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mt-4 ${
                !videoId ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Generate Summary
            </button>

            {result && <div className="mt-4">Result: {result}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
