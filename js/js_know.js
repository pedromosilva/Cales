let knowformat = document.getElementById("knowformat");

if (isMobile()) {
  knowformat.href = "../styles/knowmobile.css";
} else {
  knowformat.href = "../styles/knowdesktop.css";
}
