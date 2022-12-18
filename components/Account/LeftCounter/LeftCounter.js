import React from 'react';
// import { Card, CardHeader, ListGroup, ListGroupItem  } from 'reactstrap';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper'

const LeftCounter = () => {
  return (
    <View style={styles.MainContainer}>

        {/* 1 */}
        <View style={styles.InnerContainer}>
            <View>
                <Text style={styles.Header}>MANAGE ACOOUNT</Text>
                <View style={styles.ListGroup}>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
            </View>
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
        marginVertical: 10
      }
    
    
    
})

export default LeftCounter

