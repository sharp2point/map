class Storage {
  constructor(db = localStorage) {
    this.db = db;
  }
  create = (data) => {
    const dt = JSON.stringify(data.data);
    console.log(dt);
    this.db.setItem(data.key, dt);
  };
  read = (key) => {
    return {
      key: this.db.getItem(key),
      length: this.db.length,
    };
  };
}

export default new Storage();
