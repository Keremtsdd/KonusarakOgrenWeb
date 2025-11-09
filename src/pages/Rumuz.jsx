import React, { useState } from "react";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";

function Rumuz() {
  const [name, setName] = useState();
  const navigate = useNavigate();

  const handleNameSubmit = () => {
    if (name === "" || name == null) {
      alert("Lütfen bir isim giriniz.");
    } else {
      navigate("/chat", { state: { name } });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden ">
      <div className="bg-[#cdcdc1] py-8 w-[400px] rounded-2xl shadow-xl hover:shadow-2xl duration-300 flex flex-col items-center gap-5">
        <img src={image} className="h-32 select-none" alt="konusarakogren" />

        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="isim"
            className="text-black text-center text-xl font-bold tracking-wide"
          >
            İsim giriniz
          </label>
          <input
            id="isim"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="İsminizi yazınız..."
            className="p-3 mx-10 mt-4 bg-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400 text-gray-800"
          />
        </div>

        <button
          onClick={handleNameSubmit}
          className="mt-4 select-none bg-white text-black cursor-pointer font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-300  transition-all duration-300"
        >
          Gönder
        </button>
      </div>
    </div>
  );
}

export default Rumuz;
