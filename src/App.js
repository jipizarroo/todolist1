import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: 1, 
            mostrar: "d-flex",
            esconder: "d-none",
            notas: []
        }

        this.getValor = this.getValor.bind(this);
    }

    getValor(e) {
        if (e.keyCode === 13 && e.target.value !== '') {
            this.setState({
                notas: this.state.notas.concat(e.target.value),
                estado: 2
            })

        }
    }

    sendToTrash(y){
        const { notas } = this.state;
        notas.splice(y, 1)
        this.setState({
            notas: notas
        })

    }

    render() {
        return (
            <>
                <div className="container" id="body">
                    <div className="row">
                        <div className="col d-flex justify-content-center" id="titulo">
                            <h1>HOLA MUNDO</h1>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-7" id="cuerpotarjeta">
                            <input type="text" onKeyDown={(e) => this.getValor(e)} />
                            <ul className="list-group-flush border-bottom border-top">
                                <li className={`list-group-item justify-content-between mt-2 text-danger ${this.state.estado === 1 ? this.state.mostrar : this.state.esconder}`}>No tasks, add a task</li>
                                {
                                    this.state.notas.length > 0 &&
                                    this.state.notas.map((nota, i) => {
                                        return (

                                            <li className="list-group-item d-flex justify-content-between mt-2"key={i}>
                                                {nota} <i className="fas fa-trash" id="basurita" onClick={(y) => this.sendToTrash(i)}></i>
                                            </li>
                                        )
                                    }
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default App;
