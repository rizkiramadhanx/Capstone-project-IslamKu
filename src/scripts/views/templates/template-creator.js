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

export { createListKota,createListJadwalSholat };