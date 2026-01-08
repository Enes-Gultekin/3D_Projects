const myData = [
  {
    lat: -0.5245208104057184,
    lng: 36.753387728832166,
    name: "kenya",
    url: "../data/kenya_border.geojson",
    color: "red",
  },
  {
    lat: 40.59574107567681,
    lng: -5.335875699829245,
    name: "bostwana",
    url: "../data/bostwana_border.geojson",
    color: "cyan",
  },
  {
    lat: 49.75144630859725,
    lng: 6.6424924590002945,
    name: "trier",
    url: "../data/germany_border.geojson",
    color: "yellow",
  },
  {
    lat: 51.521980853860214,
    lng: -0.12009109895504366,
    name: "london",
    url: "../data/britain_border.geojson",
    color: "white",
  },
  {
    lat: 50.521980853860214,
    lng: 10.491358329269445,
    name: "germany",
    url: "../data/germany_border.geojson",
    color: "white",
  },
];

// let kenya_border = [];
// Papa.parse("../data/kenya_border.csv", {
//   download: true,
//   header: false,
//   step: function (row) {
//     kenya_border.push(row.data.reverse());

//   },

//   complete: function () {
//     console.log("kenya_border is added");
//   },
// });

// const p_card = document.getElementById("projects_card");
// const close_button = document.getElementById("close_button");
// const world = Globe()(document.getElementById("globeViz"))
//   .globeImageUrl("img/earth.jpg")
//    .backgroundImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
//   .polygonsData(kenya_border)
//   .polygonStrokeColor("red")
//   .htmlElementsData(myData)
//   .htmlElement((d) => {
//     const el = document.createElement("div");
//     el.className = "marker-wrapper";

//     el.innerHTML = `
//         <div class="pulse" style="border-color: ${d.color}">${d.name}</div>

//       `;

//     el.onmouseover = () => console.log("Hovering over " + d.name);
//     el.onclick = () => {
//       world.controls().autoRotate = false;
//       p_card.style.right = "200px";
//       world.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.5 }, 1000);
//     };

//     //dialog window
//     document.getElementById("projects_card").classList.add("active");
//     document.getElementById("card_title").innerText = d.name;
//     document.getElementById(
//       "card_description"
//     ).innerText = `This is my work in ${d.name}.`;
//     return el;
//   });

// world.controls().autoRotate = true;
// world.controls().autoRotateSpeed = 0.2;
// document.getElementById("close_button").onclick = () => {
//   p_card.style.right = "0px";
//   // Hide the card
//   document.getElementById("projects_card").classList.remove("active");

//   // Zoom back out to show the whole world
//   world.pointOfView({ altitude: 2.5 }, 1000);

//   // Start spinning again
//   world.controls().autoRotate = true;
// };
const kenya = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [
            [25.087396898831884, 19.893829895727322],
            [25.087396898831884, 11.827486622238752],
            [33.1432490853297, 11.827486622238752],
            [33.1432490853297, 19.893829895727322],
            [25.087396898831884, 19.893829895727322],
          ],
        ],
        type: "Polygon",
      },
    },
  ],
};

// fetch("../data/kenya_protected.geojson")
//   .then((res) => res.json())
//   .then((kenyapr_json) => {
//     console.log(kenyapr_json.features);
//     const world = Globe()(document.getElementById("globeViz"))
//   .globeImageUrl("img/earth.jpg")
//   .polygonsData(kenyapr_json.features);

//   });

// fetch("../data/kenya_border.geojson")
//   .then((res) => res.json())
//   .then((kenyapr_json) => {
//     console.log(kenyapr_json.features);
//     const world = Globe()(document.getElementById("globeViz"))
//   .globeImageUrl("img/earth.jpg")
//   .polygonsData(kenyapr_json.features)
//   .polygonCapColor((0,0,0,0))

//   });
const world = Globe()(document.getElementById("globeViz"))
  .globeImageUrl("img/earth.jpg")
  .polygonAltitude(0.06);
async function fetchAllGeoJson(myData) {
  for (let i = 0; i < myData.length; i++) {
    try {
      console.log(`Fetching: ${myData[i].url}`);

      const response = await fetch(myData[i].url);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      console.log(data.features);
      world.polygonsData(data.features);

      //

      // You can store the results in an array or add them to a map here
    } catch (error) {
      console.error(`Could not fetch data for index ${i}:`, error);
    }
  }
}
fetchAllGeoJson(myData);
