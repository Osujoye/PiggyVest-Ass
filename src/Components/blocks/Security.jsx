import React from "react";

const Security = () => {
  return (
    <div>
      <section className="max-w-[1280px] px-16  mx-auto flex gap-5 max-tablet:flex-col">
        <main>
          <img src="public/securitylock.svg" alt="" />
        </main>
        <main>
          <h1>Your security is our priority</h1>
          <p>
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
          <img src="public/imgi_53_default.png" className="inline" alt="" />
          <span>More on our security measures</span>
        </main>
      </section>
    </div>
  );
};

export default Security;
