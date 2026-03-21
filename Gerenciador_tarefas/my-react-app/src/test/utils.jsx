import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter para testes
import { ThemeProvider } from '../Context/themeContext';
import { ProjectProvider } from '../Context/ProjectContext';
import { TasksProvider } from '../Context/TasksContext';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider>
      {/* MemoryRouter é melhor para testes que o BrowserRouter */}
      <MemoryRouter> 
        <ProjectProvider>
          <TasksProvider>
            {children}
          </TasksProvider>
        </ProjectProvider>
      </MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };