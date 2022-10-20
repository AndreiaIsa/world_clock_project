function updateTime() {
  let funchalElement = document.querySelector("#funchal");
  let funchalDateElement = funchalElement.querySelector(".date");
  let funchalTimeElement = funchalElement.querySelector(".time");
  let funchalTime = moment().tz("Atlantic/Madeira");
  funchalDateElement.innerHTML = funchalTime.format("MMMM Do YYYY");
  funchalTimeElement.innerHTML = funchalTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
