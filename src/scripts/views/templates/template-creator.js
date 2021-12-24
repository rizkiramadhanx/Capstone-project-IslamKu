const createListKota = (kota) => `<option value="${kota}">`;

const createListJadwalSholat = (jadwal) => `<div class="card-sholat">
          <div class="nama-sholat">Subuh</div>
          <div class="logo-sholat"><img src="./image/subuh.png" alt=""></div>
          <div class="jam-sholat">${jadwal.data.jadwal.subuh}</div>
        </div>
         <div class="card-sholat">
            <div class="nama-sholat">Dhuhur</div>
          <div class="logo-sholat"><img src="./image/dhuhur.png" alt=""></div>
          <div class="jam-sholat">${jadwal.data.jadwal.dzuhur}</div>
        </div>
         <div class="card-sholat">
         <div class="nama-sholat">Ashar</div>
          <div class="logo-sholat"><img src="./image/ashar.png" alt=""></div>
          <div class="jam-sholat">${jadwal.data.jadwal.ashar}</div>
        </div>
         <div class="card-sholat">
         <div class="nama-sholat">Magrib</div>
          <div class="logo-sholat"><img src="./image/magrib.png" alt=""></div>
          <div class="jam-sholat">${jadwal.data.jadwal.maghrib}</div>
        </div>
         <div class="card-sholat">
         <div class="nama-sholat">Isya</div>
          <div class="logo-sholat"><img src="./image/isya.png" alt=""></div>
          <div class="jam-sholat">${jadwal.data.jadwal.isya}</div>
        </div>`;
const createDoa = (doa) => `<div class="doa-judul">${doa.title}</div>
      <div class="doa-arab">${doa.arabic}</div>
      <div class="doa-latin"><p>Latin :</p>"${doa.latin}"</div>
      <div class="doa-arti"><p>Artinya :</p> "${doa.translation}"</div>`;

const createListDoa = (doa) => `<option value="${doa}">`;

const createListAlquran = (surat) => `<option value="${surat}">`;

const createAlquran = (surat) => `<div class="doa-judul">${surat.name.long} (${surat.name.transliteration.id})</div>
                                  <div class="doa-latin"><ul>
                                  <li>Arti bahasa : ${surat.name.translation.id}</li>
                                  <li>Merupakan Surat : ${surat.revelation.id}</li>
                                  <li>Surat ke : ${surat.number} dengan sebanyak ${surat.sequence} ayat</li>
                                  </ul></div>
                                  <div class="doa-arti"><p>Informasi Surat</p> : ${surat.tafsir.id}</div>`;

const createKotaSholat = (jadwal) => `Jadwal Sholat Untuk ${jadwal.data.lokasi}`;

const createListHadist = (hadist) => `<option value="${hadist}">`

const createListDaftarHadist = (hadist) => `
        <div class="card-hadist">
          <div class="nama-hadist"><h4>"${hadist.name}"</h4></div>
          <div class="isi-hadist">"${hadist.id} ${hadist.available}"</div>
        </div>`

export { 
  createListKota,
  createListJadwalSholat,
  createDoa,
  createListDoa,
  createKotaSholat,
  createListAlquran,
  createAlquran,
  createListDaftarHadist,
  createListHadist };