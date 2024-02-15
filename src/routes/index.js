import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import StackRoutes from './stackRoutes';
import Inicio from '../pages/Inicio';
import Contato from '../pages/Contato';
import Cursos from '../pages/Curso';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'grey'
                }
            }}>



            <Tab.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    tabBarLabel: 'Tela Inicial',
                    headerTintColor: 'red',
                    headerStyle: {
                        backgroundColor: 'grey'
                    },
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='home' color='red' size={size}></FontAwesome>
                        )
                    }

                }}
            />

            <Tab.Screen
                name='Cursos'
                component={StackRoutes}
                options={{
                    title: 'Cursos',
                    headerTintColor: 'red',
                    headerStyle: {
                        backgroundColor: 'grey'
                    },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='book' color='red' size={size}></FontAwesome>
                        )
                    }
                }}

            />
            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    title: 'Contatos',
                    headerTintColor: 'red',
                    headerStyle: {
                        backgroundColor: 'grey'
                    },
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome name='phone' color='red' size={size}></FontAwesome>
                        )
                    }
                }}

            />

        </Tab.Navigator>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'Gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
});




