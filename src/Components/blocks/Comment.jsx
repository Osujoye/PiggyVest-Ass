import React from "react";
import Button from "../Reuseable/Button";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Comment = () => {
  return (
    <div>
      <section className="flex max-w-[1280px] h-full px-16 mx-auto max-tablet:flex-col">
        <main className="size-1/2">
          <img src="public/fallbackImg.png" alt="" />
        </main>
        <main className="">
          <nav
            style={{ borderRadius: "200px" }}
            className="size-20 flex gap-0.5"
          >
            <img src="public/img5d2175e88f.jpeg" alt="" />
            <img src="public/img6ef4f48b4b.jpeg" alt="" />
            <img src="public/img453cede493.jpeg" alt="" />
            <img src="public/img725396eb22.jpeg" alt="" />
          </nav>

          <h1> Join 5+ million people who save and invest with us</h1>

          <nav className="flex gap-1.5">
            <Button
              title="Get on iPhone"
              borderColor="#122231"
              textColor="black"
              iconTitle={<FaApple />}
            />
            <Button
              title="Get on Android"
              borderColor="#122231"
              textColor="black"
              iconTitle={<FaGooglePlay />}
            />
          </nav>
        </main>
      </section>
    </div>
  );
};

export default Comment;
