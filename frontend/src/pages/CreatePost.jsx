import React, { useState } from "react";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
    {/* ----------------------------------heading------------------------------*/}
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="front-extrabold text-slate-200 text-[32px] ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-sky-400">
              Create{" "}
            </span>
            Images
          </h1>
          <p className="mt-2 text-slate-400 text-[16px] max-w-[700px]">
            {" "}
            Create imaginative and visually stunning images generated though
            DALL-E AI and share them with the community
          </p>
        </div>


        {/*-----------------------------form section -------------------------- */}

           

      </section>
    </>
  );
};

export default CreatePost;
