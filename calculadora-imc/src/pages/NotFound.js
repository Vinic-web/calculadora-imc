import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ 
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '8rem', marginBottom: '1rem' }}>
        😢
      </div>
      <h1 style={{ 
        fontSize: 'clamp(4rem, 10vw, 8rem)', 
        color: '#C52233',
        margin: 0,
        fontWeight: 'bold'
      }}>
        404
      </h1>
      <h2 style={{ 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
        color: '#74121D',
        marginBottom: '1rem'
      }}>
        Página não encontrada
      </h2>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '2rem',
        maxWidth: '500px'
      }}>
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link 
        to="/"
        style={{
          padding: '1rem 2.5rem',
          backgroundColor: '#C52233',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '50px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(197, 34, 51, 0.3)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#A51C30';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#C52233';
          e.target.style.transform = 'scale(1)';
        }}
      >
        🏠 Voltar para Home
      </Link>
    </div>
  );
}

export default NotFound;