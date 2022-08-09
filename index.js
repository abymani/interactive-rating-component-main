const rating_card=document.getElementById('rat_card');
const thanks_card=document.getElementById('tha_card');



 let score=0;
 function handleRating(sc) {
   score =sc;
   for(let i=1;i<6;i++){
     document.getElementById('r'+i).style.backgroundColor=" hsl(213, 19%, 18%)";
     document.getElementById('r'+i).style.color ="hsl(217, 12%, 63%)";
   }
   document.getElementById('r'+sc).style.backgroundColor ="hsl(217, 12%, 63%)";
   document.getElementById('r'+sc).style.color ="white";
 }

 function handleSubmit() {
   if(score ===0){
     return
   }
   else{
  rating_card.style.display= "none";
  thanks_card.style.display="flex";
  document.getElementById('score').innerHTML ="You selected "+score+ " out of 5";
}
}
