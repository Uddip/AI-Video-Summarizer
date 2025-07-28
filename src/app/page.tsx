'use client';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState('');
  const [inputText, setInputText] = useState('');
  const [videoId, setVideoId] = useState('');

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleInputChange = (e) => {
    const url = e.target.value;
    setInputText(url);
    
    const id = extractVideoId(url);
    setVideoId(id || '');
  };

  const YouTubeEmbed = ({ videoId }) => {
    if (!videoId) return null;
    
    return (
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
    );    
  };

  const genSummary = () => {
    setResult("Summary will appear here");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-4">AI Video Insights Generator</h1>
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-6 text-center">

        <div className="mb-4"> 
          <label htmlFor='videoInput' className='block text-sm font-medium text-gray-700 mb-1'> 
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

        <YouTubeEmbed videoId={videoId} />

        <button 
          onClick={genSummary}  
          disabled={!videoId}  
          className={`bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mt-4 ${
            !videoId ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Generate Summary
        </button>
        
        {result && <div className="mt-4">{result}</div>}
      </div>
    </div>
  );
}