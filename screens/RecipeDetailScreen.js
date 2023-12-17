import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Video } from "react-native";

import axios from "axios";

const RecipeDetailScreen = ({ route }) => {
  const { recipeId } = route.params;
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
        params: { id: recipeId },
        headers: {
          "X-RapidAPI-Key":
            "4f35fb6d36mshaa30790d591f29bp172627jsn3e24d6f69bd3",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setRecipeData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [recipeId]);

  if (!recipeData) {
    return <Text>LOADING...</Text>;
  }

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          {recipeData.name}
        </Text>
        <Text style={{ fontSize: 18, marginBottom: 20, textAlign: "center" }}>
          {recipeData.description}
        </Text>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Nutrition Info:
          </Text>
          <Text>
            Calories: {recipeData.nutrition && recipeData.nutrition.calories}
          </Text>
          <Text>
            Protein: {recipeData.nutrition && recipeData.nutrition.protein}
          </Text>
          <Text>Fat: {recipeData.nutrition && recipeData.nutrition.fat}</Text>
          <Text>
            Sugar: {recipeData.nutrition && recipeData.nutrition.sugar}
          </Text>
          <Text>
            Carbohydrates:{" "}
            {recipeData.nutrition && recipeData.nutrition.carbohydrates}
          </Text>
          <Text>
            Fiber: {recipeData.nutrition && recipeData.nutrition.fiber}
          </Text>
        </View>
        {/* <Video
          source={{ uri: `${recipeData.video_url}` }} // Can be a URL or a local file.
          resizeMode={"cover"}
        /> */}
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
