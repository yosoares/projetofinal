import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import PessoaJ from './pages/Icon/pessoaJ'
import Vendas from './pages/Contact/cliente'
import PessoaF from './pages/Contact/pessoaF'
import Manipulacao from './pages/Manipulacao/index'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<PessoaJ />} />
                <Route path='/Vendas' element={<Vendas />} />
                <Route path='/PessoaF' element={<PessoaF />} />
                <Route path='/Manipulacao' element={<Manipulacao />} />
            </Routes>
        </BrowserRouter>
    )
}