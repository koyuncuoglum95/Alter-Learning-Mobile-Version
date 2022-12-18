import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Title, List } from 'react-native-paper';

const LeftCounter = () => {
  return (
    <View style={styles.MainContainer}>

      <View style={styles.InnerContainer}>
        <View>
          <List.Section style={styles.Header}>
                <List.Accordion
                style={styles.ListGroup}
                title="FRIEND REQUESTS"
                left={props => <List.Icon {...props} icon="equal" />}>
                  <List.Item title="Friend Requests lists" />
                </List.Accordion>
              </List.Section>
        </View>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <Text style={styles.Header}>MESSAGES</Text>
          <View></View>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  Header: {
    fontWeight: "bold",
    marginVertical: 10
  },
  ListGroup: {
    flex: 1,
    justifyContent: "flex-start",
  }
})

export default LeftCounter