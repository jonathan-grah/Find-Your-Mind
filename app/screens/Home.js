import React from 'React';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Font } from 'expo';

export default class HomeScreen extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      dahlia_script: require('../assets/fonts/dahlia_script.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'powderblue'
        }}
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 250, height: 250 }}
        />
        <View style={{ height: 185 }}>
          {this.state.fontLoaded ? (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 75,
                marginBottom: 20,
                fontFamily: 'dahlia_script'
              }}
            >
              Find Your {'\n'} Mind
            </Text>
          ) : null}
        </View>
        <View
          style={{
            flex: -1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%'
          }}
        >
          <View
            style={{
              width: 150
            }}
          >
            <Button
              backgroundColor="#fff"
              color="#000"
              borderRadius={10}
              title="Chat"
              onPress={() => this.props.navigation.navigate('Chat')}
            />
          </View>
          <View
            style={{
              width: 150
            }}
          >
            <Button
              backgroundColor="#fff"
              color="#000"
              borderRadius={10}
              title="Contribute"
              onPress={() => this.props.navigation.navigate('Contribute')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
