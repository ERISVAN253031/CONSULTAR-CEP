import React, { useState } from 'react';
import './index.css'; 

const cepRanges = [
  { zona: 'Centro', motorista: 'André', placa: 'ABC-1234', inicio: '01000-000', fim: '01099-999' },
  { zona: 'Centro', motorista: 'André', placa: 'ABC-1234', inicio: '01100-000', fim: '01199-999' },
  { zona: 'Centro', motorista: 'André', placa: 'ABC-1234', inicio: '01200-000', fim: '01299-999' },
  { zona: 'Centro', motorista: 'André', placa: 'ABC-1234', inicio: '01300-000', fim: '01399-999' },
  { zona: 'Centro', motorista: 'André', placa: 'ABC-1234', inicio: '01400-000', fim: '01499-999' },
  { zona: 'Centro', motorista: 'André', placa: 'ABC-1234', inicio: '01500-000', fim: '01599-999' },
  { zona: 'Zona Norte', motorista: 'Bruno', placa: 'DEF-5678', inicio: '02000-000', fim: '02099-999' },
  { zona: 'Zona Norte', motorista: 'Bruno', placa: 'DEF-5678', inicio: '02100-000', fim: '02199-999' },
  { zona: 'Zona Norte', motorista: 'Bruno', placa: 'DEF-5678', inicio: '02200-000', fim: '02299-999' },
  { zona: 'Zona Leste', motorista: 'Carlos', placa: 'GHI-9101', inicio: '03000-000', fim: '03099-999' },
  { zona: 'Zona Leste', motorista: 'Carlos', placa: 'GHI-9101', inicio: '03100-000', fim: '03199-999' },
  { zona: 'Zona Sul', motorista: 'Davi', placa: 'JKL-1213', inicio: '04000-000', fim: '04099-999' },
  { zona: 'Zona Sul', motorista: 'Davi', placa: 'JKL-1213', inicio: '04100-000', fim: '04199-999' },
  { zona: 'Zona Oeste', motorista: 'Eduardo', placa: 'MNO-1415', inicio: '05000-000', fim: '05099-999' },
];

const App = () => {
  const [cep, setCep] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedCep = cep.replace('-', '');
    
    let found = false;

    for (const range of cepRanges) {
      const inicio = range.inicio.replace('-', '');
      const fim = range.fim.replace('-', '');
      
      if (formattedCep >= inicio && formattedCep <= fim) {
        setMessage(
          <span>
            <strong>Motorista:</strong> {range.motorista}<br />
            <strong>Placa:</strong> {range.placa}<br />
            <strong>Zona:</strong> {range.zona}
          </span>
        );
        found = true;
        break;
      }
    }

    if (!found) {
      setMessage('CEP não cadastrado.');    }
  };

  return (
    <div className="app">
      <h1>
        <img src="/logo.jpg" alt="Logo" style={{ width: '80px', marginRight: '20px', verticalAlign: 'middle' }} />
        Verificar CEP
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP (ex: 01000-000)"
          required
        />
        <button type="submit">Verificar</button>
      </form>
      {message && (
        <div className="result">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default App;