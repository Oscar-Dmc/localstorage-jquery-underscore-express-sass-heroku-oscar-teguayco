var expect = chai.expect;

describe("CSV", function() {
  describe("Se aceptan entradas válidas", function() {
    it("Debería capturar los elementos entrecomillados", function() {
      var input = '"hola", "hello", "salut", "hallo"';
      var r = calculate(input);
      expect(r[0].value[0]).to.equal("hola");
    });
  });
});