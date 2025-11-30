import { useState } from 'react';

export default function App() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xJoga, setXJoga] = useState(true);

  const calcularVencedor = (quadrados) => {
    const linhas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < linhas.length; i++) {
      const [a, b, c] = linhas[i];
      if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
        return quadrados[a];
      }
    }
    return null;
  };

  const clicarQuadrado = (i) => {
    if (calcularVencedor(tabuleiro) || tabuleiro[i]) return;
    
    const novoTabuleiro = tabuleiro.slice();
    novoTabuleiro[i] = xJoga ? 'X' : 'O';
    setTabuleiro(novoTabuleiro);
    setXJoga(!xJoga);
  };

  const reiniciar = () => {
    setTabuleiro(Array(9).fill(null));
    setXJoga(true);
  };

  const vencedor = calcularVencedor(tabuleiro);
  const empate = !vencedor && tabuleiro.every(q => q !== null);
  
  let status;
  if (vencedor) {
    status = `Vencedor: ${vencedor}`;
  } else if (empate) {
    status = 'Empate!';
  } else {
    status = `Próximo jogador: ${xJoga ? 'X' : 'O'}`;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Jogo da Velha</h1>
        
        <div className="text-2xl font-semibold text-center mb-4 text-gray-700">{status}</div>
        
        <div className="grid grid-cols-3 gap-2 mb-6">
          {tabuleiro.map((valor, i) => (
            <button
              key={i}
              onClick={() => clicarQuadrado(i)}
              className="w-24 h-24 bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 rounded-lg text-5xl font-bold text-gray-800 transition-colors"
            >
              {valor}
            </button>
          ))}
        </div>
        
        <button
          onClick={reiniciar}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Reiniciar Jogo
        </button>
      </div>
    </div>
  );
}