const generateBtn =  document.getElementById("generate-btn")
const paletteContainer = document.getElementById(".paletter-container");

generateBtn.addEventListener("click",generatePalette);

paletteContainer.addEventListener("click",function (e){
  if(e.target.classList.contains("copy-btn")){

    const hexValue = e.target.previousElementSibling.textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(()=>showCopySuccess(e.target))
      .catch((err)=>console.log(err));

  }else if(e.target.classList.contains("color")){
    const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(()=>showCopySuccess(e.target))
      .catch((err)=>console.log(err));
  }

});

function showCopySuccess(element){
  element.classList.remove("far","fa-copy");
  element.classList.add("fas","fa-check");
  element.style.color = "lightgreen";

  setTimeout(() => {
    element.classList.remove("fas", "fa-check");
    element.classList.add("far", "fa-copy");
    element.style.color = "";
  }, 1500);

}

function generatePalette(){
  const colors = [];
  for(let i=0;i<5;i++){
    colors.push(generateRandomeColor());

  }
  updatePaletteDisplay(colors);
}

function generateRandomeColor(){
  const letters = "0123456789ABCDEF";
  let color="#";
  for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;

  }
function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box"); // ✅ select all .color-box elements

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    if (!color) return; // just in case there are more boxes than colors

    const colorDiv = box.querySelector(".color");
    const hexValue = box.querySelector(".hex-value");

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color.toUpperCase(); // if colors are hex codes
  });
}
