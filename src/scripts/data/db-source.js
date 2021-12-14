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
}

export default DatabaseSource;