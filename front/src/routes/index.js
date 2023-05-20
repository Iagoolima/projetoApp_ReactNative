import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../screens/login'
import DashboardCoffee from '../screens/dashboardCoffee'
import DashboardFood from '../screens/dashboardFood';

const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
             name="Login"
             component={Login}
             options={{headerShown: false}}
             />

            <Stack.Screen
             name="DashboardCoffee"
             component={DashboardCoffee}
             options={{headerShown: false}}
             />

            <Stack.Screen
             name="DashboardFood"
             component={DashboardFood}
             options={{headerShown: false}}
             />
        </Stack.Navigator>
    )
}