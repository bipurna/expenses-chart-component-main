import datas from "./data.json" assert { type: "json" };

const labels = datas.map((data) => data.day);
const dataN = datas.map((data) => data.amount);

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: [
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(186, 34%, 60%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
        "hsl(10, 79%, 65%)",
      ],
      borderColor: "rgb(255,255,20)",
      borderRadius: "6",
      borderSkipped: false,
      data: dataN,
    },
  ],
};
const config = {
  type: "bar",
  label:'',
  data: data,

  options: {
    animation: {
        duration: 0
    },
      plugins:{
          legend:{
              display:false,
          }
      },
    
    scales: {
       
      x: {
        grid: {
          display: false,
          drawBorder:false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
          drawBorder:false,
        },
        ticks: {
          display: false,
        },
       
      },
    },
  },
};

const chart = new Chart(document.getElementById("container"), config);
