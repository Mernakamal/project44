
// function data(){
//     console.log("ahmed")
// }

// // data()


// 

// btn.onclick = data

// btn.addEventListener ("click" , data)

///////////////////////////////////////////////////////////////////////

// function data(event) {
//     // console.log(event.target)
//     // console.log(event.target.id)
//     // console.log(event.target.className)

//     // console.log(event.clientX)
//     // console.log(event.clientY)

//     // // console.log(event.offsetX)
//     // console.log(event.offsetY)

//     console.log(event.type)
// }

// var btn = document.querySelector("#btn1")
// btn.addEventListener ("dblclick" , data)

////////////////////////////////////////////////////////////////////////

// function data(event){
//     console.log("ali")
// }

// var div = document.querySelector (".result")

// div.addEventListener ("mousedown" , data)

// div.addEventListener ("mouseup" , data)

// div.addEventListener ("mouseenter" , data) 

// div.addEventListener ("mouseover" , data) 

// div.addEventListener ("mouseleave" , data)

// div.addEventListener ("mouseout" , data)

// div.addEventListener ("mousemove" , data)

////////////////////////////////////////////////////////////////////////

  var allProducts = document.querySelectorAll (".list li")

  var content = document.querySelector("#content")

  var btn = document.querySelector("#addToCart")
  var price=document.querySelector("#pricee")

  var totalPrice = 0;
var i1=document.querySelector(".i1")

  allProducts.forEach(function (item){
      item.onclick = function (){

        totalPrice +=  parseInt (item.getAttribute ("price"))
        content.innerHTML += item.textContent  + "  " ;

        if (content.innerHTML != "" ) {
            btn.style.display = "block"
            i1.style.display="block"
        }
      }
  })
  btn.onclick = function (){

    pricee.innerHTML="total price is"&& totalPrice
    price.style.display="block"
    content.style.display="block"
    
  }

  
  

