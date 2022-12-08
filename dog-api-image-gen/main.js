import axios from "axios";

sync function fetchDoggie(){
  try{
    //Everything is working fine for now. 
    const doggieData = await axios.get("https://dog.ceo/api/breeds/image/random");

    if(dogieData.status == 200){
      return doggieData.data;
    else {
      return null;
    }
  } catch(error){
    //Oh no, something went wrong.
    console.log(error);
  }
}

function showDoggieImage(){
  const dogImageContainer = document.getElementById("dogImageContainer");

  const dogGenerateButton = document.getElementBy("dogGeneratorButton");

  const newImgElement = document.createElement("img");

  dogGenerateButton.addEventListener("click", async function(){
    const newDoggie = await fetchDoggie();

    newImgElement.src = newDoggie.message;
  })

  dogImageContainer.innerText = newImgElement;
}

showDoggieImage();
