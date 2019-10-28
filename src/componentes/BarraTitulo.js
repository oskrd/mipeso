import React from 'react';

export default class BarraTitulo extends React.Component {

  render() {
    return (
      <nav className='teal darken-4'>
        <div className="nav-wrapper">
          <span className="brand-logo" style={{ "marginLeft": "40px" }}>Mi peso</span>
          <button className="btn-floating btn-large halfway-fab waves-effect waves-light teal" onClick={() => this.props.btnClicked()} >
            <i className="material-icons">add</i>
          </button>
        </div>
      </nav>
    );
  }

}