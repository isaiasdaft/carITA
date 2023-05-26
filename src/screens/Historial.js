import React from "react";
import { useState, useEffect } from "react";
import { Center, NativeBaseProvider, View, ScrollView } from "native-base";
import  firebase  from "../../firebase-config"; 
import { ListItem, Avatar, Chip, Divider, Text, Tooltip, CheckBox } from 'react-native-elements';

const Historial = () => {
  const [appoinments, setAppoinments] = useState([])
  const [checked, setChecked] = useState(false);

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
    <View>

      {
        appoinments.map(appoinment => {
          return (

              <ListItem 
                key={appoinment.id}
                bottomDivider
                rounded
              >
                <ListItem.Chevron />
                
                <Avatar 
                size="large"
                overlayContainerStyle={{backgroundColor: 'black'}}
                source={{uri: 'https://thumbs.dreamstime.com/b/mec%C3%A1nico-icon-icono-simple-del-taller-servicio-de-reparaci%C3%B3n-coche-vector-121514627.jpg'}} 
                activeOpacity={0.5}
                />
                <ListItem.Content> 
                  <ListItem.Title>{appoinment.namerUser}</ListItem.Title>
                  <ListItem.Title>{appoinment.marca}</ListItem.Title>
                  <ListItem.Subtitle backgroundColor="#0ca37a" >{appoinment.date}</ListItem.Subtitle>
                  <ListItem.CheckBox  
                    title='Trabajo Completado'
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                  />
                </ListItem.Content>
                
              </ListItem>
                        
    
              
          )
        })
      }

    </View>
    </ScrollView>
    
  );
};

export default Historial;


