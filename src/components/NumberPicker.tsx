import { join } from "path";
import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counter, setCounter] =
    useState("⏰");
  const [favourite, setFavourite] =
    useState<string[]>([]);

  const handleClock = () => {
    setCounter("⏰");
  };

  const handleFriedEgg = () => {
    setCounter("🍳");
  };

  const handlePlate = () => {
    setCounter("🍽️");
  };

  const handleYummyFace = () => {
    setCounter("😋");
  };

  const handleRamen = () => {
    setCounter("🍜");
  };

  const handleStoreFavouriteEmoji = () => {
    setFavourite([
      ...favourite,
      counter,
    ]);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your favourite emoji: {favourite.map((handleStoreFavouriteEmoji, index) => (
        <li key = {index}>{handleStoreFavouriteEmoji}</li>
      )
      )}</p>
      <p>Current emoji: {counter}</p>
      <button onClick={handleClock}>⏰</button>
      <button onClick={handleFriedEgg}>🍳</button>
      <button onClick={handlePlate}>🍽️</button>
      <button onClick={handleYummyFace}>😋</button>
      <button onClick={handleRamen}>🍜</button>
      <hr />
      <button onClick={handleStoreFavouriteEmoji}>
        Store as my Favourite Emoji
      </button>
    </>
  );
}
