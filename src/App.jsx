import "./App.css";
import NavBar from "./Components/Layout/NavBar/NavBar";
import ItemListContainer from "./Components/Pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a tu tienda de Jockey's Favorita!" />
    </>
  );
}

export default App;
