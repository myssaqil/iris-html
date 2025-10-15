function loadPage() {
        console.log('hash', window.location);
        // Mengambil nilai hash dari URL Dan menghapus karakter '#' di depannya
        // Jika tidak ada hash, default ke 'landing'
      const hash = window.location.hash.replace('#', '') || 'landing';
      console.log('hash', hash);
      const file = `src/view/${hash}/index.html`;

      $("#app").load(file, function(response, status) {
        //Ketika Error Akan Ditampilkan Pesan 404
        if (status === "error") {
          $("#app").html("<h2>404 - Halaman tidak ditemukan</h2>");
        }
      });
    }
//Trigger ketika ada perubahan hash di URL
$(window).on('hashchange', loadPage);

//Trigger ketika halaman pertama kali dimuat
$(document).ready(loadPage);