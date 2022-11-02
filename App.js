
import React,{ Component } from 'react'
import { Provider } from 'react-redux'
import { LogBox } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'


import { store, persistor } from './src/store/my-store'
import Root from './src/navigator/my-navigator'
export default class App extends Component<Props>{
	render() {
		LogBox.ignoreLogs = ['Remote debugger']
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Root />
				</PersistGate>
			</Provider>
		)
	}
}