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
  <div class="hadist">
    <div class="wrapper-hadist">
         <div class="search-hadist"><input type="text" placeholder=" Cari Hadist"><a href="#" class="fa fa-search"></a></div>
        <div class="card-hadist">
          <div class="nama-hadist"><h4>Bukhori Muslim</h4></div>
          <div class="isi-hadist">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        <div class="card-hadist">
          <div class="nama-hadist"><h4>Bukhori Muslim</h4></div>
          <div class="isi-hadist">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
        <div class="card-hadist">
          <div class="nama-hadist"><h4>Bukhori Muslim</h4></div>
          <div class="isi-hadist">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
    </div>
  </div>
    `;
  },
  async afterRender() {
    const daftarKota = await DatabaseSource.daftarKota();
    const daftarKotaContainer = document.querySelector('#daftarKota');
    daftarKota.forEach((kota) => {
      daftarKotaContainer.innerHTML += createListKota(kota.lokasi);
    });

    const hasilSearch = document.querySelector('.search-sholat a');
    const boxSholat = document.querySelector('.sholat-content');

    const dummy = await DatabaseSource.jadwalSholat(1609);
    console.log(dummy);
    // dummy.forEach((sholat) => {
    //   boxSholat.innerHTML += createListJadwalSholat(sholat.data.jadwal);
    // });

    boxSholat.innerHTML = createListJadwalSholat(dummy);
    
    hasilSearch.addEventListener("click",async () => {
      const valueSearch = await document.querySelector('#hasilSearch').value;
      const idValueSearch = await DatabaseSource.cariBerdasarkanKota(valueSearch);
      const DataBoxSholat = await DatabaseSource.jadwalSholat(JSON.stringify(idValueSearch.id));
      // DataBoxSholat.forEach((sholat) => {
      //   boxSholat.innerHTML += createListJadwalSholat()
      // });
      console.log(idValueSearch);
    });
  },
};

export default Home;