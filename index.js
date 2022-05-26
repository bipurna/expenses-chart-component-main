const datas =[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
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
