import React, { useState } from 'react';
function Vendas() {
    const [cpf, setCPF] = useState('')
    const [rg, setRG] = useState('')
    const [ddn, setDDN] = useState('')
    const [id, setID] = useState('')
    function handleFormulario() {
        alert(`CPF: ${cpf} \nRG: ${rg} \nDDN: ${ddn} \nID: ${id}`)
    }
    return (
        <div>
            <div className='App'>
                <h1>Pessoa Física</h1>
                <form onSubmit={handleFormulario}>
                    <label>CPF: </label><input className='caixinha' type='text' value={cpf} onChange={(e) => setCPF(e.target.value)} /><br />
                    <label>RG: </label><input className='caixinha' type='email' value={rg} onChange={(e) => setRG(e.target.value)} /><br />
                    <label>Data de Nascimento: </label><input className='caixinha' type='password' value={ddn} onChange={(e) => setDDN(e.target.value)} /><br />
                    <label>ID_Cliente: </label><input className='caixinha' type='password' value={id} onChange={(e) => setID(e.target.value)} /><br />
                    <button className="button" type='submit'>Enviar</button>
                </form>
            </div>
        </div >
    )
}
export default Vendas;