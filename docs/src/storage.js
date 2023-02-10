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
    storage.push({
      name: data.name,
      place: data.place,
      feed: data.feed,
      key: data.key,
    });
    localStorage.setItem(GLOBALKEY, JSON.stringify(storage));
  };

  selectByKey = (key) => {
    return this.selectAll().get(key);
  };

  selectAll = () => {
    let storage = JSON.parse(localStorage.getItem(GLOBALKEY));
    let sortedStorage = new Map();

    for (const feed of storage) {
      if (sortedStorage.get(feed.key)) {
        sortedStorage.get(feed.key).push(feed);
      } else {
        sortedStorage.set(feed.key, [feed]);
      }
    }

    return sortedStorage;
  };
}
