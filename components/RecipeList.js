import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Video from "react-native-video";
import * as Animatable from "react-native-animatable";
const RecipeList = ({ recipes, onAddToFavorites, navigation }) => {
  if (!recipes || recipes.length === 0) {
    return <Text style={styles.noRecipesText}>No recipes available</Text>;
  }

  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id.toString()} // Use the 'id' property as the key
      renderItem={({ item }) => (
        <View style={styles.recipeContainer}>
          <TouchableOpacity
            style={{
              borderStyle: "solid",
              borderWidth: 8,
              borderRadius: 20,
              backgroundColor: "white",
            }}
          >
            <Animatable.Text
              animation="zoomInUp"
              iterationCount={1}
              direction="alternate"
              style={styles.recipeTitle}
            >
              {item.name}
            </Animatable.Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 300,
                  height: 200,
                }}
                source={{ uri: `${item.thumbnail_url}` }}
              />
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "white",
                  borderStyle: "solid",
                  borderColor: "white",
                  borderWidth: 3,
                }}
              >
                {item.yields} --- Cook time: {item.cook_time_minutes} min
              </Text>
            </View>
            {/* <Video
              source={{ uri: `${item.original_video_url}` }} // Can be a URL or a local file.
              resizeMode={"cover"}
            /> */}
            <Text style={styles.recipeDescription}>{item.description}</Text>
            <TouchableOpacity
              style={styles.favBtn}
              title="Add to Favorites"
              onPress={() => onAddToFavorites(item)}
            >
              <Text style={styles.favText}>🚀Add To Favorites </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favBtn}
              title="View Recipe Details"
              onPress={() =>
                navigation.navigate("RecipeDetail", { recipeId: item.id })
              }
            >
              <Text style={styles.favText}>View Recipe Details</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  noRecipesText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
  recipeContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    margin: 8,
    borderRadius: 8,
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  recipeTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  recipeDescription: {
    fontSize: 16,
    marginTop: 8,
    color: "black",
  },

  favBtn: {
    borderRadius: 75,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    color: "white",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  favText: {
    fontSize: 26,
    color: "black",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "orange",
  },
});

export default RecipeList;
