
const eventOrganizer = document.querySelector('#result')
//getting data from api and to append in html
function getcolor(){
    var color=document.getElementById("form").value

  fetch(`https://x-colors.herokuapp.com/api/random/${color}`)
  .then((data)=>(data.json()))
  .then((data1)=>{
    var hex= document.getElementById("hexcolor");
    var rgb= document.getElementById("rgbcolor");
    hex.innerHTML=data1.hex;
    rgb.innerHTML=data1.rgb;
  
    var hexcard= document.getElementById("hexcard");
    var rgbcard= document.getElementById("rgbcard");
    hexcard.style.background=data1.hex;
    rgbcard.style.background=data1.rgb;
      
    })
  .catch((error)=>console.log(error));


}

//Event Listner

eventOrganizer.addEventListener('click', getcolor)









