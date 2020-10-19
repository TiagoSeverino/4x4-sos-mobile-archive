import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';

const Stack = createStackNavigator();

export default function Auth() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: '#F2F3F5',
				},
			}}
		>
			<Stack.Screen name="Welcome" component={Welcome} />
		</Stack.Navigator>
	);
}
