document.addEventListener("DOMContentLoaded", () => {
  // Sample data for Measles cases in Indonesia
  const dataKasus = [
    { year: 2020, cases: 310 },
    { year: 2021, cases: 132 },
    { year: 2022, cases: 4845 },
  ];

  const dataContainer = document.getElementById("data-kasus");
  dataKasus.forEach((data) => {
    const dataItem = document.createElement("div");
    dataItem.innerHTML = `<strong>${data.year}</strong>: ${data.cases} kasus`;
    dataContainer.appendChild(dataItem);
  });
});
// Function to download the form as a PDF
function downloadForm() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Surat Pengantar ke Puskesmas", 20, 20);

  doc.setFontSize(12);
  doc.text("Nama:", 20, 40);
  doc.text("Jenis Kelamin:", 20, 50);
  doc.text("Usia:", 20, 60);
  doc.text("Alamat:", 20, 70);

  doc.setFontSize(14);
  doc.text("Gejala yang dialami:", 20, 90);
  doc.setFontSize(12);
  doc.text("- Demam", 20, 100);
  doc.text("- Batuk", 20, 110);
  doc.text("- Pilek", 20, 120);
  doc.text("- Nyeri tenggorokan", 20, 130);
  doc.text("- Mata merah dan berair", 20, 140);
  doc.text("- Mata sensitif terhadap cahaya", 20, 150);
  doc.text("- Bintik koplik (bintik putih) di dalam mulut", 20, 160);
  doc.text("- Ruam merah di tubuh", 20, 170);

  doc.setFontSize(14);
  doc.text("Rekomendasi:", 20, 190);
  doc.setFontSize(12);
  doc.text(
    "- Hindari kontak dengan individu lain terutama yang belum mendapatkan vaksin campak.",
    20,
    200
  );
  doc.text(
    "- Cukupkan istirahat dan minum untuk membantu tubuh dalam melawan infeksi.",
    20,
    210
  );
  doc.text(
    "- Hindari paparan langsung dengan cahaya yang terang untuk meringankan gejala.",
    20,
    220
  );
  doc.text(
    "- Segera periksakan diri ke dokter atau fasilitas pelayanan kesehatan terdekat untuk mendapatkan konfirmasi diagnosa dan mendapatkan perawatan yang tepat.",
    20,
    230
  );

  doc.save("Formulir_Pengantar_Puskesmas.pdf");
}

function checkForm() {
  const demam = document.querySelector(
    'input[name="gejala"][value="demam"]'
  ).checked;
  const batuk = document.querySelector(
    'input[name="gejala"][value="batuk"]'
  ).checked;
  const pilek = document.querySelector(
    'input[name="gejala"][value="pilek"]'
  ).checked;
  const nyeriTenggorokan = document.querySelector(
    'input[name="gejala"][value="nyeri-tenggorokan"]'
  ).checked;
  const mataMerah = document.querySelector(
    'input[name="gejala"][value="mata-merah"]'
  ).checked;
  const mataSensitif = document.querySelector(
    'input[name="gejala"][value="mata-sensitif"]'
  ).checked;
  const bintikKoplik = document.querySelector(
    'input[name="gejala"][value="bintik-koplik"]'
  ).checked;
  const ruamMerah = document.querySelector(
    'input[name="gejala"][value="ruam-merah"]'
  ).checked;

  const allSymptoms =
    demam &&
    batuk &&
    pilek &&
    nyeriTenggorokan &&
    mataMerah &&
    mataSensitif &&
    bintikKoplik &&
    ruamMerah;
  const kontakYa = document.querySelector(
    'input[name="kontak"][value="ya"]'
  ).checked;
  const kontakTidak = document.querySelector(
    'input[name="kontak"][value="tidak"]'
  ).checked;
  const vaksinYa = document.querySelector(
    'input[name="vaksin"][value="ya"]'
  ).checked;
  const vaksinTidak = document.querySelector(
    'input[name="vaksin"][value="tidak"]'
  ).checked;

  if (
    demam &&
    batuk &&
    pilek &&
    !nyeriTenggorokan &&
    !mataMerah &&
    !mataSensitif &&
    !bintikKoplik &&
    !ruamMerah &&
    kontakTidak &&
    vaksinYa
  ) {
    window.location.href = "sesi-berhasil.html";
  } else if (
    demam &&
    batuk &&
    pilek &&
    !nyeriTenggorokan &&
    mataMerah &&
    !mataSensitif &&
    !bintikKoplik &&
    ruamMerah &&
    kontakYa &&
    vaksinYa
  ) {
    window.location.href = "sesi-bahaya.html";
  } else if (allSymptoms && kontakYa && vaksinTidak) {
    window.location.href = "sesi-positif.html";
  } else {
    window.location.href = "sesi-berhasil.html";
  }
}
document.querySelectorAll(".show-more-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const moreContent = this.previousElementSibling;
    if (
      moreContent.style.display === "none" ||
      moreContent.style.display === ""
    ) {
      moreContent.style.display = "inline";
      this.textContent = "Show less <<";
    } else {
      moreContent.style.display = "none";
      this.textContent = "Show more >>";
    }
  });
});
