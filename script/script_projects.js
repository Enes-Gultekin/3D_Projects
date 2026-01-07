// 2. Fix: Corrected the typo "onst" to "const"
const myData = [
  {
    lat: -0.5245208104057184,
    lng: 36.753387728832166,
    name: "kenya",
    color: "red",
  },
  {
    lat: 40.59574107567681,
    lng: -5.335875699829245,
    name: "bostwana",
    color: "cyan",
  },
  {
    lat: 49.75144630859725,
    lng: 6.6424924590002945,
    name: "trier",
    color: "yellow",
  },
  {
    lat: 51.521980853860214,
    lng: -0.12009109895504366,
    name: "london",
    color: "white",
  },
  {
    lat: 50.521980853860214,
    lng: 10.491358329269445,
    name: "germany",
    color: "white",
  },
];
const kenya = [
  [25.087396898831884, 19.893829895727322],
  [25.087396898831884, 11.827486622238752],
  [33.1432490853297, 11.827486622238752],
  [33.1432490853297, 19.893829895727322],
  [25.087396898831884, 19.893829895727322],
];

const p_card = document.getElementById("projects_card")
const close_button = document.getElementById("close_button")
const world = Globe()(document.getElementById("globeViz"))
  .globeImageUrl("img/earth.jpg")
  .htmlElementsData(myData) // Use your project array
  .htmlElement((d) => {
    const el = document.createElement("div");
    el.className = "marker-wrapper"; // THIS LINKS TO THE CSS ABOVE

    el.innerHTML = `
        <div class="pulse" style="border-color: ${d.color}">${d.name}

      `;

    el.onmouseover = () => console.log("Hovering over " + d.name);
    el.onclick = () =>
      world.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.5 }, 1000);



    //dialog window


    return el;
  });

// 3. Tip: Add auto-rotation to make it feel alive
world.controls().autoRotate = false;
world.controls().autoRotateSpeed = 0.2;
