//1/ testing if html and js is linked
// console.log("testing");

//2/ get variables(elements)
// let title = document.getElementById("title");
// testing if i get the element
// console.log(title);
// title.addEventListener("click", function () {
//   console.log(e);
//   if (title.style.color == "red") {
//     title.style.color = "black";
//   } else {
//     title.style.color = "red";
//   }
// });

let plus = document.querySelectorAll(".plus");
let moin = document.querySelectorAll(".moin");
let t = document.querySelectorAll(".tot");
console.log(plus);


let qte = document.querySelectorAll(".qte");
let prix = document.querySelectorAll(".price");

console.log(qte);
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    
  
    if(Number(qte[i].innerHTML)>0){qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
      t[0].innerHTML = Number(t[0].innerHTML) +  Number(prix[i].innerHTML);}
  
    
  });
  moin[i].addEventListener("click", function () {
  
    if(Number(qte[i].innerHTML)>1){
      qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
    t[0].innerHTML = Number(t[0].innerHTML) - Number(prix[i].innerHTML);
    }
    
  });
}
let delet = document.querySelectorAll(".remove");
console.log(delet)
let parentElem = document.querySelectorAll(".name");
let childElem = document.querySelectorAll(".content");
for (let i = 0; i < 3; i++) {
  delet[i].addEventListener("click", function () {
 parentElem[0].removeChild(childElem[i]);
 t[0].innerHTML = Number(t[0].innerHTML) -Number(prix[i].innerHTML)*Number(qte[i].innerHTML);


});
}


let like = document.querySelectorAll(".likebutton")
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    like[i].classList.toggle("grey");
  });
    

}