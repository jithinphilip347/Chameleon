import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";

function App() {
  const showNav = window.location.pathname !== "/"; 

  return (
    <>
      {showNav && <Nav />}
      <Home />
      <Footer />
    </>
  );
}

export default App;
