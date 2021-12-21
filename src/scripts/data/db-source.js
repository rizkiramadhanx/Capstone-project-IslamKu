import API_ENDPOINT from "../globals/api-endpoint";

class DatabaseSource {
  // ini untuk live search
  static async daftarKota() {
    const response = await fetch(API_ENDPOINT.DAFTAR_KOTA_SHOLAT);
    const responseJson = await response.json();
    return responseJson;
  }
  static async cariBerdasarkanKota(id) {
    // function ini akan mendapatkan id
    const response = await fetch(API_ENDPOINT.CARI_BERDASARKAN_KOTA(id));
    return response.json();
  }
  static async jadwalSholat(id) {
    // mendapatkan jadwal shalat
    const today = new Date();
    const response = await fetch(API_ENDPOINT.JADWAL_SHOLAT(id,today.getFullYear(),today.getMonth(),today.getDate()));
    return response.json();
  }
  static async semuaListDoa() {
    const response = await fetch(API_ENDPOINT.DAFTAR_DOA);
    return response.json();
  }
  static async randomDoa() {
    const response = await fetch(API_ENDPOINT.DOA_RANDOM,{mode: 'no-cors'});
    return response.json();
  }
  static async semuaDoa() {
    const response = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian');
    return response.json();
  }
  static async doaBerdasarkanSearch() {
    const response = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian');
    const ab = response.json();
    return ab;
  }
}

export default DatabaseSource;