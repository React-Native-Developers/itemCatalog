import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const styles = StyleSheet.create({
	view_style: {
		backgroundColor: '#FFF',
		width: 200, 
		borderWidth: 3,
		borderColor: '#6699ff',
		marginLeft: 2,
		marginRight: 2,
		marginBottom: -1,
		flexDirection: 'row' //Coloca itens em linha
	},
	foto: {
		height: 96, 
		width: 96,
		margin: 4
	},
	detalhesItens: {
		flex: 1 //Deixa texto dentro da área
	},
	titulo: {
		color: '#6699ff' 
	},
	valor: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});

class Itens extends Component {
  render() {
    return (
		<View style={styles.view_style}>
			<View>
				<Image style={styles.foto} source={{ uri: this.props.item.foto }} />
			</View>
			<View style={styles.detalhesItens}>
				<Text style={styles.titulo}>{this.props.item.titulo}</Text>
				<Text style={styles.valor}>R$: {this.props.item.valor}</Text>
				<Text>Local: {this.props.item.local_anuncio}</Text>
				<Text>Data: {this.props.item.data_publicacao}</Text>
			</View>
		</View>
    );
  }
}

export default Itens;
