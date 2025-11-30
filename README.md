# Jogo da Velha

Um jogo da velha simples e interativo desenvolvido em React.

## 📋 Sobre o Projeto

Este é um jogo da velha clássico (também conhecido como Tic-Tac-Toe) onde dois jogadores se alternam marcando X e O em um tabuleiro 3x3. O objetivo é conseguir três marcas iguais em linha (horizontal, vertical ou diagonal).

## ✨ Funcionalidades

- ✅ Tabuleiro 3x3 interativo
- ✅ Alternância automática entre jogadores X e O
- ✅ Detecção automática de vencedor
- ✅ Detecção de empate
- ✅ Botão para reiniciar o jogo
- ✅ Prevenção de jogadas inválidas
- ✅ Interface moderna e responsiva

## 🎮 Como Jogar

1. O jogador X sempre começa
2. Clique em qualquer quadrado vazio para fazer sua jogada
3. Os jogadores se alternam entre X e O
4. O primeiro a conseguir três marcas em linha vence
5. Se todos os quadrados forem preenchidos sem vencedor, é empate
6. Clique em "Reiniciar Jogo" para começar uma nova partida

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção da interface
- **Hooks** (useState) - Gerenciamento de estado
- **Tailwind CSS** - Estilização com classes utilitárias

## 📦 Estrutura do Código

- `tabuleiro` - Estado que armazena as jogadas (array de 9 posições)
- `xJoga` - Estado que controla qual jogador está jogando
- `calcularVencedor()` - Função que verifica todas as combinações vencedoras
- `clicarQuadrado()` - Função que processa cada jogada
- `reiniciar()` - Função que reinicia o jogo

## 🎯 Regras do Jogo

O jogo verifica 8 combinações possíveis para vitória:
- 3 linhas horizontais
- 3 linhas verticais
- 2 diagonais

## 🚀 Como Usar

Este componente React pode ser integrado em qualquer projeto React. Basta importar e renderizar o componente `JogoDaVelha`.

```jsx
import JogoDaVelha from './JogoDaVelha';

function App() {
  return <JogoDaVelha />;
}
```

## 📝 Licença

Creative Commons.