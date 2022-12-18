import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Card, List, Text, Title } from 'react-native-paper'

const RightCounter = () => {
  return (
    <View style={styles.MainContainer}>

      <Card style={[styles.CardBody]}>
        <Text style={styles.Header}>MY PROFILE</Text>
        <View style={styles.ProfileCard}>
          <View>
            <Card.Cover style={{width: "100%", height: 200, aspectRatio: 1}} source={require("../../../assets/widget2.jpeg")}/>
          </View>
            <View style={styles.CardImage}>
              <Card.Cover style={styles.ProfileImage} source={require("../../../assets/v443_23123.png")}/>
            </View>
          </View>
        <View>
          <Text style={{textAlign: 'center'}}>WELCOME BACK, NOAH!</Text>
          <Text></Text>
        </View>
      </Card>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>SHOPPING CART </Text>
          <List.Section style={styles.Header}>
                <List.Accordion
                style={styles.ListGroup}
                title="SHOPPING CART"
                left={props => <List.Icon {...props} icon="equal" />}>
                  <List.Item title="VR Playgrounds ($30.00)" />
                  <List.Item title="VR Human Anatomy ($30.00)" />
                  <List.Item title="Gardens ($30.00)" />
                  <List.Item title="VR Whiteboard ($30.00)" />
                  <List.Item title="Total of 4 items ($120.0) (Ca State Tax 7.5%) <br/>Final Sale ($129.00)?" />
                </List.Accordion>
              </List.Section>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <List.Section style={styles.Header}>
                <List.Accordion
                style={styles.ListGroup}
                title="BROWSE GENRE"
                left={props => <List.Icon {...props} icon="equal" />}>
                  <List.Item title="ACTION" />
                  <List.Item title="ADVENTURE" />
                  <List.Item title="ROLE PLAYING" />
                  <List.Item title="PUZZLE" />
                  <List.Item title="STRATEGY" />
                  <List.Item title="SPORTS" />
                  <List.Item title="RACING" />
                </List.Accordion>
              </List.Section>
        </Card>
      </View>

      <View>
          <Card style={styles.CardBody}>
            <Title style={styles.Header}>CONTACT US</Title>
            <View style={styles.ListGroup}>
              <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                <Card.Cover style={{width: 50, height: 50}} source={require("../../../assets/v443_23128.png")}/>
                <Title>&nbsp;ALTER LEARNING CONNECT</Title>
              </View>

              <View style={{flex:3,justifyContent: "center",alignItems: "center"}}>
                <Title>&nbsp; MAILING ADDRESS {"\n"} 2748 Ganges PI, Davis, CA 95616</Title>
                <Title>&nbsp; EMAIL Support {"\n"} @AlterLearning.com</Title>
                <Title>&nbsp; PHONE {"\n"} (530)601-8275</Title>
                <Title>&nbsp; INSTAGRAM {"\n"}@AlterLearning</Title>
                <Title>&nbsp; FACEBOOK {"\n"}@AlterLearning</Title>
                <Title>&nbsp; LINKEDIN {"\n"}@AlterLearning</Title>
                <Title>&nbsp; TWITTER {"\n"}@AlterLearning</Title>
                <Title>&nbsp; FAQ Frequently Asked Questions</Title>
              </View>
                     
            </View>
            </Card>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer:{
    marginVertical: 20
  },
  InnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  ImageContainer:{
    width: "100%",
    height: "100%",
    aspectRatio: 1
  },
  ListGroup: {
    flex: 1,
    justifyContent: "flex-start"
  },
  CardBody: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
    marginHorizontal: 15
  },
  Header: {
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: 'center'
  },
  ProfileCard:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  ProfileImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginVertical: 10
  }
})

export default RightCounter