import Download from "./components/Download/Download";
import Partners from "./components/Partners/Partners";
import Snippets from "./components/Snippets/Snippets";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Heaeder";

function App() {
  return (
    <div>
      <Header />
      <Snippets />
      <Partners/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
