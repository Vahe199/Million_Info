import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import Route from "./src/screens/Route";
import store from "./src/redux/store";


export default function App() {

    return (<PaperProvider>
        <Provider store={store}>
            <StatusBar translucent barStyle='dark-content'  backgroundColor={'#6c5cf10f'}/>
            <Route />
        </Provider>
        </PaperProvider>
    );
}
