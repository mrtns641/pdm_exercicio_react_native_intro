import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const geraNumeros = () => {
  var listaNumeros = [];

  for (let i = 0; i < 6; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 60 + 1);
      if (listaNumeros.indexOf(numeroAleatorio) === -1) {
        listaNumeros.push(numeroAleatorio);
      }
  }
  return listaNumeros;
}
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      texto: 'Gerador de Números',
      retorno: geraNumeros()
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.texto}</Text>
        <Text>{ this.state.retorno[0] + " " + 
                this.state.retorno[1] + " " + 
                this.state.retorno[2]+  " " + 
                this.state.retorno[3]+  " " + 
                this.state.retorno[4]+  " " + 
                this.state.retorno[5]}
        </Text>
        <Button
          title='Clique Aqui'
          onPress={() => {this.setState({
            retorno: this.retorno = geraNumeros()
          })}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
