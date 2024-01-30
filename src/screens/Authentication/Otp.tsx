import React, {FunctionComponent, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AuthLayout from './AuthLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
import OTPTextInput from 'react-native-otp-textinput';
import {AuthParamType} from '../../navigation';
import {FONTS, SIZES, COLORS} from '../../constants';
import {TextButton} from '../../components';

type OTPProps = NativeStackScreenProps<AuthParamType, 'OTP'>;

const Otp: FunctionComponent<OTPProps> = ({navigation, route}) => {
  const [timer, setTimer] = useState(60);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // return (<View><Text></View>)

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to quocviet.ce@gmail.com"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
        // marginBottom: 50
      }}>
      {/* OTP inputs */}
      <View style={styles.containerOTP}>
        {/* <OTPInputView
          pinCount={4}
          style={{height: 50, width: '100%'}}
          codeInputFieldStyle={styles.codeInputFieldStyle}
          onCodeFilled={code => {
            console.log('code: ', code);
          }}
        /> */}
        <OTPTextInput
          ref={e => console.log('e: ', e?.state)}
          tintColor={COLORS.lightGray2}
          offTintColor={COLORS.lightGray2}
          textInputStyle={styles.codeInputFieldStyle}
        />
        {/* Countdown Timer */}
        <View style={styles.countdownTimer}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Didn't receive code?
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer === 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      {/* Footer */}
      <View style={{marginBottom: insets.bottom}}>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            ...styles.continueBtn,
          }}
          onPress={() => navigation.navigate('Main')}
        />
        <View style={{marginTop: SIZES.padding, alignItems: 'center'}}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            By signing up, you agree to our.
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
            onPress={() => console.log('TnC')}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  containerOTP: {
    flex: 1,
    marginTop: SIZES.padding * 2,
  },
  codeInputFieldStyle: {
    width: 65,
    height: 65,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    color: COLORS.black,
    ...FONTS.h3,
  },
  countdownTimer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.padding,
  },
  continueBtn: {
    height: 60,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
});

export default Otp;
