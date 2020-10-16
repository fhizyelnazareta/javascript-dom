const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

/* Dom Traversal */

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function () {
//         card[i].style.display = 'none';
//     });
// }

/* mengambil .card dengan parentElement */
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function () {
//         close[i].parentElement.style.display = 'none';
//     });
// }

/* mengambil .card dengan parentElement dan menambah variabel e/event untuk target Element */
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         console.log(e.target);
//         e.target.parentElement.style.display = 'none';
//     });
// }

/* mempersingkat kode dengan each */
close.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        // menghilangkan aksi default
        e.preventDefault();
    });
});
