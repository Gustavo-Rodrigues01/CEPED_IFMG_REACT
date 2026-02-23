import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/exemplo1/Home';
import Sobre from './components/exemplo1/Sobre';
import Contato from './components/exemplo1/Contato';
import CarProducts from './components/exemplo2/CarProducts';
import BikeProducts from './components/exemplo2/BikeProducts';
import Products from './components/exemplo2/Products';
import Info from './components/exemplo4/Info';
import Alunos from './components/exemplo5/Alunos';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#AAA',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function App() {
  
  return (
    <>
      <h1>Exemplo 1 e 2</h1>
      <BrowserRouter>
        <nav>
          |{" "}
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="/products" element={<Products />}>
            <Route path="car" element={<CarProducts />} />
            <Route path="bike" element={<BikeProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <h1>Exemplo 3</h1>
      <BrowserRouter>
      {/* Navigation with NavLink for active styling */}
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/contact" element={<Contato />} />
      </Routes>
    </BrowserRouter>

    <h1>Exemplo4</h1>
    <BrowserRouter>
      <nav>
        |{" "}
        <NavLink style={navLinkStyles} to="/customer/Emil">Emil</NavLink> |{" "}
        <NavLink style={navLinkStyles} to="/customer/Tobias">Tobias</NavLink> |{" "}
        <NavLink style={navLinkStyles} to="/customer/Linus">Linus</NavLink> |
      </nav>

      <Routes>
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <h1>Exemplo5</h1>
      <nav>
        |{" "}
        <NavLink style={navLinkStyles} to="/alunos/1">Emil</NavLink> |{" "}
        <NavLink style={navLinkStyles} to="/alunos/2">Tobias</NavLink> |{" "}
        <NavLink style={navLinkStyles} to="/alunos/3">Linus</NavLink> |
      </nav>

      <Routes>
        <Route path="/Alunos/:id" element={<Alunos />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App
