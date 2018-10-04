import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button} from 'react-native';

export default class AlignItemsBasics extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: 'center', backgroundColor: 'powderblue'}}>
          <Text style={{
            fontFamily : "Arial",
            fontSize : "50%",
            fontWeight : "bold",
            textAlign: "center",
          }}>Find 
          {"\n"}Your 
          {"\n"}Mind </Text>
          <Text></Text>
          <Button
            onPress={''}
            title="Anonymous Chat"
            color="#194D33"
            style={{
              left: "0",
              position: 'absolute'
            }}
            accessibilityLabel="Anonymous Chat"
          />
        </View> 
      </View>
    );
  }
}