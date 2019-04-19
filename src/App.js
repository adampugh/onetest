import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import ProductsPage from './components/ProductsPage/ProductsPage';

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <ProductsPage />
    </Provider>
);

export default App;