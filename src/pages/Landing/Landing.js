import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Landing = () => {
  return (
    <>
      <main className="max-w-md mx-auto bg-white shadow-md overflow-hidden  md:max-w-full dark:bg-gray-800 dark:text-white">
        <Header />
        <div className="flex flex-wrap justify-center">
          <div className="bg-accent-dark bg-cover">
            <img
              src="https://images3.alphacoders.com/206/thumb-1920-206177.jpg"
              alt="..."
              class="shadow rounded max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Landing;
