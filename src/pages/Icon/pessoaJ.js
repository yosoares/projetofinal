import React, { useState } from 'react';
import { IMaskInput } from "react-imask";
function Icon() {
    const [cnpj, setCNPJ] = useState('')
    const [ie, setIE] = useState('')
    const [sitca, setSitca] = useState('')
    const [id, setID] = useState('')
    const [estado, setEstado] = useState('')
    function handleFormulario() {
        alert(`CNPJ: ${cnpj} \nIE: ${ie} \nSitca: ${sitca} \nID: ${id} \nEstado: ${estado}`)
    }
    return (
        <div>
            <div className='App'>
                <h1>Pessoa Jurídica</h1>
                <form onSubmit={handleFormulario}>
                    <label>CNPJ: </label><IMaskInput className='caixinha' mask='00.000.000/0000-00' value={cnpj} onChange={(e) => setCNPJ(e.target.value)} /><br />
                    <label>ie: </label><IMaskInput className='caixinha' mask='000/.000/.000/.000' value={ie} onChange={(e) => setIE(e.target.value)} /><br />
                    <label>Situação_Cadastral: </label><input className='caixinha' type='text' value={sitca} onChange={(e) => setSitca(e.target.value)} /><br />
                    <label>ID_Cliente: </label><input className='caixinha' type='text' value={id} onChange={(e) => setID(e.target.value)} /><br />
                    <label>Estado: </label><input className='caixinha' type='password' value={estado} onChange={(e) => setEstado(e.target.value)} /><br />
                    <button className="button" type='submit'>Enviar</button>
                </form>
            </div>
        </div >
    )
}
export default Icon;