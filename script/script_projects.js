const myData = [
  {
    lat: 49.5583505905056,
    lng: 6.863928309276275,
    ISO_A2: "DE",
    color: "#6c5ce7",
    name: "Trier, Germany",
    title:
      "Mitigating Wildlife Damage: Wild Boar Risk & Vineyard Suitability Analysis in Huwer Valley",
    description:
      "A spatial risk analysis identifying vineyard areas vulnerable to wild boar intrusion. Using cost-distance modeling and suitability analysis, the project delivered insights that led to a 15% reduction in wildlife-related agricultural damage.",
    tags: ["Cost Distance", "Suitability Modeling", "ArcGIS Pro"],
    link: "wild_bo.html",
    git: "cons.html",
  },
  {
    lat: -0.5245208104057184,
    lng: 36.753387728832166,
    name: "Kenya",
    title: "Forest Change Monitoring in Western and Central Kenya (2001-2021)",
    url: " data/kenya_border.geojson",
    color: "red",
    ISO_A2: "KE",
    description:
      "Analyzed two decades of forest change in Kenya using Landsat archives and the FORCE framework for ARD generation. Employed a Random Forest machine learning model to classify multi-temporal spectral metrics, achieving 84% accuracy in mapping forest stability and degradation.",
    tags: [
      "Landsat",
      "Machine Learning",
      "Random Forest",
      "FORCE",
      "Time-Series",
    ],
    link: "kenya.html",
    git: "cons.html",
  },
  {
    lat: 2.129466406578487,
    lng: 39.733437284508796,
    name: "Kenya",
    title: "Modeling Soil Erosion Risk in West Kenya",
    url: " data/kenya_border.geojson",
    color: "purple",
    ISO_A2: "KE",
    description:
      "This project utilizes the Revised Universal Soil Loss Equation (RUSLE) to assess soil erosion risks in West Kenya. By analyzing key factors such as rainfall patterns, soil characteristics, topography, land cover, and conservation practices, the study estimates erosion rates and identifies vulnerable areas. The findings provide valuable insights for sustainable land management and erosion control strategies, helping to mitigate soil degradation and promote environmental conservation.",
    tags: ["RUSLE Modeling", "Soil Erosion", "Environmental GIS", "Hydrology"],
    link: "https://storymaps.arcgis.com/stories/a5f12c45dcb843cbaeaaba49c35c140a",
    git: "cons.html",
  },
  {
    lat: -22.392482957234137,
    lng: 24.175533848483212,
    name: "Botswana",
    title: "Rainfall-Biomass Interactions in Botswana",
    url: " data/bostwana_border.geojson",
    color: "cyan",
    ISO_A2: "BW",
    description:
      "Investigating the response of vegetation to rainfall using MODIS time-series. This project combines Distributed Lag Modeling (DLM) with Random Forest regression to analyze how environmental variables like aridity and topography influence biomass sensitivity across Botswana.",
    link: "botswana.html",
    tags: ["DLM", "Random Forest", "Time-Series"],
    git: "cons.html",
  },
  {
    lat: 51.521980853860214,
    lng: -0.12009109895504366,
    name: "London, UK",
    title: "Spatial Analysis of Fast-Food Venues in London",
    url: " data/britain_border.geojson",
    color: "#064924ff",
    ISO_A2: "GB",
    description:
      "Analyzes of the spatial distribution of McDonald's, Burger King, and Five Guys using Foursquare data. It analyzes clustering and randomness through Complete Spatial Randomness (CSR), Moran's I, and LISA tests. The findings indicate significant clustering of fast-food venues, especially McDonald's, across London. There is a weak positive correlation between population size and venue numbers, and overall spatial autocorrelation among wards is minimal, despite some localized clusters",
    tags: ["Spatial Regression", "Spatial Autocorrelation", "R Programming"],
    link: "london.html",
    git: "cons.html",
  },
  {
    lat: 50.521980853860214,
    lng: 10.491358329269445,
    name: "Germany",
    title: "Pegel Plugin: Real-Time Hydrological Data Integration",
    url: " data/germany_border.geojson",
    color: "#ffffff",
    ISO_A2: "DE",
    description:
      "A custom Python plugin for QGIS that automates real-time water level data obtained from the Pegelonline API. Built with PyQGIS and PyQt5 for seamless monitoring workflows.",
    link: "cons.html",
    tags: ["QGIS Plugin", "Python", "REST API"],
    git: "https://github.com/Enes-Gultekin/pegel_plugin",
  },
  {
    lat: 41.02365621207687,
    lng: -3.596563756253431,
    name: "Spain",
    title: "Syndromes of Land Change in the Iberian Peninsula",
    url: " data/spain_border.geojson",
    color: "yellow",
    ISO_A2: "ES",
    description:
      "This research implements a 'syndrome-approach' to map and interpret long-term land-use and land-cover changes across the Iberian Peninsula over a 32-year period. Utilizing GIMMS NDVI time-series data, I fitted Fourier Polynomials to derive annual phenological properties, including peaking times, magnitudes, and integrals. Using the Seasonal Kendall test, monotonic trends were identified to pinpoint significant ecological shifts.",
    link: "peninsula.html",
    tags: ["Time-Series", "NDVI", "Pattern Recognition"],
    git: "cons.html",
  },
  {
    lat: 53.559264178079786,
    lng: 6.6424924590002945,
    ISO_A2: "DE",
    name: "Trier, Germany",
    color: "#ff4757",
    title: "Optimizing Rooftop Solar Potential",
    description:
      "Spatial analysis to assess solar potential of urban rooftops in Trier. Calculated aspect, slope, and solar radiation from DSM/DTM data to identify optimal PV surfaces.",
    tags: ["3D Analysis", "Renewable Energy", "Solar Modeling"],
    link: "cons.html",
    git: "https://github.com/Enes-Gultekin/Optimizing_Rooftop_Solar_Potential",
  },
  {
    lat: 39.59531719832839,
    lng: 32.713548977712804,
    ISO_A2: "TR",
    name: "Global (Seismic)",
    color: "#ff7f50",
    title: "Global Earthquake Monitoring: Real-Time Seismic Risk Visualization",
    description:
      "An interactive monitoring system visualizing global seismic activity using real-time USGS feeds. Processes live GeoJSON data to map magnitude and depth, identifying tectonic hotspots for disaster management.",
    tags: ["Real-Time Data", "USGS API", "GeoJSON"],
    link: "https://enes-gultekin.github.io/EarthQuake__monitoring_Project",
    git: "https://github.com/Enes-Gultekin/pegel_plugin",
  },
];

const p_card = document.getElementById("projects_card");
const close_button = document.getElementById("close_button");

fetch(
  "https://raw.githubusercontent.com/Enes-Gultekin/3D_Projects/main/data/countries.geojson"
)
  .then((res) => res.json())
  .then((countries) => {
    const world = new Globe(document.getElementById("globeViz"))
      .globeImageUrl(
        "https://raw.githubusercontent.com/Enes-Gultekin/3D_Projects/main/img/earth.jpg"
      )
      .backgroundImageUrl(
        "https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png"
      )
      .lineHoverPrecision(0)
      .pointOfView(
        { lat: 26.80933469895976, lng: 30.5291613294838, altitude: 1.5 },
        1000
      )
      .polygonsData(
        countries.features.filter((d) =>
          myData.some((item) => item.ISO_A2 === d.properties.ISO_A2)
        )
      )
      .polygonAltitude(0)
      .polygonCapColor(() => "rgba(122, 10, 117, 0.42)")
      .showGraticules(true)
      .polygonSideColor(() => "rgba(0, 100, 0, 0.15)")
      .polygonStrokeColor(() => "#111")
      .polygonLabel(
        ({ properties: d }) => `
          ${d.ADMIN}

        `
      )
      .onPolygonHover((hoverD) =>
        world.polygonAltitude((d) => (d === hoverD ? 0.06 : 0.06))
      )
      .polygonsTransitionDuration(300)
      .htmlElementsData(myData)
      .htmlAltitude(0.07)
      .htmlElement((d) => {
        const el = document.createElement("div");
        el.className = "marker-wrapper";
        el.id = "marker";
        el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill=${d.color} class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg> <i class="bi bi-geo-alt-fill"></i>


      `;
        world.onGlobeRightClick(() => {
          p_card.style.left = "-1000px";
          document.getElementById("projects_card").classList.remove("active");
          world.pointOfView(
            { lat: 26.80933469895976, lng: 30.5291613294838, altitude: 1.5 },
            1000
          );
          world.controls().autoRotate = true;
          world.controls().autoRotateSpeed = 0.2;
          world.polygonCapColor(() => "rgba(155, 24, 148, 0.32)");
          document.getElementById("close_button").style.display = "none";
        });

        el.onmouseover = () => console.log("Hovering over " + d.name);
        el.onclick = () => {
          world.controls().autoRotate = false;
          p_card.style.left = "100px";
          document.getElementById("projects_card").classList.add("active");

          document.getElementById(
            "card_title"
          ).innerText = `${d.title}(${d.name})`;
          document.getElementById("card_description").innerText = d.description;
          document.getElementById("card_tags").innerText = d.tags;

          document.getElementById("git").setAttribute("href", d.git);
          document.getElementById("website").setAttribute("href", d.link);

          world.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.5 }, 1000);
          document.getElementById("close_button").style.display = "block";
        };

        //dialog window

        return el;
      })
      .onPolygonClick((d) => {
        console.log(d.geometry.coordinates[0][8]),
          world.pointOfView(
            {
              lat: d.geometry.coordinates[0][8][1],
              lng: d.geometry.coordinates[0][8][0],
              altitude: 0.8,
            },
            1000
          ),
          (world.controls().autoRotate = false);
      });
    //close button attributes
    document.getElementById("close_button").onclick = () => {
      p_card.style.left = "-1000px";
      document.getElementById("projects_card").classList.remove("active");
      world.pointOfView(
        { lat: 26.80933469895976, lng: 30.5291613294838, altitude: 1.5 },
        1000
      );
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 0.2;
      world.polygonCapColor(() => "rgba(155, 24, 148, 0.32)");
      document.getElementById("close_button").style.display = "none";
    };
  });

const galleryToggle = document.getElementById("gallery_toggle");
const galleryOverlay = document.getElementById("gallery_overlay");
const closeGallery = document.getElementById("close_gallery");
const projectGrid = document.getElementById("project_grid");

myData.forEach((d, index) => {
  const card = document.createElement("div");
  card.className = "gallery_card";
  card.innerHTML = `
        <div style="color: ${
          d.color
        }; font-size: 0.8rem; margin-bottom: 5px;">📍 ${d.name}</div>
        <h3 style="margin: 0 0 10px 0; font-size: 1.1rem;">${d.title}</h3>
        <div class="card_tags_mini">
            ${d.tags
              .slice(0, 3)
              .map(
                (t) =>
                  `<span class="tech-tag" style="font-size: 0.6rem;">${t}, </span>`
              )
              .join("")}
        </div>
    `;

  card.onclick = () => {
    galleryOverlay.classList.add("hidden");
    const markers = document.querySelectorAll(".marker-wrapper");
    markers[index].click();
  };

  projectGrid.appendChild(card);
});

// 2. Open-Close Projects Window
galleryToggle.onclick = () => galleryOverlay.classList.remove("hidden");
closeGallery.onclick = () => galleryOverlay.classList.add("hidden");
