import React from "react";

const Dashboard = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between items-center border">
        <div className="flex-1 border">
          <div className="flex justify-between items-center m-5 border">
            <h2 className="text-[#343C6A] text-[22px] font-semibold leading-normal">
              My Cards
            </h2>
            <p className="text-[#343C6A] text-[17px] font-semibold">See All</p>
          </div>
          <div className="border m-5 flex justify-between">
            <div className="border w-">kugekdfae</div>
            <div>oujhfzekjfnz</div>
          </div>
        </div>
        <div className="text-[#343C6A] text-[22px] font-normal border">
          Recent Transactions
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
