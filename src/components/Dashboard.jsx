import React from "react";
import chipcard from "../assets/Chip_Card.png";
import visa from "../assets/visa.png";
import chipcardwhite from "../assets/chipcardwhite.png";
import visawhite from "../assets/visawhite.png";
import paypal from "../assets/paypal.png";
import money from "../assets/money.png";
import card from "../assets/card.png";
import BarStat from "./charts/BarStat";
import PieStats from "./charts/PieStats";

const Dashboard = () => {
  return (
    <div className="p-10">
      <div className="flex justify-between items-center ">
        <div className="w-[730px] ">
          <div className="flex w-[730px] justify-between items-center mb-[20px]  ">
            <h2 className="text-[#343C6A] text-[22px] font-semibold leading-normal">
              My Cards
            </h2>
            <p className="text-[#343C6A] text-[17px] font-semibold">See All</p>
          </div>
          <div className="flex">
            <div className=" flex justify-between">
              <div className="w-[350px] relative  h-[235px] flex-shrink-0 rounded-[25px] bg-gradient-to-r from-[#4C49ED] to-[#0A06F4]">
                <div className="p-4">
                  <div className="flex mb-8 justify-between">
                    <div className="">
                      <p className="text-white text-[12px] font-normal leading-normal font-lato">
                        Balance
                      </p>
                      <h4 className="text-white text-[20px] font-semibold leading-normal font-lato">
                        $5,757
                      </h4>
                    </div>
                    <img
                      src={chipcard}
                      className="w-[34.771px] h-[34.771px]"
                      alt=""
                    />
                  </div>
                  <div className=" flex gap-9">
                    <div>
                      <p className="text-[rgba(255,255,255,0.70)] uppercase text-[12px] font-normal leading-normal font-lato">
                        Card holder
                      </p>
                      <p className="text-white text-[15px] font-semibold leading-normal font-lato">
                        Fares Safer
                      </p>
                    </div>
                    <div>
                      <p className="text-[rgba(255,255,255,0.70)] uppercase text-[12px] font-normal leading-normal font-lato">
                        Valid Thru
                      </p>
                      <p className="text-white text-[15px] font-semibold leading-normal font-lato">
                        12/22
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-[350px] h-[70px] flex-shrink-0 rounded-b-[25px] bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0)]">
                  <div className=" mr-5 ml-5 mt-5 flex justify-between">
                    <p className="text-white text-[22px] font-semibold leading-normal font-lato">
                      3778 **** **** 1234
                    </p>
                    <img src={visa} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-9 flex justify-between">
              <div className="w-[350px] h-[235px] flex-shrink-0 rounded-[25px] border border-[#DFEAF2] bg-white">
                <div className="p-4">
                  <div className="flex mb-8 justify-between">
                    <div className="">
                      <p className="text-[#718EBF] text-[12px] font-normal leading-normal font-lato">
                        Balance
                      </p>
                      <h4 className="text-[#343C6A] text-[20px] font-semibold leading-normal font-lato">
                        $5,757
                      </h4>
                    </div>
                    <img
                      src={chipcardwhite}
                      className="w-[34.771px] h-[34.771px]"
                      alt=""
                    />
                  </div>
                  <div className=" flex gap-9">
                    <div>
                      <p className="text-[#718EBF] uppercase text-[12px] font-normal leading-normal font-lato">
                        Card holder
                      </p>
                      <p className="text-[#343C6A] text-[15px] font-semibold leading-normal font-lato">
                        Fares Safer
                      </p>
                    </div>
                    <div>
                      <p className="text-[#718EBF] uppercase text-[12px] font-normal leading-normal font-lato">
                        Valid Thru
                      </p>
                      <p className="text-[#343C6A] text-[15px] font-semibold leading-normal font-lato">
                        12/22
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bottom-0 mt-3 w-[350px] h-[70px] flex-shrink-0 rounded-b-[25px] bg-gradient-to-b border border-[#DFEAF2]  ">
                  <div className=" mr-5 ml-5 mt-5 flex justify-between">
                    <p className="text-[22px] text-[#343C6A]font-semibold leading-normal font-lato">
                      3778 **** **** 1234
                    </p>
                    <img src={visawhite} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#343C6A] text-[22px] font-normal ">
          <h2 className="text-[#343C6A] text-[22px] mb-[20px] font-semibold leading-normal">
            Recent Transaction
          </h2>
          <div className="border w-[350px] h-[235px] rounded-[25px] bg-white">
            <div className=" m-4">
              <div className="flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[55px] h-[55px] flex-shrink-0"
                  viewBox="0 0 55 55"
                  fill="#FFF5D9"
                >
                  <circle cx="27.5" cy="27.5" r="27.5" />
                  <image href={card} x="13.5" y="13.5" width="28" height="28" />
                </svg>

                <div className="flex flex-col">
                  <p className="text-[#232323] text-[16px] font-medium leading-normal font-inter">
                    Deposit from my Card
                  </p>
                  <p className="text-[#718EBF] text-[15px] font-light leading-normal font-inter">
                    28 January 2021
                  </p>
                </div>

                <p className="text-[#FF4B4A] text-[16px] font-medium leading-normal font-inter">
                  -$850
                </p>
              </div>

              <div className="flex items-center mt-[20px] mb-[20px] justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[55px] h-[55px] flex-shrink-0"
                  viewBox="0 0 55 55"
                  fill="#E7EDFF"
                >
                  <circle cx="27.5" cy="27.5" r="27.5" />
                  <image
                    href={paypal}
                    x="13.5"
                    y="13.5"
                    width="28"
                    height="28"
                  />
                </svg>

                <div className="flex flex-col">
                  <p className="text-[#232323] text-[16px] font-medium leading-normal font-inter">
                    Deposit from my Card
                  </p>
                  <p className="text-[#718EBF] text-[15px] font-light leading-normal font-inter">
                    28 January 2021
                  </p>
                </div>

                <p className="text-[#FF4B4A] text-[16px] font-medium leading-normal font-inter">
                  -$850
                </p>
              </div>
              <div className="flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[55px] h-[55px] flex-shrink-0"
                  viewBox="0 0 55 55"
                  fill="#DCFAF8"
                >
                  <circle cx="27.5" cy="27.5" r="27.5" />
                  <image
                    href={money}
                    x="13.5"
                    y="13.5"
                    width="28"
                    height="28"
                  />
                </svg>

                <div className="flex flex-col">
                  <p className="text-[#232323] text-[16px] font-medium leading-normal font-inter">
                    Deposit from my Card
                  </p>
                  <p className="text-[#718EBF] text-[15px] font-light leading-normal font-inter">
                    28 January 2021
                  </p>
                </div>

                <p className="text-[#FF4B4A] text-[16px] font-medium leading-normal font-inter">
                  -$850
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1100px]">
        <BarStat />
        <PieStats />
      </div>
    </div>
  );
};

export default Dashboard;
