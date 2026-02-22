import './App.css'
import Home from './pages/Home'
import Historial from './pages/Historial'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/historial' element={<QueryClientProvider client={queryClient}><Historial/></QueryClientProvider>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
