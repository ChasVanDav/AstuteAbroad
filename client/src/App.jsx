import React, { useState } from "react"
import astuteAbroadLogo from "/favicon.png"
import axios from "axios"

function App() {
  const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [response, setResponse] = useState("")

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:5000/api/chat", {
      messages: [{ role: "user", content: userInput }],
    })
    setResponse(res.data.choices[0].message.content)
  }

  return (
    <div class="bg-sky-200 min-h-screen flex items-center justify-center">
      <div class="w-[90%] border border-black rounded-xl flex flex-col shadow-lg">
        {/* header */}
        <header class="flex items-center p-4 border-b border-black">
          <a href="https://github.com/ChasVanDav/AstuteAbroad" target="_blank">
            <img
              src={astuteAbroadLogo}
              className="w-16 h-16 rounded-full mr-4"
              alt="Astute Abroad logo"
            />
          </a>
          <h1 classname="text-3xl font-bold text-black">
            Welcome to Astute Abroad
          </h1>
        </header>

        <div className="bg-sky-400 text-black p-4 rounded">
          <button onClick={() => setCount(count + 1)}>count is {count}</button>
        </div>
        <div class="bg-sky-300 text-white p-4 rounded">
          Testing Tailwind: This is a sky blue background with white text.
        </div>

        <div className="bg-gray-200 text-blue p-3 rounded">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask something..."
          />
          <button onClick={sendMessage}>Ask ChatGPT</button>
          <p>{response}</p>
        </div>
      </div>
    </div>
  )
}

export default App
