import React from 'react';
import {
  NativeModules,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const NewModuleButton = () => {
  const onPress = () => {
    NativeModules.LoaderModule.launchARSession();
  };

  return (
    <View style={styles.container}>
      <Text style={{margin: 20, alignSelf: 'center', textAlign: 'center'}}>
        This button launches an AR session which is a native android module.
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#008080',
          width: '60%',
          height: 60,
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}
        onPress={onPress}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600',
            color: 'white',
          }}>
          Launch AR Activity
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default NewModuleButton;
