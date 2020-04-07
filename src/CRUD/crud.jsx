import React from 'react';
import './crud.scss'
import { TextField } from '@material-ui/core';

export default class Crud extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id: null,
          nombre: null,
          apellido: null,
          NIT: null,
          fecha: null,
          dirección: null
      };
    }
  
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
  
    render() {
      return (
        <div className="Body">
          <div className="data">
            <div>
              <text className="text"> ID</text>
              <TextField placeholder={'Ingrese ID'}></TextField>
            </div>
            <div>
              <text className="text"> Nombre</text>
              <TextField placeholder={'Ingrese nombre'}></TextField>
            </div>
            <div>
              <text className="text"> Apellido</text>
              <TextField placeholder={'Ingrese apellido'}></TextField>
            </div>
            <div>
              <text className="text"> NIT</text>
              <TextField placeholder={'Ingrese NIT'}></TextField>
            </div>
            <div>

            </div>
            <div>
            <text className="text"> Direccion</text>
              <TextField placeholder={'Ingrese direccion'}></TextField>
            </div>
          </div>

          <div className="table"> 

          </div>
        </div>
      );
    }
  }
