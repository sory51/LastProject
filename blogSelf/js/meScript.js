const items=document.querySelectorAll('img');
const nbSlide=items.length;
const suivant=document.querySelector('.right');
const precedent =document.querySelector('.left');
let count=0;
function slideSuivante(event){
    items[count].classList.remove('active');
    if (count<nbSlide - 1) {
        count++;
        
    } else {
        count = 0;     
    }
    items[count].classList.add('active');
    event.preventDefault();

}
suivant.addEventListener('click',slideSuivante)
function slidePrecedente(event){
    items[count].classList.remove('active');
    if (count>0) {
        count--;
        
    } else {
        count = nbSlide - 1;     
    }
    items[count].classList.add('active');
    event.preventDefault();
}
precedent.addEventListener('click',slidePrecedente)
function keyPress(e){
    if (e.keyCode === 37) {
        slidePrecedente();
        
    } else if (e.keyCode===39){
        slideSuivante();
        
    }
    e.preventDefault();
}
document.addEventListener('keydown',keyPress);

let commentId=document.getElementById('commentaire');
    commentId.addEventListener('click',function(){
        let newComment=document.getElementById('formulaire');
            newComment.innerHTML='<form action="#"><label for="">Pseudo</label><input type="text" value=""><textarea name="" id="" cols="50" rows="5" placeholder="écrire ton commentaire" ></textarea> <br>  <input type="submit" id="" class="btn btn-primary my-3" onClick="addComment(this)" value="valider">  </form>'         
    });
   
    function addComment(x){

        let tonComment=x.previousElementSibling.previousElementSibling.value;
        let speudo=x.previousElementSibling.previousElementSibling.previousElementSibling.value;
        
        let divComment=document.createElement('div');
         divComment.innerHTML=  '<hr> <h5>'+ speudo+'<h5/> <br> <p>'+tonComment+'</p>';
        document.getElementById('yourComment').appendChild(divComment);
      
      }