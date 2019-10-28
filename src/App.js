import React from 'react';
import BarraTitulo from './componentes/BarraTitulo';
import Grafica from './componentes/Grafica';
import Tabla from './componentes/Tabla';
import Form from './componentes/Form';

class App extends React.Component {
  state = {
    registros: [],
    modal:false
  }

  componentDidMount() {
    if(localStorage.getItem('registros')) {
      const regs = JSON.parse(localStorage.getItem('registros'));
      this.setState({
        registros : regs
      })
    }
  }

  aceptarRegistro = ({ fecha, peso }) => {
    const nuevoRegistro = [+fecha, +peso];
    const newStateRegistros = [...this.state.registros, nuevoRegistro];
    localStorage.setItem('registros', JSON.stringify(newStateRegistros));
    this.setState({
      registros: newStateRegistros
    });
  }

  onCerrarForm = () => {
    this.setState({
      modal:false
    })
  }

  reiniciarRegistros = () => {
    localStorage.clear();
    this.setState({
      registros: []
    });
  }

  render() {

    return (
      <div>
        <BarraTitulo btnClicked={() => this.setState({modal:true})}/>
        <Form visible={this.state.modal} onAceptar={this.aceptarRegistro} onCerrar={this.onCerrarForm} />
        <main>
          <h3>Registro Diario de Peso</h3>
          <div className='row'>
            <div className='col l6 m12 s12 s6'>
              <Grafica registros={this.state.registros} />
              <button className='btn' onClick={this.reiniciarRegistros} >Reiniciar lecturas</button>
            </div>
            <div className='col l6 m12 s12 s6'>
              <Tabla registros={this.state.registros} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
