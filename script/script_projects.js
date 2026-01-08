const myData = [
  {
    lat: -0.5245208104057184,
    lng: 36.753387728832166,
    name: "kenya",
    url: "../data/kenya_border.geojson",
    color: "red",
    ISO_A2: "KE",
  },
  {
    lat: -22.392482957234137,
    lng: 24.175533848483212,
    name: "bostwana",
    url: "../data/bostwana_border.geojson",
    color: "cyan",
    ISO_A2: "BW",
  },
  {
    lat: 49.75144630859725,
    lng: 6.6424924590002945,
    name: "trier",
    url: "../data/germany_border.geojson",
    color: "yellow",
    ISO_A2: "DE",
  },
  {
    lat: 51.521980853860214,
    lng: -0.12009109895504366,
    name: "london",
    url: "../data/britain_border.geojson",
    color: "white",
    ISO_A2: "GB",
  },
  {
    lat: 50.521980853860214,
    lng: 10.491358329269445,
    name: "germany",
    url: "../data/germany_border.geojson",
    color: "blue",
    ISO_A2: "DE",
  },
  {
    lat: 41.02365621207687,
    lng: -3.596563756253431,
    name: "spain",
    url: "../data/spain_border.geojson",
    color: "yellow",
    ISO_A2: "ES",
  },
];

let kenya_border = [];

const p_card = document.getElementById("projects_card");
const close_button = document.getElementById("close_button");
// const world = Globe()(document.getElementById("globeViz"))
//   .globeImageUrl("img/earth.jpg")
//   .backgroundImageUrl(
//     "//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png"
//   )

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

// const colorScale = scaleSequentialSqrt(interpolateYlOrRd)
// // GDP per capita (avoiding countries with small pop)
// const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

// fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
// {
//   const maxVal = Math.max(...countries.features.map(getVal));

//   const world = new Globe(document.getElementById('globeViz'))
//     .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
//     .backgroundImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
//     .lineHoverPrecision(0)
//     .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
//     .polygonAltitude(0.06)

//     .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
//     .polygonStrokeColor(() => '#111')
//     .polygonLabel(({ properties: d }) => `
//       <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
//       GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
//       Population: <i>${d.POP_EST}</i>
//     `)
//     .onPolygonHover(hoverD => world
//       .polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
//       .polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
//     )
//     .polygonsTransitionDuration(300);
// });

//fetch countries borders
fetch("../data/countries.geojson")
  .then((res) => res.json())
  .then((countries) => {
    const world = new Globe(document.getElementById("globeViz"))
      .globeImageUrl(
        "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
      )
      .backgroundImageUrl(
        "//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png"
      )
      .lineHoverPrecision(0)
      .polygonsData(
        countries.features.filter((d) =>
          myData.some((item) => item.ISO_A2 === d.properties.ISO_A2)
        )
      )
      .polygonAltitude(0.06)
      .showGraticules(true)
      .polygonSideColor(() => "rgba(0, 100, 0, 0.15)")
      .polygonStrokeColor(() => "#111")
      .polygonLabel(
        ({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
          GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
          Population: <i>${d.POP_EST}</i>
        `
      )
      .onPolygonHover((hoverD) =>
        world.polygonAltitude((d) => (d === hoverD ? 0.12 : 0.06))
      )
      .polygonsTransitionDuration(300)
      .htmlElementsData(myData)
      .htmlElement((d) => {
        const el = document.createElement("div");
        el.className = "marker-wrapper";

        el.innerHTML = `
        <div class="pulse" style="border-color: ${d.color}">${d.name}</div>

      `;

        el.onmouseover = () => console.log("Hovering over " + d.name);
        el.onclick = () => {
          world.controls().autoRotate = false;
          p_card.style.right = "200px";
          document.getElementById("projects_card").classList.add("active");
          document.getElementById("card_title").innerText = d.name;
          document.getElementById(
            "card_description"
          ).innerText = `This is my work in ${d.name}.`;
          world.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.5 }, 1000);
        };

        //dialog window

        document.getElementById("close_button").onclick = () => {
          p_card.style.right = "0px";
          document.getElementById("projects_card").classList.remove("active");
          world.pointOfView({ altitude: 2.5 }, 1000);
          world.controls().autoRotate = true;
          world.controls().autoRotateSpeed = 0.2;
        };

        return el;
      });
  });

// world.controls().autoRotate = true;

//close button attributes
