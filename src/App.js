import React from "react";
import './style/mainStyle.css'
import { Provider } from 'react-redux'
import { store } from '../src/store/index'
import BooksListPage from "./pages/BooksListPage";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BooksListPage/>
      </Provider>
    </div>
  );
}

export default App;
