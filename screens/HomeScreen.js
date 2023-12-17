import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RecipeList from "../components/RecipeList";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../actions/recipeActions";
import ProgressBar from "react-native-animated-progress";

const HomeScreen = ({ navigation }) => {
  const onPressSignUp = () => {
    // Do something about signup operation
    navigation.navigate("Favorites");
  };

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "4f35fb6d36mshaa30790d591f29bp172627jsn3e24d6f69bd3",
              "X-RapidAPI-Host": "tasty.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();
        setRecipes(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching recipes");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToFavorites = (recipe) => {
    console.log("Adding to favorites:", recipe.name);
    Alert.alert(`Adding ${recipe.name} To Favorites`, ``, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
    // Do something about login operation

    dispatch(addToFavorites(recipe));
  };

  if (loading) {
    return (
      <View style={{ alignContent: "center" }}>
        <Text>LOADING...</Text>
        <ProgressBar
          progress={98}
          height={25}
          backgroundColor="orange"
        ></ProgressBar>
      </View>
    );
  }

  if (error) {
    return <Text>{error}</Text>;
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
        Recipes App
      </Text>
      <TouchableOpacity onPress={onPressSignUp} style={styles.loginBtn}>
        <Text style={styles.signupText}>Favorites List</Text>
      </TouchableOpacity>

      <RecipeList
        recipes={recipes}
        onAddToFavorites={handleAddToFavorites}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    width: "50%",
    backgroundColor: "orange",

    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signupText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
});

export default HomeScreen;
