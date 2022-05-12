import React from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";
import './style/mainStyle.css'
import { Provider } from 'react-redux'
import { store } from '../src/store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <BookList />
      </Provider>

    </div>
  );
}

export default App;
