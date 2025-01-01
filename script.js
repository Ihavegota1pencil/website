// Fotoğraf dosyalarının listesi
var photoList = [
    "kedi/1.jpg",
    "kedi/2.jpg",
    "kedi/3.jpg",
    "kedi/4.jpg",
    "kedi/5.jpg",
    "kedi/6.jpg",
    "kedi/7.jpg",
    "kedi/8.jpg",
    "kedi/9.jpg",
    "kedi/10.jpg",
    "kedi/12.jpg",
    "kedi/13.jpg",
    "kedi/14.jpg",
    "kedi/15.jpg",
    "kedi/16.jpg",
    "kedi/17.jpg",
    // Diğer fotoğraflar
];

// Rasgele bir fotoğraf gösteren fonksiyon
function showRandomPhoto() {
    // Rastgele bir fotoğrafın indeksini seç
    var randomIndex = Math.floor(Math.random() * photoList.length);
    // Seçilen fotoğrafın dosya yolunu al
    var randomPhoto = photoList[randomIndex];
    // Seçilen fotoğrafı görüntüle
    document.getElementById("displayed-image").src = randomPhoto;
}

// Düğmeye basıldığında rasgele fotoğrafı göster
document.getElementById("show-random-button").addEventListener("click", showRandomPhoto);
