import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={{ 
      backgroundColor: '#74121D', 
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 style={{ 
            color: 'white', 
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            ❤️ VitalCare
          </h2>
        </Link>
        
        <div style={{ 
          display: 'flex', 
          gap: '2rem',
          marginTop: '0.5rem'
        }}>
          <Link 
            to="/" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              backgroundColor: isActive('/') ? '#C52233' : 'transparent',
              transition: 'all 0.3s ease',
              fontWeight: isActive('/') ? 'bold' : 'normal'
            }}
          >
            🏠 Home
          </Link>
          
          <Link 
            to="/imc" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              backgroundColor: isActive('/imc') ? '#C52233' : 'transparent',
              transition: 'all 0.3s ease',
              fontWeight: isActive('/imc') ? 'bold' : 'normal'
            }}
          >
            📊 Calculadora IMC
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;