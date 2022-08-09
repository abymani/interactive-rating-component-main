const submit = document.getElementById('submit');
const rating_card=document.getElementById('rat_card');
const thanks_card=document.getElementById('tha_card');
const rate = document.getElementsByClassName('rate');
const rating= document.getElementsByClassName('rating');
const score=document.getElementById('score');



 function handleSubmit() {
  rating_card.style.display= "none";
  thanks_card.style.display="flex";

}
