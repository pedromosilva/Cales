let indexformat = document.getElementById("indexformat");

if (isMobile()) {
  indexformat.href = "./styles/indexmobile.css";
} else {
  indexformat.href = "./styles/index.css";
}
