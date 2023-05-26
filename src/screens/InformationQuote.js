import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Image, Link, View, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import  firebase  from "../../firebase-config"; 
import { ListItem, Avatar, Chip, Divider, Text, Tooltip} from 'react-native-elements';
import ListItemSwipeable from "react-native-elements/dist/list/ListItemSwipeable";

const InfoQuote = (props) => {

  const [appoinments, setAppoinments] = useState([])


  useEffect(() => {
    firebase.db.collection('appoinment').onSnapshot(querySnapshot => {
        const appoinments = [];

        querySnapshot.docs.forEach(doc => {
            const{namerUser, marca, model, year, date, description} = doc.data()
            appoinments.push({
                id: doc.id,
                namerUser,
                marca,
                model,
                year,
                date,
                description
            })
        });
        console.log(appoinments)
        setAppoinments(appoinments)
    });
}, []);

  
    
return (
  <ScrollView>
    
  {
    appoinments.map(appoinment => {
      return (
          <ListItem 
            key={appoinment.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("DetailsAppoinment",{
                appoinmentId: appoinment.id
              }
              ); 
            }}
          >
            <ListItem.Chevron />
            <Avatar 
            size="large"
            overlayContainerStyle={{backgroundColor: 'black'}}
            source={{uri: 'https://static.vecteezy.com/system/resources/previews/007/214/895/non_2x/car-with-spanner-color-icon-auto-workshop-repair-service-isolated-illustration-vector.jpg'}} 
            activeOpacity={0.7}
            />
            <ListItem.Content>
            <Tooltip backgroundColor="#1f8ad4" popover={<Text>Dar clic para ver mas información </Text>}>
                <Text backgroundColor="#1f8ad4">Info</Text>
              </Tooltip>
              <ListItem.Title>{appoinment.namerUser}</ListItem.Title>
              <ListItem.Subtitle>{appoinment.marca}</ListItem.Subtitle>
              <ListItem.Subtitle>{appoinment.model}</ListItem.Subtitle>
              <ListItem.Swipeable>{appoinment.date}</ListItem.Swipeable>
              <Divider orientation="horizontal" />
            </ListItem.Content>
            
          </ListItem>
                    

          
      )
    })
  }

  </ScrollView>

);

};

export default InfoQuote;