
function addExField()
{

    //console.log("Adding new field");

   let newNode=document.createElement("textarea");
   newNode.classList.add("from-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.classList.add("mr-4");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

  let weOb=document.getElementById("we");
  let weAddButtonOb=document.getElementById("weAddButton");

  weOb.insertBefore(newNode,weAddButtonOb)
}

function addaqField(){

    //console.log("Adding new field");

    let newNode=document.createElement("textarea");
    newNode.classList.add("from-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.classList.add("mr-6");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
 
   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");
 
   aqOb.insertBefore(newNode,aqAddButtonOb);
 }


 //generated CV

 function generatCV(){

   // console.log("generating cv");

   let nameField1=document.getElementById("nameField").value;

   let nameT11=document.getElementById("nameT1")
    nameT11.innerHTML=nameField1;

    //direct name2

   document.getElementById('nameT2').innerHTML=nameField1

   //contact

   document.getElementById("contactT").innerHTML = 
   document.getElementById("contactField").value;

   //let nameField2=document.getElementById("contactField").value;

   //let nameT12=document.getElementById("contactT")
    //nameT11.innerHTML=nameField1;

    document.getElementById("addressT").innerHTML = 
   document.getElementById("addressField").value;

   document.getElementById("linkT").innerHTML = 
   document.getElementById("ldField").value;

   document.getElementById("gitT").innerHTML = 
   document.getElementById("ghField").value;

   document.getElementById("instaT").innerHTML = 
   document.getElementById("igField").value;

   
//objective

document.getElementById('objectiveT').innerHTML=document.getElementById(
  'objectiveField'
  ).value;

   

  //workexperiance

let wes=document.getElementsByClassName('weField')

let str=''

for( let e of wes)
{
 str = str + `<li> ${e.value}</li>` ;

}
document.getElementById('weT').innerHtml = str;


//aquadamic qualification

let aqs=document.getElementsByClassName('aqField')
let str1=''
for(let e of aqs)
{
  str1 += `<li> ${e.value} </li>`;
}

document.getElementById('aqT').innerHTML=str1;

document.getElementById('cv-form').style.display='none'
document.getElementById('cv-templete').style.display='block'

 }
//print cv
 function printCV()
 {

  window.print();

 }

