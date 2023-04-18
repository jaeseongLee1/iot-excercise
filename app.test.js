import DB from "./db/db.js";

describe("DB", () => {
  let db;

  beforeAll(() => {
    db = new DB({
      host: "localhost",
      user: "root",
      password: "",
      database: "test_db",
    });
  });

  afterAll(async () => {
    await db.promisePool.end();
  });

  test("getHumidityData should return an array", async () => {
    const result = await db.getHumidityData();
    console.log(result);
    expect(Array.isArray(result)).toBe(true);
  });
});
