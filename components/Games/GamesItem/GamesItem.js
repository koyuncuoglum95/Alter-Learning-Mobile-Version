import { View, Image, Linking, TouchableOpacity } from "react-native";


const GamesItem = ({ title, image, game_link }) => {

  return (
    <TouchableOpacity onPress={() => Linking.openURL(game_link)}>
      <View>
          <Image
          source={image}
          resizeMode='contain'
          style={{ width: 180, height: 130, flex: 1 }}
          />
      </View>
      </TouchableOpacity>

  )
}

export default GamesItem