import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Title, List } from 'react-native-paper';




const LeftCounter = () => {
  return (
    <View style={styles.MainContainer}>

                {/* 1 */}
                <View style={styles.InnerContainer}>
                    <View>
                        <Title style={styles.Header}>MARKET</Title>
                        <View>
                            <Image style={{width: "100%", height: 200, aspectRatio: 1}} source={require("../../../assets/widget2.jpeg")}/>
                        </View>
                    </View>
                </View>

                {/* 2 */}
                <View>
                    <Card style={styles.CardBody}>
                      <List.Section style={styles.Header}>
                        <List.Accordion
                          style={styles.ListGroup}
                          title="VR Stem: A Celestial Journey"
                          left={props => <List.Icon {...props} icon="equal" />}>
                          <List.Item title="VR Stem: A Celestial Journey" />
                          <List.Item title="VR| Adeventure | Released on 06.22.21" />
                          <List.Item title="GENE-X Evolutions" />
                          <List.Item title="VR| Action | Puzzle | Released on 06.15.21" />
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
      ImageContainer:{
        width: "100%",
        height: "undefined",
        aspectRatio: 1
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
        marginVertical: 10,
        textAlign: 'center'
      }
})

export default LeftCounter