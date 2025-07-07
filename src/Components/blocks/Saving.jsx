import React from "react";

const Savings = () => {
  const piggyCard = [
    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      pics: "public/PB_18_Small_477bf21be6.png",
      image: "public/imgi_54_default.png",
      btnTitle: "Piggy bank",
      color: "#123456",
      hoverBgColor: "skyblue",
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      pics: "public/SL_22_Small_b570b54e82.png",
      image: "public/imgi_55_default.png",
      btnTitle: "Safe Lock",
      color: "skyblue",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      pics: "public/iphonw_a485f92ad1.avif",
      image: "public/imgi_56_default.png",
      btnTitle: "Target Savings",
      color: "green",
    },
    {
      title: "Flex Naria",
      desc: "Save, transfer, manage, organise, and withdraw your money at any time.",
      pics: "public/i_Phone_14_b4eaa3708a.avif",
      image: "public/imgi_57_default.png",
      btnTitle: "Flex Naria",
      color: "hotpink",
    },
    {
      title: "Flex Dollar",
      desc: "Save and grow your money in foreign currencies such as Dollars.",
      pics: "public/iphone12_5d07b2941e.avif",
      image: "public/imgi_58_default.png",
      btnTitle: "Flex Dollar",
      color: "#302d2d",
    },
    {
      title: "House Money",
      desc: "Plan for your rent and household expenses.",
      pics: "public/i_Phone_14_1_d7b9154111.png",
      image: "public/imgi_59_default.png",
      btnTitle: "House Money",
      color: "orange",
    },
  ];
  return (
    <div className=" my-20 flex flex-col items-center">
      <section className=" text-center mb-3">
        <h1 className=" font-bold text-5xl">Many ways to build your savings</h1>
        <p className=" text-2xl">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </section>
      <section className=" flex justify-center max-w-[1200px] flex-wrap">
        {piggyCard?.map((data, i) => (
          <main
            className={` bg-white h-[400px] w-[400px] group relative rounded-2xl border m-9 p-5  transition-colors duration-300`}
            key={i}
          >
            <h1
              style={{ color: `${data.color}` }}
              className=" font-bold text-3xl"
            >
              {" "}
              {data.title}{" "}
            </h1>
            <p>{data.desc}</p>
            <img
              src={data.pics}
              className="size-60  ml-30 invisible group-hover:visible transition-opacity duration-300"
              alt=""
            />
            <nav className="mt-3">
              <img src={data.image} className="inline" alt="" />
              <button> {data.btnTitle} </button>
            </nav>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Savings;
