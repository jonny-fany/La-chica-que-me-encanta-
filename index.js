const yesbtn = document.querySelector('#yesbtn');

 yesbtn.addEventListener('click',function () {
    alert('y juntos hicimos de un dia cualquiera una fecha para marcar en el calendario!!!')
 } );

 const nobtn = document.querySelector('#nobtn');

 nobtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transforms',`traslate(-${ramdomX}%,-${ramdomY}%)`);
 })