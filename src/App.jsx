import { useState, useEffect } from "react";
import axios from "axios";
import ImageDisplay from "./components/ImageDisplay";

const App = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchRandomPokemon = async () => {
    try {
      setLoading(true);
      const randomId = Math.floor(Math.random() * 898) + 1;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      const pokemonImage = response.data.sprites.front_default;
      setImage(pokemonImage);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Pokémon Aleatorio</h1>
      <ImageDisplay image={image} loading={loading} />
      <button onClick={fetchRandomPokemon}>Cambiar Pokémon</button>
    </div>
  );
};

export default App;
