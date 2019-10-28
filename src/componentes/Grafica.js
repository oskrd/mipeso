import React from 'react';
import Highcharts from 'highcharts';
import './Grafica.css'

class Grafica extends React.Component {
    componentDidMount() {
        this.initGrafica(this.props.registros);
        this.setState(this.props.registros);
    }

    componentDidUpdate(prevProps){        
        if(this.props.registros !== prevProps.registros){
            this.initGrafica(this.props.registros);
        }
    }

    initGrafica = (registros) => {
        Highcharts.chart('grafica', {
            title: {
                text: 'Masa respecto a la fecha'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title : { text : 'masa (kg)'}
            },
            series: [
                {
                    name: 'Mis mediciones',
                    data: registros
                }
            ]
        });
    }

    render() {
        return (
            <div id='grafica' className='z-depth-2 hoverable grafica' />
        );
    }
}

export default Grafica;