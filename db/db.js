import mysql from "mysql2";

class DB {
  constructor({ host, user, password, database }) {
    this.pool = mysql.createPool({
      host,
      user,
      password,
      database,
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10,
      idleTimeout: 60000,
      queueLimit: 0,
    });
    this.promisePool = this.pool.promise();
  }

  async getHumidityData() {
    const sql = `SELECT * FROM Humidity;`;
    const [rows] = await this.promisePool.query(sql, []);
    return rows;
  }
}

export default DB;
