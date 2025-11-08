import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './tailwind.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Layout from './components/Layout'
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
