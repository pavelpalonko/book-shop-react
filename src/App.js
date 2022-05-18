import React from "react";
import './style/mainStyle.css'
import { Provider } from 'react-redux'
import { store } from '../src/store/index'
import BooksListPage from "./pages/BooksListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookCardPage from "./pages/BookCardPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/books-shop" element={<BooksListPage />}/>
            <Route path="/books-shop/:id" element={<BookCardPage/>}/>
            <Route path="*" element={<BooksListPage />}/>
          </Routes>
        </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;