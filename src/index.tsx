import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ModalProvider } from 'styled-react-modal';
import App from './App';
import { store } from './store/store';
import Global from './styles/global';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Global />
    <ModalProvider>
      <App />
    </ModalProvider>
  </Provider>
);
