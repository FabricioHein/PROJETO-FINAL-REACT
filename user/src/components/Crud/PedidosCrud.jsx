import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'shopping-cart',
    title: 'Realizar Pedido',
    subtitle: 'Pedido'
}

const baseUrl = 'http://localhost:3001/pedidos'
const initialState = {
    pedido: { produto: '', price: '' , valor_total: '', company: '', user: ''},
    list: []
}

export default class PedidoCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ pedido: initialState.pedido })
    }

    save() {
        const pedido = this.state.pedido
        const method = pedido.id ? 'put' : 'post'
        const url = pedido.id ? `${baseUrl}/${pedido.id}` : baseUrl
        axios[method](url, pedido)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ pedido: initialState.pedido, list })
            })
    }

    getUpdatedList(pedido, add = true) {
        const list = this.state.list.filter(u => u.id !== pedido.id)
        if(add) list.unshift(pedido)
        return list
    }

    updateField(event) {
        const pedido = { ...this.state.pedido }
        pedido[event.target.name] = event.target.value
        this.setState({ pedido })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Produto</label>
                            <input type="text" className="form-control"
                                name="produto"
                                value={this.state.pedido.produto}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Produto.." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                    <div className="form-group">
                                              
                    <label>Preço Que deseja Pagar</label>
                    <input type="text" className="form-control"
                        name="price"
                        value={this.state.pedido.price}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o Valor" />
                    </div>
                        

                        
                    </div>

                    <div className="col-12 col-md-6">
                    <div className="form-group">
                                              
                    <label>Quantidade</label>
                    <input type="text" className="form-control"
                        name="qtd"
                        value={this.state.pedido.qtd}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite a Quantidade" />
                    </div>
                        

                        
                    </div>
              
                    <div className="col-12 col-md-6">
                        <div className="form-group">

                            
                            <label>Valor Total</label>
                            <input type="text" className="form-control"
                                name="valor_total"
                                value={this.state.pedido.valor_total}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Valor" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Usuário</label>
                            <input type="text" className="form-control"
                                name="user"
                                value={this.state.pedido.user}
                                onChange={e => this.updateField(e)}
                                placeholder="Seu Usuário" />
                        </div>
                    </div>
                </div>
                

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

  

    load(pedido) {
        this.setState({ pedido })
    }

    remove(pedido) {
        axios.delete(`${baseUrl}/${pedido.id}`).then(resp => {
            const list = this.getUpdatedList(pedido, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Valor Total</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(pedido => {
            return (
                <tr key={pedido.id}>
                    <td>{pedido.id}</td>
                    <td>{pedido.produto}</td>
                    <td>{pedido.preco}</td>
                    <td>{pedido.valor_total}</td>

                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(pedido)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(pedido)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}