import React, { useEffect, useState } from 'react';
import { IMaskInput } from "react-imask";
import { Link, useNavigate } from 'react-router-dom'
import apiCep from '../../Components/services'
import apiBack from '../../Components/services/apiBack'
import { toast } from 'react-toastify'

function Vendas() {
    const navigate = useNavigate()
    
    const [codcliente, setCliente] = useState('')
    const [nome, setNome] = useState('')
    const [telf, setTelF] = useState('')
    const [telc, setTelC] = useState('')
    const [rua, setRUA] = useState('')
    const [compl, setCOMPL] = useState('')
    const [buscaCep, setBuscaCep] = useState('')
    const [cep, setCEP] = useState('')
    const [bair, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    useEffect(() => {
        function codigoCliente() {
            setCliente(Math.round(Math.random() * 10000))
        }
        codigoCliente()
    }, [])


    async function handleBuscaCep() {
        const response = await apiCep.get(`${cep}/json/`)
        setBuscaCep(response.data)
    }

    useEffect(() => {
        function AddBuscaCep() {
            setRUA(buscaCep.logradouro || rua)
            setCOMPL(buscaCep.complemento || compl)
            setBairro(buscaCep.bairro || bair)
            setCidade(buscaCep.localidade || cidade)
            setEstado(buscaCep.uf || estado)
        }
        AddBuscaCep()

    }, [handleBuscaCep])
    console.log(rua)

    async function handleCadastrar(e) {
        if (nome === '' || telc === '' || telf === '' || cep === '' || rua === ''|| compl === '' || bair === '' || cidade === '' || estado === '') {
            alert("Campos em branco...");
            e.preventDefault()
            return;
        }
       await apiBack.post('/cadastro_de_clientes', { codcliente, nome, telf, telc, rua, compl, cep, bair, cidade, estado})
       
       toast.success('Cadastro Efetuado com Sucesso')
       navigate('/Manipulacao')
    }



    return (
        <div className='App'>
            <h1>Cliente</h1>
            <div className='forms'>
                <form onSubmit={handleCadastrar}>
                    
                    <label>Código Cliente: </label><IMaskInput className='caixinha'
                        type='number'
                        value={codcliente} 
                        onChange={(e) => setCliente(Math.round(Math.flour()) * 1000)} /><br />
                   
                    <label>Nome: </label><IMaskInput className='caixinha' type='text' value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                    
                    <label>Telefone_ Fixo: </label><IMaskInput className='caixinha' mask='(00)0000-0000' value={telf} onChange={(e) => setTelF(e.target.value)} /><br />
                    
                    <label>Celular: </label><IMaskInput 
                    className='caixinha' 
                    mask='(00)00000-0000' 
                    value={telc} 
                    onChange={(e) => setTelC(e.target.value)}
                    /><br />
                    
                    <label>Rua: </label><IMaskInput
                        className='caixinha'
                        type='text'
                        value={rua}
                        onChange={(e) => setRUA(e.target.value)}
                    /><br />

                    <label>Complemento: </label><IMaskInput
                        className='caixinha'
                        type='text'
                        value={compl}
                        onChange={(e) => setCOMPL(e.target.value)}
                    /><br />

                    <label>CEP : </label><IMaskInput className='caixinha'
                        mask='00000-000'
                        value={cep}
                        onChange={(e) => setCEP(e.target.value)}
                        onBlur={handleBuscaCep} /><br />

                    <label>Bairro: </label><input className='caixinha'
                        type='text'
                       value={bair}
                        onChange={(e) => setBairro(e.target.value)}
                    /><br />
                   
                    <label>Cidade: </label><input
                        className='caixinha'
                        type='text'
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    /><br />
                   
                    <label>Estado: </label><IMaskInput
                        className='caixinha'
                        type='text'
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                    /><br />
                    <button className="button" type='submit'>Enviar</button>
                </form>

            </div>
        </div>
    )
}
export default Vendas;