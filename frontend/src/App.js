import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { Navbar } from "./components";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>

        </Routes>

      </main>
    </BrowserRouter>
  );
};

export default App;
