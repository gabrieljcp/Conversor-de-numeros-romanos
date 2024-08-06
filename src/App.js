import React, { useState } from 'react';
import './App.css';

const romanoParaArabico = (romano) => {
  const numeralRomanoMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = 0;
  let i = 0;
  while (i < romano.length) {
    const twoChar = romano[i] + (romano[i + 1] || '');
    if (numeralRomanoMap[twoChar]) {
      result += numeralRomanoMap[twoChar];
      i += 2;
    } else {
      result += numeralRomanoMap[romano[i]];
      i += 1;
    }
  }
  return result;
};

const arabicoParaRomano = (num) => {
  const numeralRomanoMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';
  for (const { value, numeral } of numeralRomanoMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};

const App = () => {
  const [romano, setRomano] = useState('');
  const [arabico, setArabico] = useState('');

  const handleRomanoChange = (e) => {
    const romanoValue = e.target.value.toUpperCase();
    setRomano(romanoValue);
    setArabico(romanoParaArabico(romanoValue));
  };

  const handleArabicoChange = (e) => {
    const arabicoValue = e.target.value;
    setArabico(arabicoValue);
    setRomano(arabicoParaRomano(Number(arabicoValue)));
  };

  return (
    <div className="App">
      <h1>Conversor de números romanos</h1>
      <div className="converter">
        <div className="input-group">
          <label htmlFor="romano">Número romano:</label>
          <input
            type="text"
            id="romano"
            value={romano}
            onChange={handleRomanoChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="arabico">Número arábico:</label>
          <input
            type="number"
            id="arabico"
            value={arabico}
            onChange={handleArabicoChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
