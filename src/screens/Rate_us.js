import React, {useState} from "react";
import { Text,TextArea, Box, Center, NativeBaseProvider, Button } from "native-base";
import {TouchableOpacity, View, StyleSheet, Image} from 'react-native';


const Rate = () => {
  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxRating] = useState([1,2,3,4,5])

  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'  
  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'

  const CustomerRatingBar = () =>{
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, key) => {
            return(
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setdefaultRating(item)}
              >
                <Image
                  style={styles.starImgStyle}
                  source={
                    item<= defaultRating
                      ? {uri: starImgFilled}
                      : {uri: starImgCorner}
                  }
                />

              </TouchableOpacity>
            )
  
          })
          
        }
      </View>
    )
  }

  return <Box alignItems="center" w="100%">
    <Text>Califica nuestro trabajo: </Text>
    <Text>{'\n'}</Text>
      <CustomerRatingBar />
      <Text style={styles.textStyle}>
        {defaultRating + '/' + maxRating.length}

      </Text>
      <Text>{'\n'}</Text>
      <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="300" />
      <Text>{'\n'}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => alert("You Rating send" + " "+defaultRating)}
      >
        <Text> Send Rate US</Text>
      </TouchableOpacity>
    </Box>;
};

const styles = StyleSheet.create({
  textStyle:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20
  },
  customRatingBarStyle:{
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover'
  }, 
  buttonStyle:{
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 30,
     padding: 15,
     backgroundColor: '#015D52'
  }
});

export default Rate;