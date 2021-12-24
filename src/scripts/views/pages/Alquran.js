import DatabaseSource from "../../data/db-source";
import { createAlquran, createListAlquran } from "../templates/template-creator";

const Alquran = {
  async render() {
    return `<div class="hero">
    <div class="wrapper-hero">
    <div class="hero-left"><img src="./image/praying.png" height="200px" alt=""></div>
      <div class="hero-right">
        <h2>Mari belajar islam bersama <span>Islamku</span></h2>
        <p>Aplikasi <b>Islamku</b> adalah aplikasi utilitas yang bisa digunakan muslim untuk membantu seorang muslim dapat beribadah dengan baik, dengan aplikasi user dapat melihat informasi seperti jadwal sholat, doa harian dan hadist.</p>
      </div>
    </div>
  </div>
   <div class="alquran">
    <div class="wrapper-alquran">
         <div class="search-alquran"><input id='hasilSearchAlquran' type="text" list="alquranList" placeholder=" Cari alquran"><a href="#/alquran" class="fa fa-search"></a>
          <datalist id="alquranList">
          <div id="daftarAlquran"></div>
         </datalist>
         </div>
         <div class="wrapper-alquran-detail"></div>
    </div>
  </div>`;
  },

  async afterRender() {
    //  default alquran
    const dataAlquran = await DatabaseSource.alquran();
    const alquranContainer = document.querySelector('.wrapper-alquran-detail');
    const dataAlquranDefault = dataAlquran.data[0];


    alquranContainer.innerHTML = createAlquran(dataAlquranDefault);

    // list alquran
    const daftarAlquran = await DatabaseSource.alquran();
    const DaftarAlquranContainer = document.querySelector('#daftarAlquran');
    const daftarAlquranList = daftarAlquran.data;

    daftarAlquranList.forEach((surat) => {
      DaftarAlquranContainer.innerHTML += createListAlquran(surat.name.transliteration.id)
    });

    const buttonSearchAlquran = document.querySelector('.search-alquran a');
    
    buttonSearchAlquran.addEventListener("click", async (e) => {
      e.preventDefault();
      const valueSearchAlquran = document.querySelector('#hasilSearchAlquran').value;
      const dataSearchAlquran = await DatabaseSource.alquran();
      const dataValueAlquran = await dataSearchAlquran.data.filter(e => e.name.translation.id == valueSearchAlquran);
      const dataAlquranAkhir = await dataValueAlquran[0];

      alquranContainer.innerHTML = createAlquran(dataAlquranAkhir);
    })
  },
}

export default Alquran;