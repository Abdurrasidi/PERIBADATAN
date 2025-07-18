$(document).ready(function() {
  $.getJSON("data.json", function (data) {
    let menu = data.deskripsi;
    $.each(menu, function (i, data) {
      if (data.kategori === "BINAYAH") {
        $('#container-deskripsi').append(`
          <div class="container-konten-img">
          <img src="poto upload/BINAYAH/${data.potoisian[0].poto1}" alt="" class="img-konten" oncontextmenu="return false;">
          <img src="poto upload/BINAYAH/${data.potoisian[0].poto2}" alt="" class="img-konten" oncontextmenu="return false;">
          </div>
          <p class="p2">${data.deskripsiisian[0].paragraf1}</p>
          <p class="p2">${data.deskripsiisian[0].paragraf2}</p>
          <div class="container-konten-img">
          <img src="poto upload/BINAYAH/${data.potoisian[0].poto3}" alt="" class="img-konten" oncontextmenu="return false;">
          <img src="poto upload/BINAYAH/${data.potoisian[0].poto4}" alt="" class="img-konten" oncontextmenu="return false;">
          </div>
          <p class="p2">${data.deskripsiisian[0].paragraf3}</p>
          <p class="p2">${data.deskripsiisian[0].paragraf4}</p>
          <p class="p2">${data.deskripsiisian[0].paragraf5}</p>
          <p class="p2">${data.deskripsiisian[0].paragraf6}</p>
          <p class="p2">${data.deskripsiisian[0].paragraf7}</p>
          <p class="p2">${data.deskripsiisian[0].paragraf8}</p>
          <p class="p2">${data.deskripsiisian[0].paragraf9}</p>
          <p class="p2">${data.deskripsiisian[0].paragraf10}</p>
        `);
      }
    });

    // Tambahkan kode ini setelah gambar dimuat
    $(document).on("contextmenu", "img", function(event) {
    event.preventDefault();
});

  }).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error: " + textStatus + " - " + errorThrown);
  });
});