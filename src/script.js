function updateTime() {
  let funchalElement = document.querySelector("#funchal");
  if (funchalElement) {
    let funchalDateElement = funchalElement.querySelector(".date");
    let funchalTimeElement = funchalElement.querySelector(".time");
    let funchalTime = moment().tz("Atlantic/Madeira");
    funchalDateElement.innerHTML = funchalTime.format("MMMM Do YYYY");
    funchalTimeElement.innerHTML = funchalTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}
          </div>
        </div>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);

setInterval(updateTime, 1000);
