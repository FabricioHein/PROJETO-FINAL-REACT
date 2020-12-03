import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'money ',
    title: 'Pedidos',
    subtitle: 'Pedidos Clientes'
}

const baseUrl = 'http://localhost:3001/pedidos'
const initialState = {
    pedidos: { produto: '', price: '' , valot_total: '', empresa: '', user:''},
    list: []
}


export default class pedidosShow extends Component {


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
                        <th>Número</th>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Valor Total</th>
                        <th>Empresa</th>
                        <th>Usuário</th>

                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(pedidos => {
            return (
                <tr key={pedidos.id}>
                    <td>{pedidos.id}</td>
                    <td>{pedidos.produto}</td>
                    <td>{pedidos.price}</td>
                    <td>{pedidos.valot_total}</td>
                    <td>{pedidos.company}</td>
                    <td>{pedidos.user}</td>

                  
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