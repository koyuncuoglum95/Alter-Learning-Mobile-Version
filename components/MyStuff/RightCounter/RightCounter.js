import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card, Title, List } from 'react-native-paper';

const RightCounter = () => {
  return (
    <View style={styles.MainContainer}>
      
      <Card style={[styles.CardBody]}>
        <Title style={styles.Header}>MY PROFILE</Title>
        <View style={styles.ProfileCard}>
          <View>
            <Card.Cover style={{width: "100%", height: 200, aspectRatio: 1}} source={require("../../../assets/widget2.jpeg")}/>
          </View>
            <View style={styles.CardImage}>
              <Card.Cover style={styles.ProfileImage} source={require("../../../assets/v443_23123.png")}/>
            </View>
          </View>
        <View>
          <Title style={{textAlign: 'center'}}>WELCOME BACK, NOAH!</Title>
          <Title></Title>
        </View>
      </Card>

      <View >
        <Card style={styles.CardBody}>
          <Title style={styles.Header}>CLASSROOMS</Title>
          <View></View>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>FRIENDS LIST</Text>
          <View></View>
        </Card>
      </View>

      <View >
        <Card style={styles.CardBody}>
          <List.Section style={styles.Header}>
                <List.Accordion
                style={styles.ListGroup}
                title="MESSAGES"
                left={props => <List.Icon {...props} icon="equal" />}>
                  <List.Item title="Austin W." />
                  <List.Item title="Ruby N." />
                  <List.Item title="Jayden H." />
                </List.Accordion>
              </List.Section>
        </Card>
      </View>

      <View >
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>CLASSROOMS</Text>
          <View></View>
        </Card>
      </View>

      {/* 3 */}
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
    height: "undefined",
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