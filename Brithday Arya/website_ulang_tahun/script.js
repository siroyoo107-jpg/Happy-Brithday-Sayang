// =============================================
// DATA UTAMA
// =============================================

const birthdayData = {

    // NAMA
    name: "Arya Enggar Pambudi",

    // TANGGAL ULANG TAHUN
    // 15 Agustus 2026, pukul 00:00
    birthday: "2026-08-15T00:00:00",

    // NAMA PENGIRIM
    sender: "With Love♡"

};



// =============================================
// MENGATUR HALAMAN
// =============================================

const pages = document.querySelectorAll(".page");

let currentPage = 0;



// =============================================
// PINDAH KE HALAMAN BERIKUTNYA
// =============================================

function nextPage() {

    if (currentPage >= pages.length - 1) {
        return;
    }

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// =============================================
// MEMBUKA HADIAH
// =============================================

function openGift() {

    pages[currentPage].classList.remove("active");

    currentPage = 2;

    pages[currentPage].classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// =============================================
// COUNTDOWN
// =============================================

const targetDate =
    new Date(
        birthdayData.birthday
    ).getTime();



function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        targetDate - now;



    // Kalau waktunya sudah sampai

    if (distance <= 0) {

        document.getElementById("days").textContent =
            "00";

        document.getElementById("hours").textContent =
            "00";

        document.getElementById("minutes").textContent =
            "00";

        document.getElementById("seconds").textContent =
            "00";


        document.getElementById("targetLabel").textContent =
            "Today is the day.";


        return;

    }



    // Hitung hari

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );



    // Hitung jam

    const hours =
        Math.floor(
            (distance /
                (1000 * 60 * 60))
            % 24
        );



    // Hitung menit

    const minutes =
        Math.floor(
            (distance /
                (1000 * 60))
            % 60
        );



    // Hitung detik

    const seconds =
        Math.floor(
            (distance /
                1000)
            % 60
        );



    // Tampilkan countdown

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");



    // Tampilkan tanggal

    const date =
        new Date(
            birthdayData.birthday
        );


    document.getElementById("targetLabel").textContent =
        date.toLocaleString(
            "id-ID",
            {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            }
        );

}



// Jalankan countdown

updateCountdown();


// Update setiap 1 detik

setInterval(
    updateCountdown,
    1000
);



// =============================================
// BINTANG DI BACKGROUND
// =============================================

const starsContainer =
    document.getElementById("stars");



for (
    let i = 0;
    i < 120;
    i++
) {

    const star =
        document.createElement("span");


    star.classList.add("star");


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    star.style.animationDelay =
        Math.random() * 3 + "s";


    star.style.animationDuration =
        1.5 +
        Math.random() * 3 +
        "s";


    starsContainer.appendChild(
        star
    );

}



// =============================================
// VIDEO
// =============================================

const video =
    document.getElementById(
        "birthdayVideo"
    );


const videoPlaceholder =
    document.getElementById(
        "videoPlaceholder"
    );



if (video) {

    video.addEventListener(
        "error",
        function () {

            if (videoPlaceholder) {

                videoPlaceholder.style.display =
                    "flex";

            }

        }
    );

}



// =============================================
// TOMBOL KEYBOARD
// =============================================

document.addEventListener(
    "keydown",
    function (event) {

        // Panah kanan
        if (
            event.key === "ArrowRight"
        ) {

            nextPage();

        }


        // Panah kiri
        if (
            event.key === "ArrowLeft"
        ) {

            if (currentPage <= 0) {
                return;
            }


            pages[currentPage]
                .classList
                .remove("active");


            currentPage--;


            pages[currentPage]
                .classList
                .add("active");

        }

    }
);