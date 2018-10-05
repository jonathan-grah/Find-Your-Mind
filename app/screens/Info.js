import React from 'React';
import { View, ScrollView, Text } from 'react-native';
import { Header } from 'react-native-elements'

export default class InfoScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          backgroundColor='powderblue'
          leftComponent={{
            icon: 'arrow-back',
            color: '#000',
            onPress: () => this.props.navigation.goBack()
          }}
          centerComponent={{ text: 'Information' }}
        />
        <ScrollView>
          <View style={{ padding: 30 }}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{fontWeight: 'bold'}}>What is depression?</Text>
              <Text>While we all feel sad, moody or low from time to time, some people experience these feelings intensely, for long periods of and sometimes without any apparent reason. Depression is more than just a low mood – it's a serious condition that affects your physical and mental health.</Text>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Text style={{fontWeight: 'bold'}}>Causes of Depression</Text>
              <Text style={{ paddingBottom: 15 }}>Depression usually results from a combination of recent events and other longer-term or personal factors, rather than one immediate issue or event.</Text>
              <Text>Family history – Depression can run in families and some people will be at an increased genetic risk.</Text>
              <Text>Personality – Some people may be more at risk of depression because of their personality, particularly if they have a tendency to worry a lot, have low self-esteem.</Text>
              <Text>Drug and alcohol use – Drug and alcohol use can both lead to and result from depression. Many people with depression also have drug and alcohol problems.</Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Symptoms of Depression</Text>
              <Text>Behaviour:</Text>
              <Text>- not going out anymore</Text>
              <Text>- not getting thigns done at work/school</Text>
              <Text>- withdrawing from close family and friends</Text>
              <Text>- relying on alcohol and sedatives</Text>
              <Text style={{ paddingTop: 15 }}>Feelings:</Text>
              <Text>- overwhelmed, guilty, irritable</Text>
              <Text>- frustrated, lacking in confidence</Text>
              <Text>- disapointed, miserable</Text>
              <Text style={{ paddingTop: 15 }}>Physical:</Text>
              <Text>- tired all the time</Text>
              <Text>- sick and run down</Text>
              <Text>- headaches and muscle pains</Text>
              <Text>- sleep problems</Text>
              <Text>- loss or change of appetite</Text>
              <Text>- significant weight or loss gain</Text>
            </View>
            <View>
              <View style={{ paddingTop: 20}}>
                <Text style={{ fontWeight: 'bold'}}>Types of depression</Text>
                <Text>Major Depression:</Text>
                <Text style={{ paddingVertical: 10 }}>Major depression is sometimes called major depressive disorder, clinical depression, unipolar depression or simply 'depression'. It involves low mood.</Text>
                <Text>Melancholia:</Text>
                <Text style={{ paddingVertical: 10 }}>This is the term used to describe a severe form of depression where many of the physical symptoms of depression are present. One of the major changes is that the person starts to move more slowly.</Text>
                <Text>Psychotic depression:</Text>
                <Text style={{ paddingVertical: 10 }}>Sometimes people with a depressive disorder can lose touch with reality and experience psychosis. This can involve hallucinations (seeing or hearing things that aren't there).</Text>
                <Text>Antenatal and postnatal depression:</Text>
                <Text style={{ paddingVertical: 10 }}>Women are at an increased risk of depression during pregnancy and in the year following childbirth. In the days immediately following birth, many women experience the 'baby blues' which is a common condition related to hormonal changes and affects up to 80 per cent of women.</Text>
                <Text>Bipolar disorder:</Text>
                <Text style={{ paddingVertical: 10 }}>Bipolar disorder used to be known as 'manic depression' because the person experiences periods of depression and periods of mania, with periods of normal mood in between. Bipolar disorder seems to be most closely linked to family history.</Text>
                <Text>Cyclothymic disorder:</Text>
                <Text style={{ paddingVertical: 10 }}>Cyclothymic disorder is often described as a milder form of bipolar disorder. The person experiences chronic fluctuating moods over at least two years, involving periods of hypomania (a mild to moderate level of mania).</Text>
                <Text>Dysthymic disorder:</Text>
                <Text style={{ paddingVertical: 10 }}>The symptoms of dysthymia are similar to those of major depression but are less severe.</Text>
                <Text>Seasonal affective disorder (SAD):</Text>
                <Text style={{ paddingVertical: 10 }}>SAD is a mood disorder that has a seasonal pattern. The cause of the disorder is unclear, but it's thought to be related to the variation in light exposure in different seasons.</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}