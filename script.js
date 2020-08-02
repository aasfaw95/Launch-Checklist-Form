// Write your JavaScript code here!
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
/*{
   "name": "Mars",
   "diameter": "6779 km",
   "star": "Sol",
   "distance": "225 million km from Earth",
   "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
   "moons": 2
},*/
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
            <h2> Mission Destination </h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>

            </ol>
            <img scr="${json[3].image}"> 
            `;
         });
       });
   

      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");

         if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();

        } else if (isNaN(pilotNameInput.value)===false || isNaN(copilotNameInput.value)===false || isNaN(fuelLevelInput.value)|| isNaN(cargoMassInput.value)) {
            alert("Make sure to enter valid information for each field!");
            event.preventDefault(); 
            
         }

         if (fuelLevelInput.value < 10000) {
          let fuelLevelElem = document.getElementById("faultyItems");
            fuelLevelElem.style.visibility = "visible";
            event.preventDefault();
          let launchStatusRed = document.getElementById("launchStatus");
            launchStatusRed.style.color = "red";
            event.preventDefault();
         let launchStatusUpdate = document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            event.preventDefault();
          let pilotStatusUpdate = document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
          let copilotStatusUpdate = document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`
          let fuelStatusUpdate = document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`
         event.preventDefault();
         }

         if (cargoMassInput.value > 10000) {
            let cargoMassElem = document.getElementById("faultyItems");
              cargoMassElem.style.visibility = "visible";
              event.preventDefault();
            let launchStatusRed = document.getElementById("launchStatus");
              launchStatusRed.style.color = "red";
              event.preventDefault();
           let launchStatusUpdate = document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
              event.preventDefault();
            let pilotStatusUpdate = document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
            let copilotStatusUpdate = document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`
            let cargoStatusUpdate = document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`
           event.preventDefault();
         }

         if (cargoMassInput.value < 10000 & fuelLevelInput.value > 10000) {
            let cargoMassElem = document.getElementById("faultyItems");
              cargoMassElem.style.visibility = "visible";
              event.preventDefault();
            let launchStatusGreen = document.getElementById("launchStatus");
              launchStatusGreen.style.color = "green";
              event.preventDefault();
           let launchStatusUpdateGo = document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready for Launch";
              event.preventDefault();
            let pilotStatusUpdate = document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
            let copilotStatusUpdate = document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`
           event.preventDefault();
         }


      });
   });

   
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
