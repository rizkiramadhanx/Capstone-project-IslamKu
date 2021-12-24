import Home from "../views/pages/Home";
import Lainya from "../views/pages/lainnya";
import Alquran from '../views/pages/Alquran';
import Hadist from "../views/pages/Hadist";

const routes = {
  '/': Home,
  '/hadist': Hadist,
  '/alquran': Alquran,
  '/lainya': Lainya
};

export default routes;