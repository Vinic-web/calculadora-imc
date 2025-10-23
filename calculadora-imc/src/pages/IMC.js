import { useState } from 'react';

function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [genero, setGenero] = useState('masculino');
  const [resultado, setResultado] = useState(null);

  // Formata automaticamente com vírgula
  const formatarPeso = (valor) => {
    // Remove tudo que não é número
    let numeros = valor.replace(/\D/g, '');
    
    if (numeros.length === 0) return '';
    
    // Adiciona vírgula automaticamente
    if (numeros.length <= 2) {
      return numeros;
    } else {
      return numeros.slice(0, -1) + ',' + numeros.slice(-1);
    }
  };

  const formatarAltura = (valor) => {
    // Remove tudo que não é número
    let numeros = valor.replace(/\D/g, '');
    
    if (numeros.length === 0) return '';
    
    // Se digitar 3 números (ex: 175), formata como 1,75
    if (numeros.length === 1) {
      return numeros;
    } else if (numeros.length === 2) {
      return numeros;
    } else {
      return numeros.slice(0, 1) + ',' + numeros.slice(1);
    }
  };

  const handlePesoChange = (e) => {
    const valor = e.target.value;
    setPeso(formatarPeso(valor));
  };

  const handleAlturaChange = (e) => {
    const valor = e.target.value;
    setAltura(formatarAltura(valor));
  };

  const calcularIMC = (e) => {
    e.preventDefault();
    
    let pesoNum = parseFloat(peso.replace(',', '.'));
    let alturaNum = parseFloat(altura.replace(',', '.'));
    
    // Se altura for maior que 3, converte de cm para m
    if (alturaNum > 3) {
      alturaNum = alturaNum / 100;
    }
    
    if (pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      
      let classificacao = '';
      let cor = '';
      let descricao = '';
      let faixa = '';
      
      // Classificações diferentes por gênero
      if (genero === 'masculino') {
        if (imc < 20) {
          classificacao = 'Abaixo do peso';
          cor = '#fd7e14';
          descricao = 'Seu IMC está abaixo do recomendado para homens. Consulte um nutricionista.';
          faixa = 'IMC < 20';
        } else if (imc < 25) {
          classificacao = 'Peso normal';
          cor = '#28a745';
          descricao = 'Parabéns! Seu peso está dentro da faixa saudável para homens.';
          faixa = 'IMC 20 - 24,9';
        } else if (imc < 30) {
          classificacao = 'Sobrepeso';
          cor = '#ffc107';
          descricao = 'Você está acima do peso ideal. Considere ajustes na dieta e exercícios.';
          faixa = 'IMC 25 - 29,9';
        } else if (imc < 35) {
          classificacao = 'Obesidade Grau I';
          cor = '#fd7e14';
          descricao = 'Obesidade leve. Recomenda-se acompanhamento médico e nutricional.';
          faixa = 'IMC 30 - 34,9';
        } else if (imc < 40) {
          classificacao = 'Obesidade Grau II';
          cor = '#dc3545';
          descricao = 'Obesidade moderada. Procure orientação médica para tratamento adequado.';
          faixa = 'IMC 35 - 39,9';
        } else {
          classificacao = 'Obesidade Grau III';
          cor = '#721c24';
          descricao = 'Obesidade severa. É fundamental buscar acompanhamento médico especializado.';
          faixa = 'IMC ≥ 40';
        }
      } else {
        // Feminino
        if (imc < 19) {
          classificacao = 'Abaixo do peso';
          cor = '#fd7e14';
          descricao = 'Seu IMC está abaixo do recomendado para mulheres. Consulte um nutricionista.';
          faixa = 'IMC < 19';
        } else if (imc < 24) {
          classificacao = 'Peso normal';
          cor = '#28a745';
          descricao = 'Parabéns! Seu peso está dentro da faixa saudável para mulheres.';
          faixa = 'IMC 19 - 23,9';
        } else if (imc < 29) {
          classificacao = 'Sobrepeso';
          cor = '#ffc107';
          descricao = 'Você está acima do peso ideal. Considere ajustes na dieta e exercícios.';
          faixa = 'IMC 24 - 28,9';
        } else if (imc < 34) {
          classificacao = 'Obesidade Grau I';
          cor = '#fd7e14';
          descricao = 'Obesidade leve. Recomenda-se acompanhamento médico e nutricional.';
          faixa = 'IMC 29 - 33,9';
        } else if (imc < 39) {
          classificacao = 'Obesidade Grau II';
          cor = '#dc3545';
          descricao = 'Obesidade moderada. Procure orientação médica para tratamento adequado.';
          faixa = 'IMC 34 - 38,9';
        } else {
          classificacao = 'Obesidade Grau III';
          cor = '#721c24';
          descricao = 'Obesidade severa. É fundamental buscar acompanhamento médico especializado.';
          faixa = 'IMC ≥ 39';
        }
      }
      
      setResultado({
        valor: imc.toFixed(1),
        classificacao,
        cor,
        descricao,
        faixa
      });
    }
  };

  const resetar = () => {
    setPeso('');
    setAltura('');
    setResultado(null);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      padding: '3rem 1rem'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Coluna Esquerda - Ilustração */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <img 
            src="https://illustrations.popsy.co/amber/medical-research.svg"
            alt="Saúde"
            style={{
              width: '100%',
              maxWidth: '350px',
              marginBottom: '1.5rem'
            }}
          />
          <h2 style={{
            color: '#74121D',
            fontSize: '1.8rem',
            marginBottom: '1rem'
          }}>
            Avaliação Corporal
          </h2>
          <p style={{
            color: '#666',
            fontSize: '1.05rem',
            lineHeight: '1.7'
          }}>
            O Índice de Massa Corporal (IMC) é uma medida internacional usada 
            para calcular se uma pessoa está no peso ideal. Os valores de referência 
            variam entre homens e mulheres.
          </p>
        </div>

        {/* Coluna Direita - Calculadora */}
        <div style={{
          backgroundColor: 'white',
          padding: '2.5rem',
          borderRadius: '15px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ 
              color: '#2c3e50',
              marginBottom: '0.5rem',
              fontSize: '2rem'
            }}>
              Calculadora de IMC
            </h1>
            <p style={{ color: '#7f8c8d', fontSize: '1rem' }}>
              Preencha os dados abaixo para calcular seu índice
            </p>
          </div>

          <form onSubmit={calcularIMC}>
            {/* Seleção de Gênero */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '1rem',
                color: '#2c3e50',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Gênero
              </label>
              <div style={{ 
                display: 'flex', 
                gap: '1rem'
              }}>
                <button
                  type="button"
                  onClick={() => setGenero('masculino')}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: genero === 'masculino' ? 'white' : '#2c3e50',
                    backgroundColor: genero === 'masculino' ? '#3498db' : '#ecf0f1',
                    border: genero === 'masculino' ? '2px solid #3498db' : '2px solid #ecf0f1',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Masculino
                </button>
                <button
                  type="button"
                  onClick={() => setGenero('feminino')}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: genero === 'feminino' ? 'white' : '#2c3e50',
                    backgroundColor: genero === 'feminino' ? '#e91e63' : '#ecf0f1',
                    border: genero === 'feminino' ? '2px solid #e91e63' : '2px solid #ecf0f1',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Feminino
                </button>
              </div>
            </div>

            {/* Input Peso */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Peso (kg)
              </label>
              <input
                type="text"
                value={peso}
                onChange={handlePesoChange}
                placeholder="Digite seu peso"
                maxLength="5"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C52233'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                required
              />
              <small style={{ color: '#7f8c8d', fontSize: '0.85rem' }}>
                A vírgula é inserida automaticamente
              </small>
            </div>

            {/* Input Altura */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                color: '#2c3e50',
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Altura (m)
              </label>
              <input
                type="text"
                value={altura}
                onChange={handleAlturaChange}
                placeholder="Digite sua altura"
                maxLength="4"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#C52233'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                required
              />
              <small style={{ color: '#7f8c8d', fontSize: '0.85rem' }}>
                A vírgula é inserida automaticamente
              </small>
            </div>

            {/* Botões */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'white',
                  backgroundColor: '#C52233',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#A51C30';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#C52233';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Calcular
              </button>
              
              {resultado && (
                <button
                  type="button"
                  onClick={resetar}
                  style={{
                    padding: '1rem 1.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#666',
                    backgroundColor: '#ecf0f1',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#d5dbdb'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#ecf0f1'}
                >
                  Limpar
                </button>
              )}
            </div>
          </form>

          {/* Resultado */}
          {resultado && (
            <div style={{
              marginTop: '2rem',
              padding: '2rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '10px',
              borderLeft: `5px solid ${resultado.cor}`
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div>
                  <p style={{ 
                    color: '#7f8c8d',
                    fontSize: '0.9rem',
                    margin: 0,
                    marginBottom: '0.3rem'
                  }}>
                    Seu IMC
                  </p>
                  <h2 style={{ 
                    color: resultado.cor,
                    fontSize: '3rem',
                    margin: 0,
                    fontWeight: 'bold'
                  }}>
                    {resultado.valor}
                  </h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{
                    color: resultado.cor,
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    margin: 0,
                    marginBottom: '0.3rem'
                  }}>
                    {resultado.classificacao}
                  </p>
                  <p style={{
                    color: '#7f8c8d',
                    fontSize: '0.9rem',
                    margin: 0
                  }}>
                    {resultado.faixa}
                  </p>
                </div>
              </div>
              <p style={{ 
                color: '#2c3e50',
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                {resultado.descricao}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tabela de Referência */}
      <div style={{
        maxWidth: '1200px',
        margin: '3rem auto 0',
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '15px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{ 
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '1.8rem'
        }}>
          Tabela de Classificação do IMC
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {/* Tabela Masculino */}
          <div>
            <h4 style={{
              color: '#3498db',
              fontSize: '1.3rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Masculino
            </h4>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {[
                { faixa: 'Abaixo de 20', classe: 'Abaixo do peso', cor: '#fd7e14' },
                { faixa: '20 a 24,9', classe: 'Peso normal', cor: '#28a745' },
                { faixa: '25 a 29,9', classe: 'Sobrepeso', cor: '#ffc107' },
                { faixa: '30 a 34,9', classe: 'Obesidade Grau I', cor: '#fd7e14' },
                { faixa: '35 a 39,9', classe: 'Obesidade Grau II', cor: '#dc3545' },
                { faixa: 'Acima de 40', classe: 'Obesidade Grau III', cor: '#721c24' }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.8rem 1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '6px',
                  borderLeft: `4px solid ${item.cor}`
                }}>
                  <span style={{ fontWeight: '600', color: '#2c3e50', fontSize: '0.95rem' }}>
                    {item.faixa}
                  </span>
                  <span style={{ color: item.cor, fontWeight: '600', fontSize: '0.95rem' }}>
                    {item.classe}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabela Feminino */}
          <div>
            <h4 style={{
              color: '#e91e63',
              fontSize: '1.3rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Feminino
            </h4>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {[
                { faixa: 'Abaixo de 19', classe: 'Abaixo do peso', cor: '#fd7e14' },
                { faixa: '19 a 23,9', classe: 'Peso normal', cor: '#28a745' },
                { faixa: '24 a 28,9', classe: 'Sobrepeso', cor: '#ffc107' },
                { faixa: '29 a 33,9', classe: 'Obesidade Grau I', cor: '#fd7e14' },
                { faixa: '34 a 38,9', classe: 'Obesidade Grau II', cor: '#dc3545' },
                { faixa: 'Acima de 39', classe: 'Obesidade Grau III', cor: '#721c24' }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.8rem 1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '6px',
                  borderLeft: `4px solid ${item.cor}`
                }}>
                  <span style={{ fontWeight: '600', color: '#2c3e50', fontSize: '0.95rem' }}>
                    {item.faixa}
                  </span>
                  <span style={{ color: item.cor, fontWeight: '600', fontSize: '0.95rem' }}>
                    {item.classe}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IMC;