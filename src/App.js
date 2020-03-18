import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Routes from './routes';

// import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/** </Provider><Router history={history}> */}
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={5000} />
      </BrowserRouter>
      {/** </Router> */}
    </Provider>
  );
}

export default App;
