import CONFIG from "./config";

   const today = new Date();
const API_ENDPOINT = {
  DAFTAR_KOTA_SHOLAT: `${CONFIG.BASE_URL}/kota/semua`,
  CARI_BERDASARKAN_KOTA: (namakota) => `${CONFIG.BASE_URL}/kota/${namakota}`,
  JADWAL_SHOLAT: (id,tahun,bulan,hari) => `${CONFIG.BASE_URL}/jadwal/${id}/${tahun}/${bulan}/${hari}`,
};

export default API_ENDPOINT;