import "./App.css";
import { Layout } from "./Components/Layout/Layout";
import ItemListContainer from "./Components/Pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Layout>
        <ItemListContainer greeting="¡Bienvenidos a tu tienda de Jockey's Favorita!" />
      </Layout>
    </>
  );
}

export default App;
