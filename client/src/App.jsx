import React from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import astuteAbroadLogo from "/favicon.png"

import About from "./pages/About"
import Register from "./pages/Register"
import Login from "./pages/Login"
import WatchDemo from "./pages/WatchDemo"
import Questions from "./pages/Questions.jsx"
import LiveTranscription from "./pages/LiveTranscription.jsx"

function Home() {
  return (
    // <h2 className="text-2xl font-light text-black mb-4">Welcome!</h2>
    //   <p className="text-black mb-4">main content area</p>
    // <div className="h-screen flex items-center justify-center">
    <div className="flex flex-col space-y-10 px-8 items-stretch">
      <p className="bg-sky-100 text-black rounded-2xl border border-black p-4">
        Do you feel nervous speaking in front of others?
      </p>
      <p className="bg-sky-200 text-black rounded-2xl border border-black p-4">
        Do you wish to gain confidence to travel overseas & meet new friends?
      </p>
      <p className="bg-sky-300 text-black rounded-2xl border border-black p-4">
        Start speaking a foreign language more fluently and improve your
        pronunciation!
      </p>
      <p className="bg-sky-400 text-black rounded-2xl border border-black p-4">
        Register with Astute Abroad today and start practicing your speaking
        skills with real-time feedback powered by AI!
      </p>
    </div>
    // </div>
  )
}

function App() {
  const navigate = useNavigate()

  return (
    <div className="bg-sky-200 min-h-screen flex items-center justify-center">
      <div className="bg-sky-300 w-[90%] border border-black rounded-xl flex flex-col shadow-lg">
        {/* header */}
        <header className="flex items-center justify-between p-4 border-b border-black">
          <div className="w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm sm:text-base text-gray-600 italic">
              speak fluently, travel fluidly
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold text-black mt-2 sm:mt-0 text-center sm:text-right">
              Astute Abroad{" "}
              <span className="text-sm font-normal text-gray-600">
                /əˈsto͞ot əˈbrôd/
              </span>
            </h1>
          </div>
          {/* <h1 className="italic text-3xl font-light text-black py-3 p-4">
            speak fluently, travel fluidly
          </h1>
          <h1 className="text-4xl font-light text-black py-3 p-4">
            Astute Abroad /əˈsto͞ot əˈbrôd/
          </h1> */}
        </header>

        {/* body */}
        <div className="flex flex-1">
          {/* main content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/watch-demo" element={<WatchDemo />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/record" element={<LiveTranscription />} />
            </Routes>
          </main>

          {/* navigation bar - right side */}
          <aside className="w-1/4 border-l border-black p-4 flex flex-col gap-4 items-stretch bg-sky-300">
            <Link to="/" className="flex justify-center">
              <img
                src={astuteAbroadLogo}
                className="w-20 h-24 justify-center"
                alt="Astute Abroad logo - wise fox with top hat and monacle"
              />
            </Link>
            <button
              onClick={() => navigate("/about")}
              className="bg-white text-black font-semihold py-3 rounded-2xl border border-black hover:bg-orange-200	 transition"
            >
              About
            </button>
            <button
              onClick={() => navigate("/watch-demo")}
              className="bg-white text-black font-semihold py-3 rounded-2xl border border-black hover:bg-orange-200 transition"
            >
              Watch Demo
            </button>
            <button
              onClick={() => navigate("/questions")}
              className="bg-white text-black font-semihold py-3 rounded-2xl border border-black hover:bg-orange-200 transition"
            >
              Practice Questions
            </button>
            <button
              onClick={() => navigate("/record")}
              className="bg-white text-black font-semihold py-3 rounded-2xl border border-black hover:bg-orange-200 transition"
            >
              Record Audio
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-white text-black font-semihold py-3 rounded-2xl border border-black hover:bg-orange-200 transition"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-black font-semihold py-3 rounded-2xl border border-black hover:bg-orange-200 transition"
            >
              Log in
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default App
