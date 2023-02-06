/*
  '0;0':[
    {
      name: 'frank',
      place: 'Pizza',
      feed: 'Ok, pizza !',
      coords: [0,0]
    }
  ],
  '1;2':[
    {
      name: 'john',
      place: 'barbershop',
      feed: 'good shop !',
      coords: [1,2]
    },
    {
      name: 'albert',
      place: 'barbershop',
      feed: 'bad shop!',
      coords: [1,2]
    }
  ]
*/
const GLOBALKEY = "MyPlaceMarkStorage";

class Storage {
  constructor(db = localStorage) {
    this.db = db;
    this.init();
  }
  init = () => {
    if (localStorage) {
      if (!localStorage.key(GLOBALKEY)) {
        localStorage.setItem(GLOBALKEY, JSON.stringify([]));
      }
    } else {
      return new Error("LocalStorage error");
    }
  };

  create = (data) => {
    let storage = JSON.parse(localStorage.getItem(GLOBALKEY));
    storage.push(data);
    localStorage.setItem(GLOBALKEY, JSON.stringify(storage));
  };
  read = (key) => {
    let storage = JSON.parse(localStorage.getItem(GLOBALKEY));

    return storage.filter((item) => {
      return item.coords.join(";") === key.join(";");
    });
  };
  readAll = () => {
    return JSON.parse(localStorage.getItem(GLOBALKEY));
  };
}

export default new Storage();
