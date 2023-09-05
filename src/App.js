import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import Banner from "./Components/Banner";
import Image1 from "./images/camp.jpg";
import Image2 from "./images/camp1.jpg";
import Image3 from "./images/camp3.jpg";
import Image4 from "./images/cup.jpg";
import Image5 from "./images/kiamo2.jpg";
import Image6 from "./images/sort2.jpg";
import GridItems from "./Components/GridItems";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
     
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        <div className="bg-dark p-5">
          <div className="container">
            <h1 className="text-warning">Top 5 Hiking Spots</h1>
              
                
                <div className="row g-5 justify-context-center">
                <GridItems name="Camp with Me" imageFile={Image1} desc="lorem epsum"></GridItems>
                <GridItems name="The BattleField" imageFile={Image2} desc="lorem epsum"></GridItems>
                <GridItems name="The Viper's Peak" imageFile={Image3} desc="lorem epsum"></GridItems>
                <GridItems name="Bong Bato Camp" imageFile={Image4} desc="lorem epsum"></GridItems>
                <GridItems name="Camp Sabangan" imageFile={Image5} desc="lorem epsum"></GridItems>
                <GridItems name="The Boulder's Camp" imageFile={Image6} desc="lorem epsum"></GridItems>
                </div>
              
            </div>
          </div>
          <Footer></Footer>
     
    </>
  );
}

export default App;
