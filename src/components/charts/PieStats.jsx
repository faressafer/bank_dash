import React from "react";

const getChartOptions = () => {
  return {
    series: [52.8, 26.8, 20.4],
    colors: ["#1C64F2", "#16BDCA", "#9061F9"],
    chart: {
      height: 420,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        labels: {
          show: true,
        },
        size: "100%",
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ["Direct", "Organic search", "Referrals"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };
};

if (document.getElementById("pie-chart") && typeof ApexCharts !== "undefined") {
  const chart = new ApexCharts(
    document.getElementById("pie-chart"),
    getChartOptions()
  );
  chart.render();
}

const PieStats = () => {
  return (
    <div className=" mt-8 w-[350px] h-[322px]">
      <h2 className="text-[#343C6A] text-[22px] mb-[20px] font-semibold leading-normal">
        Expense Statistics
      </h2>
      <div className="bg-white w-[350px] h-[322px]  rounded-[25px]">
        <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-between items-start w-full"></div>
          <div class="py-6" id="pie-chart"></div>
        </div>
      </div>
    </div>
  );
};

export default PieStats;
