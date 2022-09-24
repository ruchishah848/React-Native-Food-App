import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// PAGES
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
// TYPES
import { NativeStackParamList } from ".";

const Stack = createNativeStackNavigator<NativeStackParamList>();

const App = (): JSX.Element => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
