import { async } from "regenerator-runtime";
import DatabaseSource from "../../data/db-source";
import { createDoaHasilSearch, createListJadwalSholat, createListKota } from "../templates/template-creator";

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
      <div class="search-sholat"><input id="hasilSearchSholat" list="kota" type="text" placeholder=" Cari kota..."><a href="#" class="fa fa-search"></a>
      <datalist id="kota">
      <div id="daftarKota"></div>
      </da
      </div>
      <div class="sholat-content">
      </div>
    </div>
  </div>
  <div class="doa">
    <div class="wrapper-doa">
         <div class="search-doa"><input type="text" placeholder=" Cari Hadist"><a href="#" class="fa fa-search"></a></div>
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

    // sholat (loading)
    const hasilSearch = document.querySelector('.search-sholat a');
    const boxSholat = document.querySelector('.sholat-content');

    const dataSholatDefault = await DatabaseSource.jadwalSholat(1609)
    boxSholat.innerHTML = createListJadwalSholat(dataSholatDefault);

    // Doa doa (loading)
    // const dataDoaDefault = await DatabaseSource.semuaListDoa();
    const doaContainer = document.querySelector('.wrapper-doa-detail');
    doaContainer.innerHTML += createDoaHasilSearch(); // error cors
    // console.log(dataDoaDefault);
    
    // hasilSearch.addEventListener("click",async () => {
    //   const valueSearch = await document.querySelector('#hasilSearchSholat').value;
    //   const idValueSearch = await DatabaseSource.cariBerdasarkanKota(valueSearch);
    //   const DataBoxSholat = await DatabaseSource.jadwalSholat(JSON.stringify(idValueSearch.id));
    // });

    const hasilSearchDoa = document.querySelector('.search-doa a');

    hasilSearchDoa.addEventListener("click", async () => {
      // const valueSearchDoa = await
    });
  },
};

export default Home;