/// <reference types="vite/client" />
import type { GlobalProvider } from '@ladle/react';
import '../src/shared/styles/fonts';
import '../src/shared/styles/tokens.css';

export const Provider: GlobalProvider = ({ children }) => children;
