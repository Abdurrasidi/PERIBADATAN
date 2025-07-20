$(document).ready(function() {
  // Fungsi untuk render semua data awal
  function renderAllData(menu) {
    $('#container-poto-1').html('');
    $.each(menu, function (i, data) {
      // Hanya tampilkan jika deskripsiutama dan kategori ada valuenya
      if (data && data.deskripsiutama && data.kategori) {
        $('#container-poto-1').append('<article class="article"><div class="image-upload-1"><a href="'+ data.kategori.toLowerCase() +'.html"><img src="poto upload/'+ data.kategori +'/'+ data.potoutama +'" class="image-upload" /></a></div><a href="'+ data.kategori.toLowerCase() +'.html" class="deskripsi"><div class="deskripsi-poto"><p>'+ data.deskripsiutama +'</p></div></a></article>');
      }
    });
  }
  $.getJSON("data.json", function (data) {
    let menu = data.deskripsi;
    renderAllData(menu);
    // Event click pada gambar id refresh untuk reset tampilan
    $(document).on('click', '#refresh', function() {
      renderAllData(menu);
    });

  $('#search-input').on('keypress', function(e) {
    if (e.which === 13) { // Enter key
      var searchValue = $(this).val().toLowerCase().replace(/['"]/g, '');
      $.getJSON('data.json', function(data) {
        let menu = data.deskripsi;
        let filtered = menu.filter(function(item) {
          // Hanya cari jika deskripsiutama dan kategori ada valuenya
          if (!item || !item.deskripsiutama || !item.kategori) return false;
          let deskripsi = item.deskripsiutama.toLowerCase().replace(/['"]/g, '');
          let kategori = item.kategori.toLowerCase().replace(/['"]/g, '');
          return deskripsi.includes(searchValue) || kategori.includes(searchValue);
        });
        if (filtered.length > 0) {
          $('#container-poto-1').html('');
          $.each(filtered, function(i, data) {
            $('#container-poto-1').append('<article class="article"><div class="image-upload-1"><a href="'+ data.kategori.toLowerCase() +'.html"><img src="poto upload/'+ data.kategori +'/'+ data.potoutama +'" class="image-upload" /></a></div><a href="'+ data.kategori.toLowerCase() +'.html" class="deskripsi"><div class="deskripsi-poto"><p>'+ data.deskripsiutama +'</p></div></a></article>');
          });
        } else {
          $('#container-poto-1').html(`
            <div>
              <h1>Not Found</h1>
            </div>  
          `);
        }
      });
      $(this).val(''); // Kosongkan input setelah pencarian
    }
  });

    // Tambahkan kode ini setelah gambar dimuat
    $('#container-poto-1').on('contextmenu', 'img', function(e) {
      return false;
    });
  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error: " + textStatus + " - " + errorThrown);
  });
});