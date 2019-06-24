/* eslint-disable react/no-unused-state */
// @flow
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const App = () => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
      }}
      style={styles.video}
    >
      <Video
        source={require('../public/SampleVideo.mp4')}
        muted={false}
        repeat={true}
        resizeMode="cover"
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch="obey"
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '70%',
    height: '70%',
  },
});

export default App;
