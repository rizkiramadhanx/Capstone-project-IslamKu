import DatabaseSource from "../../data/db-source";

const Berita = {
  async render() {
    return `<h2>Berita</h2>`;
  },

  async afterRender() {
    const daftarKota = await DatabaseSource.daftarKota();
    console.log(daftarKota);
  },
}

export default Berita;