import React from "react";

const Saver = () => {
  return (
    <div className="max-w-[1280px] px-16  mx-auto">
      <section className="flex my-20 flex-col items-center">
        <h1 className=" font-bold text-5xl">Meet Our Saver of the Month</h1>
        <p className=" font-light text-2xl">
          Every month, we shine a spotlight on one saver, asking them about
          their savings culture and how Piggyvest has helped them.
        </p>
      </section>
      <section className="flex my-20 flex-col items-center">
        <iframe
          width="791"
          height="445"
          src="https://www.youtube.com/embed/2EnGMGxKuII"
          title="Piggyvest Saver of the Month - HairsbyDinma"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
};

export default Saver;
