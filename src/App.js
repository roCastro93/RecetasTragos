//Componentes
import Header from "./component/Header";
import Formulario from "./component/Formulario";

//context
import CategoriasContext from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
function App() {
  return (
    <CategoriasContext>
      <RecetasProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">

          <Formulario/>
        </div>
      </div>
      </RecetasProvider>
    </CategoriasContext>
  );
}

export default App;
