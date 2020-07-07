let exploreformat = document.getElementById("exploreformat");

if (isMobile()) {
  exploreformat.href = "../styles/exploremobile.css";
} else {
  exploreformat.href = "../styles/exploredesktop.css";
}
