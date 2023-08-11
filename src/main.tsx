/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { globalCss } from '@stitches/react';
import './index.css';
import { App } from './App';
import { postVisitation } from './assets/utils/metrics';

const globalStyles = globalCss({
  ':root': {
    '--accent-color': 'rgb(255, 123, 0)',
  },
  '*, *:after, *:before': {
    fontFamily: 'Poppins, sans-serif !important',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textDecoration: 'none',
  },
  '.dark-mode': {
    backgroundColor: '#000',
  },
});

document.body.classList.add('dark-mode');
globalStyles();

// personal metrics
setTimeout(postVisitation, 500);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
