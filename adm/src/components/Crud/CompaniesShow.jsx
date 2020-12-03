import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'suitcase',
    title: 'Empresas',
    subtitle: 'Consulte Empresas'
}

const baseUrl = 'http://localhost:3001/companies'
const initialState = {
    companies: { name: '', email: '' , telefone: '', servico: ''},
    list: []
}

export default class Companieshow extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }



    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Serviço</th>

                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(companies => {
            return (
                <tr key={companies.id}>
                    <td>{companies.id}</td>
                    <td>{companies.name}</td>
                    <td>{companies.email}</td>
                    <td>{companies.telefone}</td>
                    <td>{companies.servico}</td>

                   
                </tr>
            )
        })
    }
    
    render() {
        return (
            <Main {...headerProps}>
                {this.renderTable()}
            </Main>
        )
    }
}