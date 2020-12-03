import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

 
const headerProps = {
    icon: 'users',
    title: 'Cadastro',
    subtitle: 'Novo Cadastro Usuário'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {name: '', email: '' , telefone: '', rg: '', cpf: '', sobrenome: '', cidade: '', estado: '', rua: '', numero: '', complemento: '', cep: '', n_cartao: 'xxxxxxxx', nome_cartao: ''},
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>

                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Sobrenome</label>
                            <input type="text" className="form-control"
                                name="sobrenome"
                                value={this.state.user.sobrenome}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Sobrenome..." />
                        </div>

                        <div className="form-group">
                            <label>CPF</label>
                            <input type="text" className="form-control"
                                name="cpf"
                                value={this.state.user.cpf}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o CPF" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control"
                                name="telefone"
                                value={this.state.user.telefone}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o Telefone" />
                        </div>

                        <div className="form-group">
                            <label>Rua</label>
                            <input type="text" className="form-control"
                                name="rua"
                                value={this.state.user.rua}
                                onChange={e => this.updateField(e)}
                                placeholder="Rua" />
                        </div>

                    </div>
                   
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control"
                                name="cidade"
                                value={this.state.user.cidade}
                                onChange={e => this.updateField(e)}
                                placeholder="Ex: Curitiba" />
                        </div>

                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control"
                                name="estado"
                                value={this.state.user.estado}
                                onChange={e => this.updateField(e)}
                                placeholder="Paraná" />
                        </div>

                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Número</label>
                            <input type="text" className="form-control"
                                name="numero"
                                value={this.state.user.numero}
                                onChange={e => this.updateField(e)}
                                placeholder="Ex: 375 B" />
                        </div>

                        <div className="form-group">
                            <label>CEP</label>
                            <input type="text" className="form-control"
                                name="cep"
                                value={this.state.user.cep}
                                onChange={e => this.updateField(e)}
                                placeholder="CEP" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>complemento</label>
                            <input type="text" className="form-control"
                                name="complemento"
                                value={this.state.user.complemento}
                                onChange={e => this.updateField(e)}
                                placeholder="apartamento 1" />
                        </div>

                        <div className="form-group">
                            <label> Numero Cartão de Crédito</label>
                            <input type="text" className="form-control"
                                name="nome-cartao"
                                value={this.state.user.n_cartao}
                                onChange={e => this.updateField(e)}
                                placeholder="88888 8888" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome Cartão</label>
                            <input type="text" className="form-control"
                                name="nome_cartao"
                                value={this.state.user.nome_cartao}
                                onChange={e => this.updateField(e)}
                                placeholder="Ex: José Leão" />
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

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
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
                         <th>Telefone</th>
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
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.telefone}</td>

                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
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