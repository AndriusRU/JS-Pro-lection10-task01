// TODO: write your code here
import GameSaving from "./class/game-saving";
import GameSavingLoader from "./class/game-saving-loader";

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  const data = new GameSaving(JSON.parse(saving));
  return data;
}, (error) => {
  // ...
  console.log(error);
});