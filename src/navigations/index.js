import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnDesigns from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import PayButton from '../components/PayButton'

import Home from '../screens/Home';
import WalletScrenn from '../screens/Wallet';
import Pay from '../screens/Pay';

const Tab = createBottomTabNavigator();
const icons = {
    Home: {
        lib: AnDesigns,
        name: 'home',
    },
    Wallet: {
        lib: AnDesigns,
        name: 'creditcard',
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AnDesigns,
        name: 'setting',
    },
}

export default function Navigation(){
    return (
        <Tab.Navigator 
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, size, focused}) => {
                    if(route.name === 'Pay'){
                        return (
                            <PayButton 
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        )
                    }
                    const {lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255,255,255, 0.2)'
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#96929c'
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                title: 'Início',

            }} />
            <Tab.Screen name="Wallet" component={WalletScrenn} options={{
                title: 'Carteira',
                
            }} />
            <Tab.Screen name="Pay" component={Pay} options={{
                title: '',
                
            }} />
            <Tab.Screen name="Notifications" component={Pay} options={{
                title: 'Notificações',
                
            }} />
            <Tab.Screen name="Settings" component={Pay} options={{
                title: 'Ajustes',
                
            }} />
        </Tab.Navigator>
    );
}