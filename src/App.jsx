import React from "react";

const App = () => {
  return (
    <section className="w-[600px] h-[600px] mx-auto mt-[400px]">
      <div className="">
        <div className="flex">
          <div className="w-[200px] h-[200px]  border-l-1 border-t-1 border-black">
            <p className="text-[150px] text-center leading-[200px]">1</p>
          </div>
          <div className="w-[200px] h-[200px] border-l-1 border-t-1 border-r-1    border-black ">
            <p className="text-[150px] text-center leading-[200px]">2</p>
          </div>
          <div className="w-[200px] h-[200px]  border-r-1 border-t-1 border-black ">
            <p className="text-[150px] text-center leading-[200px]">3</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[200px] h-[200px]  border-l-1 border-t-1 border-black">
            <p className="text-[150px] text-center leading-[200px]">4</p>
          </div>
          <div className="w-[200px] h-[200px] border-l-1 border-t-1 border-r-1 border-black ">
            <p className="text-[150px] text-center leading-[200px]">5</p>
          </div>
          <div className="w-[200px] h-[200px]  border-r-1 border-t-1 border-black ">
            <p className="text-[150px] text-center leading-[200px]">6</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[200px] h-[200px] border-b-1 border-l-1 border-t-1 border-black">
            <p className="text-[150px] text-center leading-[200px]">7</p>
          </div>
          <div className="w-[200px] h-[200px] border-1 border-black ">
            <p className="text-[150px] text-center leading-[200px]">8</p>
          </div>
          <div className="w-[200px] h-[200px] border-b-1 border-r-1 border-t-1 border-black ">
            <p className="text-[150px] text-center leading-[200px]">9</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
