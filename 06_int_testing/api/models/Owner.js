const db = require('../dbConfig/init');
const Dog = require("./dog")

class Owner {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.address = data.address
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let ownerData = await db.query(
          `SELECT * FROM owners WHERE id = $1;`, [id]);
        let owner = new Owner(ownerData.rows[0]);
        resolve(owner);
      } catch (err) {
        reject('Owner not found');
      }
    });
  }

  get dogs() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.query(
          'SELECT * FROM dogs WHERE owner_id = $1', [this.id]);
        const dogs = result.rows.map(d => (new Dog(d)));
        resolve(dogs);
      } catch (err) {
        reject("Owners's dogs could not be found");
      };
    });
  };

}

module.exports = Owner;
