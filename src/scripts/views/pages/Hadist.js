import { async } from "regenerator-runtime";
import DatabaseSource from "../../data/db-source";
import { createListDaftarHadist,createListHadist } from "../templates/template-creator";

const Hadist = {
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
  <div class="hadist">
    <div class="wrapper-hadist">
      <div class="search-hadist"><input id="searchHadist" list="hadist" type="text" placeholder=" Cari hadist..."><a href="#/hadist" class="fa fa-search"></a></div>
      <datalist id="hadist">
      <div id="card-hadist"></div>
      </datalist>
      <div class="wrapper-hadist-detail"></div>
    </div>
  </div>
    `;
},

async afterRender() {
  const dataHadist = await DatabaseSource.Hadist();
  const hadistContainer = document.querySelector('.wrapper-hadist-detail');
  const dataHadistDefault = dataHadist.data[0];

  console.log(dataHadistDefault);

  hadistContainer.innerHTML = createListDaftarHadist(dataHadistDefault);

  const daftarHadist = await DatabaseSource.Hadist();
  const daftarHadistCOntainer = document.querySelector('#card-hadist');
  const daftarHadistLIst = daftarHadist.data;

  daftarHadistLIst.forEach((hadist) => {
    daftarHadistCOntainer.innerHTML += createListHadist(hadist.name)
  });

  const buttonSearchHadist = document.querySelector('#searchHadist');

  buttonSearchHadist.addEventListener('click', async (e) => {
    e.preventDefault();
    const valueSearchHadist = document.querySelector('#searchHadist');
    const dataSearchHadist = await DatabaseSource.Hadist();
    const dataValueHadist = await dataSearchHadist.data.filter(e => e.name == valueSearchHadist);
    const dataHadistAkhir = await dataValueHadist[0];

    hadistContainer.innerHTML = createListDaftarHadist(dataHadistAkhir);
  })
},
}

export default Hadist;