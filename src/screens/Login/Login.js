import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import TextInputWithLabels from '../../Components/TextInputWithLabels';
import CustomBtn from '../../Components/CustomBtn';
import validator from '../../utils/validations';
import {showError} from '../../utils/HelperFunction';
import {Button} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../context/AuthContext';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const val = useContext(AuthContext);

  const isValidData = () => {
    const error = validator({email, password});
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onLogin = () => {
    const checkValid = isValidData();
    // if (checkValid) {
    //   navigation.navigate('SignUp');
    // }
    if (email == '' || password == '') {
      showError();
    } else {
      navigation.navigate('SignUp');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInputWithLabels
        placeholder="Enter your email"
        label="Email"
        value={email}
        emailInput={true}
        onChangeText={text => setEmail(text)}
      />
      <TextInputWithLabels
        placeholder="Enter your password"
        label="Password"
        value={password}
        isSecure={isSecure}
        onChangeText={text => setPassword(text)}
      />
      <CustomBtn title="Login" onPress={() => navigation.navigate('Home')} />
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
        <Text>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: '#000fff'}}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={{color: 'red', padding: 20}}>{val}</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
