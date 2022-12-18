import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Card, Text, List, Title } from 'react-native-paper'

const LeftCounter = () => {
  return (
    <View style={styles.MainContainer}>
      
      <View style={styles.InnerContainer}>
        <Title style={styles.Header}>MARKET</Title>
        <View>
          <Image style={{height: '130%', width: '130%', marginLeft: -40}} resizeMode="contain" source={require("../../../assets/v443_23035.png")}/>
        </View>
      </View>

      <View>
        <Card style={styles.CardBody}>
            <Text style={styles.Header}>FEATURED GAME</Text>
            <View>
              <Card.Cover style={styles.ImageContainer} source={require("../../../assets/v443_23035.png")}/>
            </View>
            <Text>VR Stem: A Celestial Journey {"\n"}VR| Adeventure | Released on 06.22.21</Text>
        </Card>
        <Card style={styles.CardBody}>
            <Text style={styles.Header}>FEATURED GAME</Text>
            <View>
              <Card.Cover style={styles.ImageContainer} resizeMode="contain" source={require("../../../assets/v443_23018.png")}/>
            </View>
            <Text>GENE-X Evolutions {"\n"}VR| Action | Puzzle | Released on 06.15.21</Text>
        </Card>
      </View>

      <View>
        <Card style={styles.CardBody}>
          <List.Section style={styles.Header}>
              <List.Accordion
              style={styles.ListGroup}
              title="GAME MARKETPLACE"
              left={props => <List.Icon {...props} icon="equal" />}>
                <List.Item title="VR Stem: A Celestial Journey <br/>VR| Adeventure | Released on 06.22.21" />
                <List.Item title="GENE-X Evolutions <br/>VR| Action | Puzzle | Released on 06.15.21" />
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