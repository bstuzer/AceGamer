'use strict';
/* Data Access Object (DAO) module for accessing courses and exams */

const sqlite = require('sqlite3');
const si = require('systeminformation');

// let myCpu = si.cpu();
// myCpu.then(data => {
//   console.log('brand: ' + data.brand.split(" ")[3]);
// });

// open the database
const db = new sqlite.Database('db.sqlite', (err) => {
  if (err) throw err;
});


exports.listMyComponents = () => {
  return new Promise((resolve, reject) => {

    // let myCpu = si.cpu();
    const sql = 'SELECT * FROM Cpu WHERE model = ?';
    //si.cpu().then(data=>console.log(data.brand.split(" ")[3]));
    //myCpu.then(data=>console.log(data.brand.split(" ")[3]));
    db.get(sql, [si.cpu().then(data => data.brand.split(" ")[3])], (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      if (row === undefined) {
        resolve({ error: 'Cpu model not found!' });
      } else {
        const result = { cpuRating: row.cpu.rating };
        resolve(result);
      }

    });
  })
}

// get all cpu
exports.listCPU = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Cpu';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, rating: e.rating, freq: e.freq, socket: e.socket, price: e.price, link: e.link, reliability: e.reliability }));
      resolve(result);
    });
  });
};

// get all gpu
exports.listGPU = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Gpu';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, rating: e.rating, mem: e.mem, freq: e.freq, price: e.price, link: e.link, reliability: e.reliability }));
      resolve(result);
    });
  });
};

// get all hdd
exports.listHdd = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Hdd';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, size: e.size, rating: e.rating, price: e.price, link: e.link, reliability: e.reliability }));
      resolve(result);
    });
  });
};

// get all mb
exports.listMb = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Mb';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, socket: e.socket, ram: e.ram, rating: e.rating, price: e.price, link: e.link }));
      resolve(result);
    });
  });
};

// get all ram
exports.listRam = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Ram';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const result = rows.map((e) => ({ id: e.id, brand: e.brand, model: e.model, rating: e.rating, type: e.type, size: e.size, mem: e.mem, freq: e.freq, format: e.format, price: e.price, link: e.link, reliability: e.reliability }));
      resolve(result);
    });
  });
};

// get all games
exports.listGameNames = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT name FROM Games';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const result = rows.map((e) => ({ name: e.name }));
      resolve(result);
    });
  });
};

exports.getGame = (name) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM Games WHERE name = ?";
    db.get(sql, [name], (err, row) => {
      if (err) {
        reject(err);
        return;
      }
      if (row === undefined) {
        resolve({ error: 'Game not found!' });
      } else {
        const result = { name: row.name, cpu: row.cpu, gpu: row.gpu, hdd: row.hdd, ram: row.ram, opt: row.opt };
        resolve(result);
      }
    });
  });
};
