import Footer from "./components/Footer";
import Maps from "./components/Maps";
import Posts from "./components/Posts";
import Slider from "./components/Slider";
import Slogan from "./components/Slogan";
import TopMenu from "./components/TopMenu";

function App() {
  return (
    <>
    <TopMenu item="App" />
    <Slider />
    <Slogan />
    <Posts />
    <Maps />
    <Footer />
    </>
  );
}

export default App;
