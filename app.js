var lati;
var longi;

const successss = (position) => {
  const latitude = position.coord.lat;
  const longitude = position.coord.lon;
  console.log(latitude);
  console.log(longitude);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5aa2e72550msh5f9f816a5e80a34p18fb52jsn7c55579bc512",
      "X-RapidAPI-Host": "air-quality.p.rapidapi.com",
    },
  };
  fetch(
    `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
function getdata() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=ooty&appid=4d09cd0e0c359927e26a1df8e5a0de90"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.coord);
      successss(data);
    });
}
getdata();

function position() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=4d09cd0e0c359927e26a1df8e5a0de90"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.coord);
      lati = data.coord.lat;
      longi = data.coord.lon;
      console.log("lng " + longi);
      console.log("lat " + lati);
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZWNlbGx1dmNlIiwiYSI6ImNsZmIyMzc0ZDJ2cG8zeWxoMTU3Z2lodnIifQ.U7a1vZr48AmTXvAwkAH1EQ";
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: [longi, lati], // starting position [lng, lat]
        zoom: 3, // starting zoom
      });
    });
}

let input = document.getElementById("input");

document.getElementById("submit").addEventListener("onclick", position(input.value));

// back to top button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("back-to-top-btn").addEventListener("click", backToTop);
