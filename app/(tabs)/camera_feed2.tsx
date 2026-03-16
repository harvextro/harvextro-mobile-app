import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Switch
} from 'react-native';

function App(): React.JSX.Element {
  const [isRobotOn, setIsRobotOn] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
    
  return (
    
    <ImageBackground
      source={require('@/assets/images/backgroundImage3.png')} 
      style={styles.background}
      resizeMode="cover"
    >   
       {/*header of the page */}
      <View style={styles.header}>
        <Text style={styles.text}>Manual Header</Text>
        <Image
            source={require('@/assets/images/icon5.png')} 
            style={styles.headerImage1}
          />
          <Image
            source={require('@/assets/images/headericon3.png')} 
            style={styles.headerImage2}
          />
          <TouchableOpacity onPress={()=> router.push('/(tabs)/camera_feed1')}>
            <Image
              source={require('@/assets/images/headericon2.png')} 
              style={styles.headerImage3}
            />
          </TouchableOpacity>

      </View>
    <View style={styles.container}>
        {/* Camera feed */}
        <View style={[styles.preview_box, { backgroundColor: 'rgba(45, 79, 53, 0.4)' }]}>
        </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header:{
    height:110,
    backgroundColor:'white',

  },
  headerImage1:{
    marginLeft:280,
    marginTop:73,
    width:40,
    height:40,
  },
  headerImage2:{
    marginLeft:340,
    marginTop:-40,
    width:40,
    height:40,

  },
  headerImage3:{
    marginLeft:15,
    marginTop:-40,
    width:40,
    height:40,

  },
 text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft:110,
    marginTop:-54,
    
    
  },
  preview_box: {
    width: 333,
    height: 668,
    marginTop: 30, // Reduced this so it doesn't push off screen
    borderRadius: 10,
  },
  background: {
    flex: 2,
    width: '100%',
    height: '100%',
  },
  
});

export default App;