const menuGambar =
document.getElementById('menu-gambar');
const tampilan =
document.getElementById('menu');

menuGambar.addEventListener('click',
    function() {
        tampilan.classList.add('show');
        tampilan.style.display = 'block';
    });

const closeGambar =
document.getElementById('close');
const tampilan2 =
document.getElementById('menu');
    
closeGambar.addEventListener('click',
    function() {
        tampilan.classList.remove('show');
        setTimeout(() => {
            tampilan.style.display = 'none';
        }, 1000); // Match the transition duration
    });

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu',
        function(event) {
            event.preventDefault();
        }
    )
})