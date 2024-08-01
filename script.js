const filmess = document.getElementById("filmes");
const musicass = document.getElementById("musicas");
const abaixarone = document.getElementById("baixoone");
const abaixartwo = document.getElementById("baixotwo");

abaixarone.addEventListener("click", () => {
  if (filmess.style.display === "none") {
    filmess.style.display = "block";
    abaixarone.style.transform = "rotate(180deg)";
  } else {
    filmess.style.display = "none";
    abaixarone.style.transform = "rotate(0deg)";
  }
});

abaixartwo.addEventListener("click", () => {
  if (musicass.style.display === "none") {
    musicass.style.display = "block";
    abaixartwo.style.transform = "rotate(180deg)";
  } else {
    musicass.style.display = "none";
    abaixartwo.style.transform = "rotate(0deg)";
  }
});