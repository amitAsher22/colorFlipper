
var h1 = document.getElementsByClassName("textB")
var button = document.getElementsByClassName("BTnColor")
var AllMyColor = ['red' , 'AliceBlue' , 'Bisque' , 'Chartreuse' , 'DarkKhaki']
var TextP = document.querySelector(".TextP")





function ChangeColor(){
   AllMyColor.forEach((color)=>{
  var colorC =  AllMyColor[Math.floor(Math.random() * color.length)]
      document.body.style.backgroundColor = colorC 
      TextP.innerHTML = colorC
      
   })
   
   
   
}



