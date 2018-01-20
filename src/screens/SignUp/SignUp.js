import PropTypes from "prop-types"
import React, { component, Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import SignUpForm from "./SignUpForm"

export default class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }
  handlePressLogin = () => {
    this.props.navigation.navigate("Login")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Coin Market</Text>
        </View>
        <View style={styles.formContainer}>
          <SignUpForm />
        </View>
        <View>
          <Text style={styles.signUp} onPress={this.handlePressLogin}>
            Already have an account?
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F6D7A"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: "#FFF",
    fontSize: 28,
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  },
  signUp: {
    color: "#FFF",
    textAlign: "center",
    opacity: 0.9,
    fontSize: 20,
    paddingBottom: 30,
    paddingTop: 20
  }
})
