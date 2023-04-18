import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server.");
});

const createTableSql = `CREATE TABLE Humidity (
    id INT PRIMARY KEY AUTO_INCREMENT,
    value DECIMAL(5,2) NOT NULL,
    measured_at DATETIME NOT NULL
  )`;

connection.query(createTableSql, (err, result) => {
  if (err) throw err;
  console.log("Humidity table created.");
});

const insertDataSql = `INSERT INTO Humidity (value, measured_at)
  VALUES
    (40.5, '2023-04-13 10:00:00'),
    (41.2, '2023-04-13 11:00:00'),
    (35.8, '2023-04-13 12:00:00'),
    (36.1, '2023-04-13 13:00:00'),
    (37.3, '2023-04-13 14:00:00')`;

connection.query(insertDataSql, (err, result) => {
  if (err) throw err;
  console.log("Data inserted into Humidity table.");
});

connection.end((err) => {
  if (err) throw err;
  console.log("Disconnected from MySQL server.");
});
