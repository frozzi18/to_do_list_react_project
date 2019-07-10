import React, { Component } from 'react'
import { classBody } from '@babel/types';

export default class Todoinput extends Component {
    render() {
        return <div className="card card-body my-3">
        <form>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book">

                        </i>
                    </div>
                </div>
                <input type="text" classNam="form-control" placeholder="add a todo item"/>
            </div>
        </form>  
        </div>
                
    }
}
