import 'react-datepicker/dist/react-datepicker.min.css'
import React from 'react';
import './Form.css';
import swal from 'sweetalert';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fecha: moment().toDate(),
            peso: ''
        };
    }

    onSubmit = () => {
        const { fecha, peso } = this.state;

        if (!peso || isNaN(peso) || peso < 0 || !fecha) {
            swal('Lectura invalida', 'El registro de peso debe ser valido', 'error');
        }
        else {
            this.props.onAceptar(this.state);
        }
    }

    cambioFecha = (fecha) => {
        this.setState({ fecha });
    }
    cambioPeso = (evt) => {
        this.setState({
            peso: evt.target.value
        })
    }

    render() {
        return (
            <div className='row'>
                <div className={`form-container scale-transition scale-out ${this.props.visible ? 'scale-in' : ''} col s4 offset-s4 z-depth-4 teal lighten-5`}>
                    <form>
                        <label htmlFor='fecha'>
                            Fecha:
                            <DatePicker onChange={this.cambioFecha} selected={this.state.fecha} />
                        </label>
                        <br/>
                        <label htmlFor='peso'>
                            Peso (kg):
                            <input type='text' name='peso' id='peso' value={this.state.peso} onChange={this.cambioPeso} />
                        </label>
                        <input type='button' className='btn boton' value='Agregar' onClick={this.onSubmit} />
                        <input type='button' className='btn boton' value='Cerrar' onClick={() => this.props.onCerrar()} />
                    </form>
                </div>
            </div>
        )
    }
}