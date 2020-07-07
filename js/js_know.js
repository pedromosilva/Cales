//Detect screen width
document.getElementById("demo").innerHTML = "Screen width is " + screen.width;

if (isMobile()) {
  document.getElementById("ismobilestr").innerHTML =
    "The device is a mobile device.";
} else {
  document.getElementById("ismobilestr").innerHTML =
    "The device is NOT a mobile device.";
}

if (isMobileTablet()) {
  document.getElementById("ismobiletabletstr").innerHTML =
    "The device is a Mobile or Tablet.";
} else {
  document.getElementById("ismobiletabletstr").innerHTML =
    "The device is NOT a mobile or Tablet device.";
}
