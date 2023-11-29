import json from '../parser';
import read from '../reader';

export default class GameSavingLoader {
  static load() {
    const prom = new Promise((resolve) => {
      read()
      .then((buffer) => {
        
        json(buffer)
        .then((data) => {
          resolve(data);
        });

      });
    });

    //const data = read(); // возвращается Promise!
    //const value = json(data); // возвращается Promise!
    return prom;
  }
}