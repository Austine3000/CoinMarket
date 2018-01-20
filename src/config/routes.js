import { StatusBar } from "react-native"
import { StackNavigator } from "react-navigation"

import Home from "../screens/Home"
import CurrencyList from "../screens/CurrencyList"
import Options from "../screens/Options"
import Themes from "../screens/Themes"
import Login from "../screens/Login/Login"
import SignUp from "../screens/SignUp/SignUp"

const HomeStack = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: () => null,
        headerTitle: "Login"
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: () => null,
        headerTitle: "SignUp"
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: "Home"
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: "Options"
      }
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: "Themes"
      }
    }
  },
  {
    headerMode: "screen"
  }
)

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
})

export default StackNavigator(
  {
    Login: {
      screen: HomeStack
    },
    CurrencyList: {
      screen: CurrencyListStack
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    cardStyle: { paddingTop: StatusBar.currentHeight }
  }
)
