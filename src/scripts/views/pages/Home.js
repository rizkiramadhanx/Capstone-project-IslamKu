import { async } from "regenerator-runtime";
import DatabaseSource from "../../data/db-source";
import { createListJadwalSholat, createListKota } from "../templates/template-creator";

const Home = {
  async render() {
    return `
  <div class="hero">
    <div class="wrapper-hero">
    <div class="hero-left"><img src="./image/praying.png" height="200px" alt=""></div>
      <div class="hero-right">
        <h2>Mari belajar islam bersama <span>Islamku</span></h2>
        <p>Aplikasi Informasi mengenai </p>
      </div>
    </div>
  </div>
  <div class="sholat">
    <div class="wrapper-sholat">
      <div class="search-sholat"><input id="hasilSearch" list="kota" type="text" placeholder=" Cari kota..."><a href="#" class="fa fa-search"></a>
      <datalist id="kota">
      <div id="daftarKota"></div>
      </datalist>
      </div>
      <div class="sholat-content">
      </div>
    </div>
  </div>
    <div class="doa">
    <div class="wrapper-doa">
         <div class="search-doa"><input type="text" placeholder=" Cari Hadist"><a href="#" class="fa fa-search"></a></div>
         <div class="wrapper-doa-detail">
      <div class="doa-judul">doa sholat Subuh</div>
      <div class="doa-arab">أُصَلِّى فَرْضَ الصُّبْح رَكَعتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَال</div>
      <div class="doa-latin"><p>Latin :</p>"Usholli Fardlon dhuhri Arba'a Rok'aataim Mustaqbilal Qiblati Adaa-an Lillahi ta'aala"</div>
      <div class="doa-arti"><p>Artinya :</p> "Aku niat melakukan sholat fardu dhuhur 4 rakaat, sambil menghadap qiblat, saat ini, karena Allah ta'ala"</div>
    </div>
    </div>
  </div>
    `;
  },
  async afterRender() {
       // list pencarian kota
    const daftarKota = await DatabaseSource.daftarKota();
    const daftarKotaContainer = document.querySelector('#daftarKota');
    daftarKota.forEach((kota) => {
      daftarKotaContainer.innerHTML += createListKota(kota.lokasi);
    });

    const hasilSearch = document.querySelector('.search-sholat a');
    const boxSholat = document.querySelector('.sholat-content');

    // data default sholat
    const dataSholatDefault = await DatabaseSource.jadwalSholat(1609);
    console.log(dataSholatDefault);
    boxSholat.innerHTML = createListJadwalSholat(dataSholatDefault);
    
    // data setelah search setelah click

    // error 1 : saya ingin mengisi data sholat sesuai dengan value input variabel ValueSearch
    // file yang berhubungan db-source.js,Home.js,api-endpoint.js
    // API : https://api.myquran.com/v1/sholat
    hasilSearch.addEventListener("click", async () => {
      const valueSearch = await document.querySelector('#hasilSearch').value;
      const idValueSearch = await DatabaseSource.cariBerdasarkanKota(valueSearch);
      const DataBoxSholatHasilPencarian = await DatabaseSource.jadwalSholat(JSON.stringify(idValueSearch.id)); 
      boxSholat.innerHTML = createListJadwalSholat(DataBoxSholatHasilPencarian);
      console.log(idValueSearch);
    });

    // error 2 masalah tentang cors dan origin
    // file yang berhubungan db-source.js,Home.js,api-endpoint.js
    // API : https://doa-doa-api-ahmadramadhan.fly.dev/api
    dataDoaDefault = await DatabaseSource.randomDoa();
    console.log(dataDoaDefault);
  },
};

export default Home;