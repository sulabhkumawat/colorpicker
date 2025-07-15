const generateBtn =  document.getElementById("generate-btn")
const paletterContainer = document.getElementById(".paletter-container");

generateBtn.addEventListener("click",generatePalette);

paletterContainer.addEventListener("click",function (e){
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
  updatePaletterDisplay(colors);
}

function generateRandomeColor(){
  const letters = "0123456789ABCDEF";
  let color="#";
  for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;

  }
function updatePaletterDisplay(colors){
  const colorBoxes = document.getElementById(".color-box");

  colorBoxes.forEach((box,index)=>{
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexValue = box.querySelector(".hex-value");
  });
}