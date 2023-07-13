import React, { useEffect, useState } from 'react'
import apiBack from '../../Components/services/apiBack'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Manipulacao() {
    const navigation = useNavigate()
    const [dados, setDados] = useState([''])

    useEffect(() => {
        async function recuperadados() {
            const response = await apiBack.get('/visualizaDados')
            setDados(response.data)
        }
        recuperadados()
    }, [dados])

    function handleUpdate(id) {
       navigation(`/Alterar/${id}`)
    }

    async function handleDelete(id) {
        //console.log(id)
       await apiBack.delete(`/deleteUser/${id}`)
       toast.warning('Apagado com Sucesso')
    }

    if (dados.length === 0) {
        return (
            <div>
                <h1>Manipulação e Visualização de Dados</h1>
                <h1>Sem Dados</h1>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <h1>Manipulação e Visualização de Dados</h1>
                </div>
                <div className='dadosApi'>
                    {dados.map((dado) => {
                        return (
                            <article key={dado.id_cliente}>
                                <strong>{dado.id_cliente}</strong>
                                <hr/>       
                                <strong>{dado.cod_cliente}</strong>
                                <hr/>
                                <strong>{dado.nome}</strong>
                                <hr/>
                                <strong>{dado.cidade}</strong>
                                <hr/>
                                <strong>
                                    <FiEdit size='2rem' color='pink'
                                        onClick={() => handleUpdate(dado.id_cliente)} />
                                </strong>
                                <strong>
                                    <FiTrash2 size='2rem' color='red'
                                        onClick={() => handleDelete(dado.id_cliente)} />
                                </strong>
                            </article>)
                    })}
                </div>
            </div>
        )
    }
}