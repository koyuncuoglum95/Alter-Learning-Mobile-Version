import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card, Title, List } from 'react-native-paper';

const LeftCounter = () => {
  return (
    <View style={styles.MainContainer}>
      
      <View style={styles.InnerContainer}>
        <View>
          <Title style={styles.Header}>FRIEND REQUESTS</Title>
        </View>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>FINDER</Text>
          <View></View>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>MY SCHOOL</Text>
          <View>
            <View>
              <Card.Cover style={styles.ImageContainer} source={require("../../../assets/v443_23035.png")}/>
            </View>
            <View>
              <View style={styles.ListGroup}>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
          </View>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <List.Section style={styles.Header}>
                <List.Accordion
                style={styles.ListGroup}
                title="MY FRIENDS"
                left={props => <List.Icon {...props} icon="equal" />}>
                  <List.Item title="FRIENDS LIST (63)" />
                  <List.Item title="Ruby N." />
                  <List.Item title="Jayden H." />
                </List.Accordion>
              </List.Section>
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
  ListGroup: {
    flex: 1,
    justifyContent: "flex-start",
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
    marginVertical: 10
  }
})

export default LeftCounter