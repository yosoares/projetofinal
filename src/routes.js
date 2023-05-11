import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Icon from './pages/Icon'
import Contact from './pages/Contact'
import Vendas from './pages/Contact/Vendas'
import Feminino from './pages/Feminino'
import Masculino from './pages/Masculino'
import Esportes from './pages/Esportes'
import Roupas from './pages/Roupas'
import Proteçao from './pages/Roupas/Proteçao'
import Basquete from './pages/Esportes/Basquete'
import Volei from './pages/Esportes/Volei'
import Futebol from './pages/Esportes/Futebol'
import Papo from './pages/Icon/papo'
import Casual from './pages/Casual'
import Speed from './pages/speed'
import Tennis from './pages/Tennis'
import WheyNeutro from './pages/WheyN'
import Footer from './Components/Footer/Footer'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Icon />} />
                <Route path='/Feminino' element={<Feminino />} />
                <Route path='/Masculino' element={<Masculino />} />
                <Route path='/Esportes' element={<Esportes />} />
                <Route path='/Roupas' element={<Roupas />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Vendas' element={<Vendas />} />
                <Route path='/Volei' element={<Volei />} />
                <Route path='/Basquete' element={<Basquete />} />
                <Route path='/Futebol' element={<Futebol />} />
                <Route path='/Proteçao' element={<Proteçao />} />
                <Route path='/Papo' element={<Papo />} />
                <Route path='/Casual' element={<Casual />} />
                <Route path='/Speed' element={<Speed />} />
                <Route path='/Tennis' element={<Tennis />} />
                <Route path='/WheyNeutro' element={<WheyNeutro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}