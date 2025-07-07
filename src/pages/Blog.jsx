import React from "react";

const Blog = () => {
  return (
    <div className="flex justify-between">
      <main>
        <h1 className="text-3xl  font-semibold text-gray-900">
          Introducing: Piggyvest Wellness Checks
        </h1>
        <p>Ifeoluwa Adekoya</p>
        <button className="bg-pink-700 rounded-3xl p-3">Announcements</button>
      </main>

      <section>
        <h2 className="text-sm font-semibold text-gray-900">Most Popular</h2>
        <main className="flex justify-between">
          <p className="text-xs text-gray-500">
            Building Wealth in Your 20s: Practical Money-Saving Strategies for
            Young Nigerians
          </p>
          <button className="bg-amber-400 rounded-3xl p-1">Money Tips</button>
        </main>
        <hr />
        <main className="flex justify-between">
          <p className="text-xs text-gray-500">
            My Money Mistake: My Family Lost Over ₦10 Million To A Ponzi Scheme
          </p>
          <button className="bg-blue-700 rounded-3xl p-1">
            My Money Mistake
          </button>
        </main>
        <hr />
        <main className="flex justify-between">
          <p className="text-xs text-gray-500">
            Women & Money: Ore Eni-Ibukun Is Prioritising Work-Rest Balance
          </p>
          <button className="bg-green-600 rounded-3xl p-1">
            Women & Money
          </button>
        </main>
      </section>
    </div>
  );
};

export default Blog;
