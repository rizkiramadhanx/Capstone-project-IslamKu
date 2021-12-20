import DatabaseSource from "../../data/db-source";

const Hadist = {
  async render() {
    return `<div class="hero">
    <div class="wrapper-hero">
    <div class="hero-left"><img src="./image/praying.png" height="200px" alt=""></div>
      <div class="hero-right">
        <h2>Mari belajar islam bersama <span>Islamku</span></h2>
        <p>Aplikasi Informasi mengenai </p>
      </div>
    </div>
  </div>
  <div class="hadist">
    <div class="wrapper-hadist">
      <div class="search-hadist"><input class="pertama"list="hadist" type="text" placeholder=" Cari hadist..."><input class="kedua"></input><a href="#" class="fa fa-search"></a>
      <datalist id="hadist">
      <option value="kentir">
      </datalist>
    </div>
  </div>
    `;
  },

  async afterRender() {
  },
}

export default Hadist;