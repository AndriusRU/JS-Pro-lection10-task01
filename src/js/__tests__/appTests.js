import GameSavingLoader from "../class/game-saving-loader";

test('test good - return string', async () => {
  const gslPerson = await GameSavingLoader.load();
  const correctGLSPerson = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  expect(gslPerson).toBe(correctGLSPerson);
});
