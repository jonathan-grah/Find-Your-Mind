import React from 'React';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { DirectLine } from 'botframework-directlinejs';

const directLine = new DirectLine({
  secret: 'l_s_ArfNlk4.cwA.qzc.wSrA9_htdQaRshEWnJGNbCAQuUGZPAkw-_-Q5dE46e4'
});

const botMessageToGiftedMessage = botMessage => ({
  ...botMessage,
  _id: botMessage.id,
  createdAt: botMessage.timestamp,
  user: {
    _id: 2,
    name: 'Simon',
    avatar:
      'https://people.ceu.edu/sites/people.ceu.hu/files/styles/panopoly_image_full/public/profile/portrait/1474/simon1_1.jpg?itok=qh7d4F24'
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

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1
          }}
          renderBubble={this.renderBubble.bind(this)}
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
