import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState("⏰");
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState<string[]>([]);

  const handleClock = () => {
    queueRerenderWithNewCounterValue("⏰");
  };

  const handleFriedEgg = () => {
    queueRerenderWithNewCounterValue("🍳");
  };

  const handlePlate = () => {
    queueRerenderWithNewCounterValue("🍽️");
  };

  const handleYummyFace = () => {
    queueRerenderWithNewCounterValue("😋");
  };

  const handleRamen = () => {
    queueRerenderWithNewCounterValue("🍜");
  };

  const handleStoreFavouriteEmoji = () => {
    queueRerenderWithNewFavouriteValue((prevStoredValues) => [
      ...prevStoredValues,
      counterValueFromCurrentRender,
    ]);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your favourite emoji: {favouriteValueFromCurrentRender}</p>
      <p>Current emoji: {counterValueFromCurrentRender}</p>
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
