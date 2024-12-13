// Import necessary modules and components
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../../../firebasedb/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

// Rename the component to reflect its purpose
const ReportRecipeScreen = () => {
  // State variables for the inputs
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipeChanges, setRecipeChanges] = useState(''); // Updated variable name

  // Access navigation object
  const navigation = useNavigation();

  // Function to report the recipe
  const reportRecipeToFirestore = async () => {
    const recipeData = {
      recipeName,
      ingredients,
      recipeChanges, // Updated variable name
    };

    try {
      // Add the recipe data to Firestore
      await addDoc(collection(db, 'reportedRecipes'), recipeData);
      console.log('Recipe reported to Firestore!');

      // Reset the form after successful submission (if needed)
      setRecipeName('');
      setIngredients('');
      setRecipeChanges(''); // Updated variable name

      // Optionally, navigate to a confirmation screen or go back to the previous screen
      // (Adjust the navigation logic based on your application flow)
    } catch (error) {
      console.error('Error reporting recipe to Firestore:', error);
      // Handle the error (e.g., show an error message)
    }
  };

  // Render the component
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Recipe Name:</Text>
      <TextInput
        style={styles.input}
        value={recipeName}
        onChangeText={(text) => setRecipeName(text)}
      />

      <Text style={styles.label}>Ingredients:</Text>
      <TextInput
        style={styles.input}
        value={ingredients}
        onChangeText={(text) => setIngredients(text)}
      />

      {/* Update the label to "Recipe Changes" */}
      <Text style={styles.label}>Recipe Changes:</Text>
      <TextInput
        style={styles.input}
        value={recipeChanges}
        onChangeText={(text) => setRecipeChanges(text)}
      />

      {/* Update the button text to "Report Recipe" */}
      <Button title="Report Recipe" onPress={reportRecipeToFirestore} />
    </View>
  );
};

// Styles
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

// Export the component
export default ReportRecipeScreen;
