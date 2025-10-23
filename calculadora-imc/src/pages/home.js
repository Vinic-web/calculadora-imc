function Home() {
  return (
    <div style={{ 
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #580C1F 0%, #74121D 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          VitalCare
        </h1>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
          Sua saúde em boas mãos. Cuidamos do seu bem-estar com 
          tecnologia e precisão.
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '2rem', opacity: 0.9 }}>
          Calcule seu IMC e descubra sua classificação de saúde corporal.
        </p>
      </div>
    </div>
  );
}

export default Home;