import React from "react";

const Icon = () => {
  return (
    <div>
      <section className="max-w-[1280px] h-full px-16 mx-auto">
        <main>
          <h1 className="flex flex-col items-center font-bold text-3xl mb-6">
            As featured in
          </h1>
        </main>
        <main className="grid grid-cols-6 gap-7">
          <img src="public/brand1.png" alt="" />
          <img src="public/output.png" alt="" />
          <img src="public/tclogo@2x.png" alt="" />
          <img src="public/pym-removebg-preview.svg" alt="" />
          <img src="public/fast.svg" alt="" />
          <img src="public/cio.svg" alt="" />
        </main>
      </section>
    </div>
  );
};

export default Icon;
