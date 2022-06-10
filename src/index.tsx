import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import { store } from 'store/store';

import App from 'App';
import Global from 'styles/global';
import { theme } from 'styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global />
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </Provider>
);
