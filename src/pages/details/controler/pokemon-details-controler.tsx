
import PokemonEntity from "../../../pokemon/model/pokemon-entity";

import React from "react";
import { useSearchParams } from "react-router-dom";
import PokemonDetailsView from "..";

interface Props{
    
}

interface State{
    pokemon: PokemonEntity
}

export default class PokemonDetailControler extends React.Component<Props, State>{

    constructor(props: Props ){
        super(props);
        this.state={
            pokemon: undefined
        }
       
    }

    componentDidMount():void{
        this.getPokemonData();
    }
    private getPokemonData() {
        const params  = new URLSearchParams(window.location.search);
        var data = JSON.parse(params.get('pokemon'));
        this.setState({ pokemon: data as PokemonEntity });
    }
    

    render(){
        if(this.state.pokemon != undefined){
            console.log('Dados do pokemon definidos');
       
            return(
                <PokemonDetailsView pokemon ={ this.state.pokemon}/>
                )
        }
      
    }
}