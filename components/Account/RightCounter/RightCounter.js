import React from 'react';
// import { Card, CardHeader, CardImg,ListGroup, ListGroupItem } from 'reactstrap';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, List } from 'react-native-paper'

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

        {/* 2 */}
        <View>
            <Card style={styles.CardBody} >
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
            
        {/* 3 */}
        <View>
        <Card style={styles.CardBody} >
              <List.Section style={styles.Header}>
                <List.Accordion
                style={styles.ListGroup}
                title="MY STUFF"
                left={props => <List.Icon {...props} icon="equal" />}>
                  <List.Item title="MY BOOKMARKS" />
                  <List.Item title="MY PICTURES" />
                  <List.Item title="MY VIDEOS" />
                  <List.Item title="MY BLOGS" />
                  <List.Item title="MY WIRES" />
                  <List.Item title="MY COMMENTS" />
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