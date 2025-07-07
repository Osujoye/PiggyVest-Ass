import React from "react";
import Button from "../Components/Reuseable/Button";

const Invest = () => {
  return (
    <div className="max-w-[1280px] bg-purple-900 text-amber-100 mt-3.5 m-8 flex justify-between">
      <main className="align-middle">
        <h1 className="font-semibold text-3xl"> Invest on the go</h1>
        <p>
          Invest securely and confidently on the go. Up to 35% returns, 6-12
          month duration.
        </p>
        <Button title="Invest Now" borderColor="white" />
      </main>
      <section className="w-40">
        <img src="public/iphoneInvest.avif" alt="" />
      </section>
    </div>
  );
};

export default Invest;
