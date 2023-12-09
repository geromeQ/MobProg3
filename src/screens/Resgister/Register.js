import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Image, Button as RNButton } from 'react-native';
import Input from '../../components/Inputs/Input';
import Button from '../../components/Buttons/Button';
import Logo from '../../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Platform, ToastAndroid, Alert } from 'react-native'; // Import ToastAndroid and Alert
import fetchServices from '../../../component/services/fetchServices'; // Import fetchServices

const showToast = (message) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('Message', message);
  }
};

const Register = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  const pass = watch('password');

  const handleRegistration = async (data) => {
    try {
      setLoading(true);
      const { username, email, password, 'confirm-password': repassword } = data;

      if (username === '' || email === '' || password === '') {
        showToast('Please input required data');
        setLoading(false);
        return;
      }

      if (password !== repassword) {
        showToast('Password does not match');
        setLoading(false);
        return;
      }

      const url = 'http://192.168.1.4/api/v1/register';
      const payload = {
        name: username,
        email,
        password,
        password_confirmation: repassword,
      };

      const result = await fetchServices.postData(url, payload);
      console.debug(result);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        showToast('Registration successful');
        navigation.navigate('Login');
      }
    } catch (e) {
      console.debug('Error:', e.message);
      showToast(e.toString());
    } finally {
      setLoading(false);
    }
  };

  const EMAIL_REGEX = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

  return (
    <View style={styles.container}>
      <Image style={[styles.logo, { height: height * 0.3 }]} source={Logo} resizeMode="contain" />

      <Text style={styles.title}>Create an account</Text>

      <Input
        name="username"
        placeholder="Username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 4,
            message: 'Username should be at least 4 characters minimum',
          },
          maxLength: {
            value: 24,
            message: 'Username should be only 24 characters long',
          },
        }}
      />

      <Input
        name="email"
        placeholder="Email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
        }}
      />
      <Input
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters long',
          },
        }}
      />
      <Input
        name="confirm-password"
        placeholder="Confirm Password"
        control={control}
        secureTextEntry
        rules={{
          validate: (value) => value === pass || 'Password do not match',
        }}
      />

      <Button
        text="Register"
        type="PRIMARY"
        onPress={handleSubmit(handleRegistration)}
        disabled={loading}
      />
      <RNButton
        title="Already have an account? Log in here."
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#010101',
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: '300',
    color: 'white',
  },

  logo: {
    width: '100%',
    maxWidth: 300,
    height: 100,
  },
});

export default Register;
