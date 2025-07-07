import React from "react";
import Button from "../Components/Reuseable/Button";

const Stories = () => {
  return (
    <div className="flex justify-center max-w-[1280px] h-full px-16 mx-auto">
      <main className="text-4xl">
        <h1 className="font-bold">Loved by our Customers</h1>
        <p>
          Stories of happy savers who Piggyvest has helped or is helping save
          for what truly matters to them.
        </p>
        <Button title="Add your Story" bgColor="#122231" textColor="#fff" />
      </main>
      <section>
        <img src="public/stories-header.png" alt="" />
      </section>
    </div>
  );
};

export default Stories;
