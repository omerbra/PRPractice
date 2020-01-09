for(var i=1; i<4; i++){
  document.getElementById('option'+i).addEventListener('click',function(){
    alert(this.parentNode.firstChild.nextSibling.textContent);
  },false);
}
