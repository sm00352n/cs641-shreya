import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipeTime, setRecipeTime] = useState('');

  const handleSubmission = () => {
    // Handle the submission logic here
    console.log('Recipe Name:', recipeName);
    console.log('Ingredients:', ingredients);
    console.log('Recipe Time:', recipeTime);

    // You can perform further actions like sending the data to a server, etc.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Recipe Name:</Text>
      <TextInput
        style={styles.input}
        value={recipeName}
        onChangeText={text => setRecipeName(text)}
      />

      <Text style={styles.label}>Ingredients:</Text>
      <TextInput
        style={styles.input}
        value={ingredients}
        onChangeText={text => setIngredients(text)}
      />

      <Text style={styles.label}>Recipe Time:</Text>
      <TextInput
        style={styles.input}
        value={recipeTime}
        onChangeText={text => setRecipeTime(text)}
      />

      <Button title="Submit" onPress={handleSubmission} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default RecipeForm;
