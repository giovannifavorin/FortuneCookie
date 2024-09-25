import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      modalVisible: false,
    }

    this.sorteiaTexto = this.sorteiaTexto.bind(this);

    this.frases = [
      'A solidão é a sorte de todos os espíritos excepcionais.',
      'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
      'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
      'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
    ];
  }

  sorteiaTexto() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      modalVisible: true, // Exibe o modal quando uma frase é sorteada
    })
  }

  fecharModal() {
    this.setState({ modalVisible: false }); // Fecha o modal
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Image source={require('./assets/BiscoitoFechado.png')} style={styles.imagemInicial} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.fecharModal();
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              {/* Exibe a imagem dentro da modal */}
              <Image source={require('./assets/BiscoitoAberto.png')} style={styles.imagemModal} />
              
              <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => this.fecharModal()}
              >
                <Text style={styles.btnTexto}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.botao} onPress={this.sorteiaTexto}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4EDE0', // Cor de fundo mais terrosa
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo semitransparente para o modal
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: '#EDE5C6', // Fundo claro para o modal
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagemInicial: {
    width: 150, // Ajuste o tamanho da imagem inicial
    height: 150,
    marginBottom: 20,
  },
  imagemModal: {
    width: 100, // Ajuste o tamanho da imagem dentro da modal
    height: 100,
    marginBottom: 20,
  },
  textoFrase: {
    fontSize: 18,
    color: '#8B5E3C', // Marrom claro para o texto
    marginBottom: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  modalButton: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9A066',
    borderRadius: 10,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#A3684F', // Marrom mais escuro para o contorno
    borderRadius: 25,
    backgroundColor: '#D9A066', // Tom terroso para o botão
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4EDE0', // Cor clara para o texto do botão
  }
});
