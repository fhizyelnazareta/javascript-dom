const container = document.querySelector('.container');
const bigPicture = document.querySelector('.big_picture');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {
    // cek apa yang sedang di klik
    if (e.target.className == 'thumb') {

        // mengganti atribut src pada html
        bigPicture.src = e.target.src;

        // menambah kelas baru pada .big_picture untuk animasi
        bigPicture.classList.add('fade');

        // menambah time out setengah detik untuk hilangkan class fade
        setTimeout(function () {
            bigPicture.classList.remove('fade');
        }, 500);

        // menambahkan class active untuk menandai gambar yang sedang aktif
        thumbs.forEach(function (thumb) {
            // cek apakah thumb ada class active atau tidak, jika ada hapus class active
            if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }

            // cara kedua untuk menghapus class active yaitu paksa thumb hanya memiliki class thumb
            // thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});