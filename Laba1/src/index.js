import "./styles.css";

document.getElementById("button").addEventListener("click", function () {
  let starttime = document.getElementById("starttime");
  let starttime_value = starttime.value;
  let endtime = document.getElementById("endtime");
  let endtime_value = endtime.value;
  let URL = `https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${starttime_value}&endtime=${endtime_value}`;
  const HTTP = new XMLHttpRequest();
  HTTP.open("GET", URL);
  HTTP.send();

  HTTP.onreadystatechange = (e) => {
    document.getElementById(
      "result"
    ).innerHTML = `there were ${HTTP.responseText} earthquakes in that time period`;
  };
});
