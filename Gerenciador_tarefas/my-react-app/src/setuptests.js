import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock necessário para componentes que usam bibliotecas de gráficos ou observers
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));