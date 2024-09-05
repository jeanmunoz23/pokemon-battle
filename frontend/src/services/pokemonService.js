import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL_BASE || "http://localhost:3004/api";

export const getPokemons = async () => {
  const response = await axios.get(`${API_URL}/pokemons`);
  return response.data;
};

export const battlePokemons = async (pokemon1Id, pokemon2Id) => {
  try {
    const response = await axios.post(
      `${API_URL}/pokemons/battle/${pokemon1Id}/${pokemon2Id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error during battle:", error);
    throw error;
  }
};

export const resetPokemons = async () => {
  try {
    await axios.post(`${API_URL}/pokemons/reset`);
    console.log("Database reset successful");
    return true;
  } catch (error) {
    console.error("Error resetting database:", error);
    return false;
  }
};
