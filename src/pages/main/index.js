import React, {Component} from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import iBackground from '../../assets/imgs/background.jpg';
import styles from './styles';


export default class main extends Component {
  
  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if (this.state.press == false) {
        this.setState({ showPass: false, press: true })
    } else {
        this.setState({ showPass: true, press: false })
    }
  }

  // login metodo
  state = {
    email: '',
    password: '',
    isAuthenticated: false
  };

  login = async () => {
    const { email, password } = this.state;

    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);

      this.setState({ isAuthenticated: true });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
}

  render() {
    return (
      <ImageBackground source={iBackground} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Sacred</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            placeholder={'Digite seu e-mail'}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid='transparent'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            placeholder={'Digite sua senha'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            underlineColorAndroid='transparent'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

        <TouchableOpacity style={styles.btnEye}
          onPress={this.showPass.bind(this)}>
        </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={this.login}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        { this.state.isAuthenticated ? <Text>Esta logado</Text> : null }

      </ImageBackground>
    );
  }
}