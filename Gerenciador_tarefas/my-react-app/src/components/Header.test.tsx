import { render, screen } from '../test/utils'; // Usa o render que tem os Providers
import Header from './Header';
import { it, expect, describe } from 'vitest';
import { ThemeProvider } from "../Context/themeContext";

describe('Header Component', () => {
  it('renderiza o header corretamente', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    
    // O getByRole('banner') busca a tag <header> do HTML
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});