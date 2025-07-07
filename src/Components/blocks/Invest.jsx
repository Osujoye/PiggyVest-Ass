import React from "react";

const Invest = () => {
  return (
    <div className=" flex-col items-center  bg-blue-100 max-w-[1280px] p-10  rounded-3xl mx-auto flex ">
      <section className=" text-center mb-3">
        <h1 className=" font-bold text-5xl">Diverse ways to Invest</h1>
        <p className=" text-2xl">
          Grow your money and invest for your future confidently.
        </p>
      </section>
      <section className="flex justify-center bg-fuchsia-900 py-7 px-3 gap-10 rounded-2xl m-6">
        <main>
          <h1 className=" font-bold text-4xl">Earn Up to 35% returns</h1>
          <p className=" text-2xl">
            Invest securely and confidently on the go. Grow your money
            confidently by investing in pre-vetted investment opportunities.
          </p>
          <nav className="mt-12">
            <img src="public/arrow.svg" className="inline" alt="" />
            <span>Learn about Investments</span>
          </nav>
        </main>
        <main>
          <img src="public/iphoneInvest.avif" className="max-w-[50%]" alt="" />
        </main>
      </section>
    </div>
  );
};

export default Invest;
