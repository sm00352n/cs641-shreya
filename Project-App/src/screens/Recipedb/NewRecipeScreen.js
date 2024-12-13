import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {db} from '../../../firebasedb/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const NewRecipeScreen = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipeTime, setRecipeTime] = useState('');

  const navigation = useNavigation();

  const addRecipeToFirestore = async () => {
    const recipeData = {
      recipeName,
      ingredients,
      recipeTime,
    };

    try {
      // Add the recipe data to Firestore
      await addDoc(collection(db, 'recipes'), recipeData);
      console.log('Recipe added to Firestore!');

      // Navigate to the "Home" screen after successful submission
      navigation.navigate('Home');

      // Reset the form
      setRecipeName('');
      setIngredients('');
      setRecipeTime('');
    } catch (error) {
      console.error('Error adding recipe to Firestore:', error);
      navigation.navigate('Home');
    }
  };

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

      <Text style={styles.label}>Recipe Time:</Text>
      <TextInput
        style={styles.input}
        value={recipeTime}
        onChangeText={(text) => setRecipeTime(text)}
      />

      <Button title="Submit" onPress={addRecipeToFirestore} />
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

export default NewRecipeScreen;