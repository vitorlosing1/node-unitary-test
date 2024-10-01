const request = require("supertest");
const app = require("./server");

describe("Suite de testes das operações matemáticas", () => {
  test("Deve retornar a soma sendo 10", async () => {
    const response = await request(app).get("/add?num1=3&num2=7");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Resultado da adição: 10");
  });

  test("Deve retornar a subtração sendo 5", async () => {
    const response = await request(app).get("/subtract?num1=10&num2=5");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Resultado da subtração: 5");
  });
});
