import React, { Component } from 'react';

export default class CadastroProdutos extends Component{

    render(){
        return (
            <div>
                <label for="produtoname">Digite o nome do produto : </label>
                <input id="produtoname" type="text"/>
                <br/>
                <label for="producocost">Digite o preço do produto : </label>
                <input id="producocost" type="number"/>
            </div>
        )
    }

}