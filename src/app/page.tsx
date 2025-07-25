'use client';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState('')
  const [inputText, setInputText] = useState('')

  const genSummary = () => {
    setResult("a")
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-6 text-center">
        <h1 className="text-xl font-bold mb-4">AI Video Insights Generator</h1>

        <div className="mb-4"> 
          <label htmlFor='videoInput' className='block text-sm font-medium text-gray-700-mb-1'> 
            Enter YouTube URL
          </label>

            <input
            id="videoInput"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />      
        </div>
        <button onClick={() => console.log(genSummary())  } 
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded" >
          Generate Summary

        </button>
        {result && <div className="mt-4"> Result: {result}</div>}
      </div>
    </div>
  );
}
