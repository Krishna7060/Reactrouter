import React from "react";

export default function Contact() {
  return (
    <div className="flex bg-slate-600 text-white h-auto w-auto rounded-lg justify-center items-center mt-8">
      <h2 className="text-orange-600 font-bold text-4xl">Hire Me</h2>
      <div>
        <img
          className="h-30 w-30 rounded-lg mx-8 mt-4 mb-2"
          src="https://avatars.githubusercontent.com/u/141170756?v=4"
          alt="Logo"
        />
      </div>
      <div>
        <ul>
          <li>Linkdin</li>
          <li>GitHub</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
}
