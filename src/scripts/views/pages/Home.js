const Home = {
  async render() {
    return `
    <div class="hero">
    <div class="wrapper-hero">
    <div class="hero-left"><img src="./assets/image/samples-svgrepo-com.svg" height="200px" alt=""></div>
      <div class="hero-right">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam laboriosam quisquam iure est voluptate!</p>
      </div>
    </div>
  </div>
    `;
  },
  async afterRender() {
    
  },
};

export default Home;