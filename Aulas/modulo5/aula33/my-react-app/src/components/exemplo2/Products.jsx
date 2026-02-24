import {NavLink, Outlet } from 'react-router-dom';
function Products() {

  const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#AAA',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

  return (
    <div>
      <h2>Products Page</h2>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink style={navLinkStyles} to="/products/car">Cars</NavLink> |{" "}
        <NavLink style={navLinkStyles} to="/products/bike">Bikes</NavLink>
      </nav> 
      <Outlet /> 
    </div>
  );
}
export default Products