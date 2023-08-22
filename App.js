// import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   Text,
//   ScrollView,
//   View,
//   Image,
//   TouchableHighlight,
// } from 'react-native';

// const baseUrl = 'https://reqres.in';

// function User({userObject}) {
//   return (
//     <View>
//       <Image
//         source={{uri: userObject.avatar}}
//         style={{width: 200, height: 200, borderRadius: 100}}
//       />
//       <Text style={{textAlign: 'center', fontSize: 20}}>
//         {`${userObject.first_name} ${userObject.last_name}`}
//       </Text>
//     </View>
//   );
// }

// export default function App() {
//   const [userId, setUserId] = useState(1);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasError, setErrorFlag] = useState(false);

//   const changeUserIdHandler = () => {
//     setUserId(userId => (userId === 3 ? 1 : userId + 1));
//   };

//   useEffect(() => {
//     const abortController = new AbortController();
//     const url = `${baseUrl}/gender/${userId}`;

//     const fetchUsers = async () => {
//       try {
//         setIsLoading(true);

//         const response = await axios.get(url, {
//           signal: abortController.signal,
//         });

//         if (response.status === 200) {
//           setUser(response.data.data);
//           setIsLoading(false);

//           return;
//         } else {
//           throw new Error('Failed to fetch users');
//         }
//       } catch (error) {
//         if (abortController.signal.aborted) {
//           console.log('Data fetching cancelled');
//         } else {
//           setErrorFlag(true);
//           setIsLoading(false);
//         }
//       }
//     };

//     fetchUsers();

//     return () => abortController.abort('Data fetching cancelled');
//   }, [userId]);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.wrapperStyle}>
//         {!isLoading && !hasError && user && <User userObject={user} />}
//       </View>
//       <View style={styles.wrapperStyle}>
//         {isLoading && <Text> Loading </Text>}
//         {!isLoading && hasError && <Text> An error has occurred </Text>}
//       </View>
//       <View>
//         <TouchableHighlight
//           onPress={changeUserIdHandler}
//           disabled={isLoading}
//           style={styles.buttonStyles}>
//           <Text style={styles.textStyles}>Get New User</Text>
//         </TouchableHighlight>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2c3e50',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wrapperStyle: {
//     minHeight: 128,
//   },
//   buttonStyles: {
//     backgroundColor: 'dodgerblue',
//   },
//   textStyles: {
//     fontSize: 20,
//     color: 'white',
//     padding: 10,
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import FlashMessage from 'react-native-flash-message';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <>
      <AppNavigation />
      <FlashMessage position="top" />
    </>
  );
};

export default App;
