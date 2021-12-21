import CONFIG from "./config";

  
const API_ENDPOINT = {
  DAFTAR_KOTA_SHOLAT: `${CONFIG.BASE_URL}/kota/semua`,
  CARI_BERDASARKAN_KOTA: (namakota) => `${CONFIG.BASE_URL}/kota/cari/${namakota}`,
  JADWAL_SHOLAT: (id, tahun, bulan, hari) => `${CONFIG.BASE_URL}/jadwal/${id}/${tahun}/${bulan}/${hari}`,
  DAFTAR_DOA: () => `${CONFIG.BASE_URL_DOA}/`,
  DOA_SPESIFIK: (namaDoa) => `${CONFIG.BASE_URL_DOA}/api/doa/${namaDoa}/`,
  DOA_RANDOM: () => `${CONFIG.BASE_URL_DOA}/doa/v1/random`
};

export default API_ENDPOINT;