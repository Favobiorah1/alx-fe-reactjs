import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#2c3e50',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 20px',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    fontWeight: '500'
  };

  const hoverStyle = {
    backgroundColor: '#34495e'
  };

  return (
    <nav style={navStyle}>
      <Link 
        to="/" 
        style={linkStyle}
        onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        style={linkStyle}
        onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
      >
        About
      </Link>
      <Link 
        to="/services" 
        style={linkStyle}
        onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
      >
        Services
      </Link>
      <Link 
        to="/contact" 
        style={linkStyle}
        onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;