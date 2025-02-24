const menuGambar =
document.getElementById('menu-gambar');
const tampilan =
document.getElementById('menu');

menuGambar.addEventListener('click',
    function() {
        tampilan.style.display = 'block';
    });

const closeGambar =
document.getElementById('close');
const tampilan2 =
document.getElementById('menu');
    
closeGambar.addEventListener('click',
    function() {
        tampilan.style.display = 'none';
    });