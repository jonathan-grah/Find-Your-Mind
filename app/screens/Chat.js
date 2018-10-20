require('dotenv').load();

import React from 'React';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { DirectLine } from 'botframework-directlinejs';
import { Avatar, Header } from 'react-native-elements';

const directLine = new DirectLine({
  secret: process.env.directLineSecret
});

const botAvatar = 'https://i.imgur.com/t6mQMfS.png';

const botMessageToGiftedMessage = botMessage => ({
  ...botMessage,
  _id: botMessage.id,
  createdAt: botMessage.timestamp,
  user: {
    _id: 2,
    name: 'Simon',
    avatar: botAvatar
  }
});

const giftedMessageToBotMessage = message => {
  return {
    from: { id: 1, name: 'John Doe' },
    type: 'message',
    text: message.text
  };
};

export default class ChatScreen extends React.Component {
  state = {
    messages: []
  };

  constructor(props) {
    super(props);
    directLine.activity$
      .filter(activity => activity.from.id === 'depressionchatbot')
      .subscribe(botMessage => {
        const newMessage = botMessageToGiftedMessage(botMessage);
        this.setState({
          messages: [newMessage, ...this.state.messages]
        });
      });
  }

  onSend = messages => {
    this.setState({ messages: [...messages, ...this.state.messages] });
    messages.forEach(message => {
      directLine
        .postActivity(giftedMessageToBotMessage(message))
        .subscribe(() => console.log('success'), () => console.log('failed'));
    });
  };

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: '#000'
          }
        }}
        wrapperStyle={{
          right: {
            backgroundColor: 'powderblue'
          }
        }}
      />
    );
  }

  renderBotHeader() {
    return (
      <View>
        <Text>Simon</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="powderblue"
          leftComponent={{
            icon: 'arrow-back',
            color: '#000',
            onPress: () => this.props.navigation.goBack()
          }}
          centerComponent={this.renderBotHeader()}
          rightComponent={{
            icon: 'question-answer',
            color: '#000',
            onPress: () => this.props.navigation.navigate('Info')
          }}
        />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
            avatar:
              'https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg'
          }}
          renderBubble={this.renderBubble.bind(this)}
          showUserAvatar={true}
        />
        <KeyboardAvoidingView behavior="padding" enabled />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
