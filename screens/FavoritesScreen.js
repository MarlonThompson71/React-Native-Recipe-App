import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import Video from "react-native-video";

const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.recipes.favorites);

  if (!favorites || favorites.length === 0) {
    return <Text>No favorites added yet</Text>;
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: "black",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "orange",
        }}
      >
        Favorites
      </Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text
              style={{
                textDecorationLine: "underline",
                fontFamily: "AmericanTypewriter-Bold",
                color: "black",
                borderStyle: "solid",
                borderColor: "white",
                borderWidth: 3,
              }}
            >
              {item.name}
            </Text>
            {/* <Image
              style={{
                width: 300,
                height: 200,
              }}
              source={{ uri: `${item.thumbnail_url}` }}
            /> */}

            {/* <Video
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              source={{ uri: `${item.video_url}` }} // Can be a URL or a local file.
            /> */}
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
