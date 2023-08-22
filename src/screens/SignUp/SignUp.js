import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, {useContext, useState} from 'react';
import TextInputWithLabels from '../../Components/TextInputWithLabels';
import CustomBtn from '../../Components/CustomBtn';
import validator from '../../utils/validations';
import {showError} from '../../utils/HelperFunction';
import {AuthContext} from '../../context/AuthContext';

const SignUp = ({navigation}) => {
  const val = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  const isValidData = () => {
    const error = validator({userName, email, password});
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onSignUp = () => {
    const checkValid = isValidData();
    if (checkValid) {
      navigation.navigate('Login');
    }
    // if (email == '' || password == '') {
    //   showError();
    // } else {
    //   navigation.navigate('SignUp');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'red', padding: 30}}>{val}</Text>
      <TextInputWithLabels
        placeholder="Enter your user name"
        label="User Name"
        value={userName}
        emailInput={true}
        onChangeText={text => setUserName(text)}
      />
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
      <CustomBtn title="SignUp" onPress={onSignUp} />
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
        <Text>Already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#000fff'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
