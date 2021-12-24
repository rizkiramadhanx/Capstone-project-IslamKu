import { async } from "regenerator-runtime";
import DatabaseSource from "../../data/db-source";
import { createDoa, createKotaSholat, createListDoa, createListJadwalSholat, createListKota } from "../templates/template-creator";
const cors = require('cors');

const Home = {
  async render() {
    return `
  <div class="hero">
    <div class="wrapper-hero">
    <div class="hero-left"><img src="./image/praying.png" height="200px" alt=""></div>
      <div class="hero-right">
        <h2>Mari belajar islam bersama <span>Islamku</span></h2>
        <p>Aplikasi <b>Islamku</b> adalah aplikasi utilitas yang bisa digunakan muslim untuk membantu seorang muslim dapat beribadah dengan baik, dengan aplikasi user dapat melihat informasi seperti jadwal sholat, doa harian dan hadist.</p>
      </div>
    </div>
  </div>
  <div class="sholat">
    <div class="wrapper-sholat">
       <div class="kota-sholat"></div>
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
         <div class="search-doa"><input id='hasilSearchDoa' type="text" list="doaList" placeholder=" Cari Doa"><a href="#" class="fa fa-search"></a>
          <datalist id="doaList">
          <div id="daftarDoa"></div>
         </datalist>
         </div>
         <div class="wrapper-doa-detail"></div>
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
    const kotaSholatContainer = document.querySelector('.kota-sholat');

    boxSholat.innerHTML = createListJadwalSholat(dataSholatDefault);
    kotaSholatContainer.innerHTML = createKotaSholat(dataSholatDefault);
    
    hasilSearch.addEventListener("click", async (e) => {
      e.preventDefault();
      const valueSearch = document.querySelector('#hasilSearch').value;
      const idValueSearch = await DatabaseSource.cariBerdasarkanKota(valueSearch);
      const idKota = idValueSearch.data[0].id;
      const DataBoxSholatHasilPencarian = await DatabaseSource.jadwalSholat(idKota); 
      boxSholat.innerHTML = createListJadwalSholat(DataBoxSholatHasilPencarian);
      kotaSholatContainer.innerHTML = createKotaSholat(DataBoxSholatHasilPencarian);
    });
    
    // default doa
    const dataDoa = await DatabaseSource.semuaDoa();
    const doaContainer = document.querySelector('.wrapper-doa-detail');
    const dataDoaDefault = dataDoa.data[0];
    
    doaContainer.innerHTML = createDoa(dataDoaDefault);

    // list doa 
    const daftarDoa = await DatabaseSource.semuaDoa();
    const daftarDoaContainer = document.querySelector('#daftarDoa');
    const daftarDoaList = daftarDoa.data;
    daftarDoaList.forEach((doa) => {
      daftarDoaContainer.innerHTML += createListDoa(doa.title);
    });

    const buttonSearchDoa = document.querySelector('.search-doa a');

    buttonSearchDoa.addEventListener("click", async (e) => {
      e.preventDefault();
      const valueSearchDoa = document.querySelector('#hasilSearchDoa').value;
      const dataDoaDefault1 = await DatabaseSource.doaBerdasarkanSearch();
      const dataValueDoa = await dataDoaDefault1.data.filter(e => e.title == valueSearchDoa);
      const dataDoaAkhir =  await dataValueDoa[0];

      doaContainer.innerHTML = createDoa(dataDoaAkhir);
    });
  },
};

export default Home;