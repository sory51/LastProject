var elt = document.querySelector('input');
elt.size = 5;
elt.maxLength = 3;
elt.style.border ='2px dashed black';
elt.addEventListener('focus', function () {
    elt.style.backgroundColor = '#F9E3F2';
});
elt.addEventListener('blur', function () {
    elt.style.backgroundColor = '#F9E3F2';
});

///////////////////////////////////////////////
function addPanier(x){

  let SrcIm=x.parentElement.parentElement.previousElementSibling.src;
  let price=x.parentElement.children[0].outerText;
  let titre= x.parentElement.parentElement.children[0].outerText;
  // console.log(x.parentElement.parentNode);
  let choix1=document.createElement('tr');
  choix1.innerHTML=  '<tr id="comand_1"><td><img src="'+SrcIm+'" size="16x16" alt="" class=" toAdd"> '+titre+' </td><td>'+price+' cfa</td> <td><input id="qte_1" type="number" width="10px" value="1" onClick="nbreStockBy(this)"/></td><td><input id="to_1" type="number" width="10px" value="'+price+'" class="sommePartielle" readonly/>cfa</td><td><a href="#" class="btn btn-danger" id="retire1" onClick="suppresionPanier(this)">Retirer</a></td></tr>';
  document.getElementById('contenu_panier').appendChild(choix1);

}

///////////////////

function somtotal(){
    let resul=document.getElementById("total");
    resul.style.fontSize=25;
    resul.style.fontWeight=15;
  let somPanier=0;
  
  let comands=document.querySelectorAll('tr>td .sommePartielle');
  let nbreC=comands.length-1;
  for(let i=0;i<=nbreC;i++){
      somPanier+=parseInt(comands[i].value);
  
  }
  resul.textContent=somPanier;
}
document.addEventListener('scroll',function(){

});

///////////////////////////////////
function suppresionPanier(x) {
    x.parentElement.parentElement.remove();   
}

////////////////////////

 function nbreStockBy(x)
    {
        let qte=x.value;
        let price=x.parentElement.previousElementSibling.outerText;
        let interM=price.split(" ");
         let priceInte=parseInt(interM[0]);
         let comand_1=parseInt(qte);
         let produit=comand_1*priceInte;
         if(x.value<=0){
             produit=priceInte;
             comand_1=1;
             x.value=1;
             document.getElementById("to_1").value=produit;
         }else{
             document.getElementById("to_1").value=produit;
         }
        
   
    }
    ////////////////////////////////////

    function switchHeart(el){
        var icon = el.querySelector('.fa');//Get the i element from his parent
        var opened = 'fa-heart-o';
        var closed = 'fa-heart';
    
        icon.classList.toggle(opened);
        icon.classList.toggle(closed);
    }
    ///////////



