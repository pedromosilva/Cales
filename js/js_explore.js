let exploreformat = document.getElementById("exploreformat");

if (isMobileTablet()) {
  exploreformat.href = "../styles/exploremobile.css";
} else {
  exploreformat.href = "../styles/exploredesktop.css";
}
