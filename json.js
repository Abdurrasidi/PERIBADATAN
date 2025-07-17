$.getJSON("data.json", function (data) {
  let menu = data.deskripsi;
  $.each(menu, function (i, data) {
    $('#container-poto-1').append('<article class="article"><div class="image-upload-1"><a href="'+ data.kategori.toLowerCase() +'.html"><img src="poto upload/'+ data.kategori +'/'+ data.potoutama +'" class="image-upload" /></a></div><a href="'+ data.kategori.toLowerCase() +'.html" class="deskripsi"><div class="deskripsi-poto"><p>'+ data.deskripsiutama +'</p></div></a></article>');
  });
}).fail(function(jqXHR, textStatus, errorThrown) {
  console.error("Error: " + textStatus + " - " + errorThrown);
});