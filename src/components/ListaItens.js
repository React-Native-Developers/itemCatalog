import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

const styles = StyleSheet.create({
	item_style: {
		flex: 1, 
		flexDirection: 'row',
		flexWrap: 'wrap', //Quebra as linhas ao fim da tela
	}
});

class ListaItens extends Component {
	constructor(props) {
		super(props);

		this.state = { listaItens: [] };
	}

	componentWillMount() {
		//requisição HTTP
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			.then(response => { this.setState({ listaItens: response.data }); })
			.catch(() => { console.log('Erro ao Recuperar os Dados.'); });
	}

  render() {
    return (
		<ScrollView style={{ backgroundColor: '#DDD' }}>
			<View style={styles.item_style}>
				{this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
			</View>
		</ScrollView>
    );
  }
}

export default ListaItens;
