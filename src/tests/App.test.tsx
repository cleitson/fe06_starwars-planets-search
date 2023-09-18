import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import FetchProvider from '../context/FetchProvider';
import userEvent from '@testing-library/user-event';

describe('Teste dos elementos na tela', () => {
  test('Se há um campo de input de pesquisa na tela', ()  => {
    render(
      <FetchProvider>
        <App />
      </FetchProvider>
    );
    const inputElement = screen.getByPlaceholderText(/buscar por planeta/i);
    expect(inputElement).toBeInTheDocument();
  });
  test('Se há um filtro na tela', ()  => {
    render(
      <FetchProvider>
        <App />
      </FetchProvider>
    );
    const selectElement = screen.getByTestId('column-filter');
    expect(selectElement).toBeInTheDocument();
    const optionElement = screen.getByTestId('comparison-filter');
    expect(optionElement).toBeInTheDocument();
    const numberElement = screen.getByTestId('value-filter');
    expect(numberElement).toBeInTheDocument();
    const buttonElement = screen.getByRole('button', { name: /filtrar/i });
    expect(buttonElement).toBeInTheDocument();
  });
  test('Se há uma tabela na tela', ()  => {
    render(
      <FetchProvider>
        <App />
      </FetchProvider>
    );
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });
  test('Se há um botão de limpar filtro na tela', ()  => {
    render(
      <FetchProvider>
        <App />
      </FetchProvider>
    );
    const buttonElement = screen.getByRole('button', { name: /limpar filtro/i });
    expect(buttonElement).toBeInTheDocument();
  });
});

// describe('Teste de funcionalidade', () => {
//   test('Se ao digitar um nome no campo de pesquisa, o nome aparece na tela',async () => {
//     render(
//       <FetchProvider>
//         <App />
//       </FetchProvider>
//     );
//     const inputElement = screen.getByRole('textbox');
//     await userEvent.type(inputElement, 'ta');
//     const nameElement = screen.findByRole('cell', {
//       name: /tatooine/i
//     })
//     expect(nameElement).toBeInTheDocument();
//   });
// });