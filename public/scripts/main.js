window.addEventListener('load',function(){
//var laVariale= "hola";
localStorage.setItem('laVariable','hola');
console.log(localStorage.getItem('laVariable'));
function cambioVariable(){
    localStorage.setItem('laVariable','adios');
    console.log(localStorage.getItem('laVariable'));
}
window.addEventListener('click',cambioVariable);
});
