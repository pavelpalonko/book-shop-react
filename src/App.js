import React from "react";
import './style/mainStyle.css'
import { Provider } from 'react-redux'
import { store } from '../src/store/index'
import BooksListPage from "./pages/BooksListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BookCardPage from "./pages/BookCardPage";
import BasketPage from "./pages/BasketPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
          <Routes>
            <Route path="/books-shop" element={<BooksListPage />}/>
            <Route path="/books-shop/:id" element={<BookCardPage/>}/>
            <Route path="/basket-page" element={<BasketPage/>}/>
            <Route path="*" element={<BooksListPage />}/>
          </Routes>
          <Footer/>
        </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;