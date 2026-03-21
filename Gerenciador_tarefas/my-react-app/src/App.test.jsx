import { render, screen } from '@testing-library/react'; 
import App from './App';
import { ThemeProvider } from './Context/themeContext'; 
import { describe, it, expect } from 'vitest';

describe('App - Navegação', () => {
  it('deve renderizar a TaskList na rota inicial', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    ); 
    // Como o App já tem os Providers e o Router, não use o customRender aqui!
    expect(screen.getByText(/algum texto do seu tasklist/i)).toBeInTheDocument();
  });
});