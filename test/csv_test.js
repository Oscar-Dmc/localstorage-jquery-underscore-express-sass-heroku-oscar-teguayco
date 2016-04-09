var expect = chai.expect

describe("CSV", function() {
  describe("Función calculate()", function() {
    it ("Debería capturar números no entrecomillados", function() {
      var input = '1, 2, 3';
      var r = calculate(input);
      expect(r[0].value[0]).to.equal('1');
      expect(r[0].value[1]).to.equal('2');
      expect(r[0].value[2]).to.equal('3');
    });
    it ("Debería capturar números entrecomillados", function() {
      var input = '"1", "2", "3"';
      var r = calculate(input);
      expect(r[0].value[0]).to.equal("1");
      expect(r[0].value[1]).to.equal("2");
      expect(r[0].value[2]).to.equal("3");
    });
    it ("Debería capturar elementos no entrecomillados", function() {
      var input = 'hola, hello, salut, hallo'
      var r = calculate(input);
      expect(r[0].value[0]).to.equal("hola");
      expect(r[0].value[1]).to.equal("hello");
      expect(r[0].value[2]).to.equal("salut");
      expect(r[0].value[3]).to.equal("hallo");
    });
    it("Debería capturar los elementos entrecomillados", function() {
      var input = '"hola", "hello", "salut", "hallo"';
      var r = calculate(input);
      expect(r[0].value[0]).to.equal("hola");
      expect(r[0].value[1]).to.equal("hello");
      expect(r[0].value[2]).to.equal("salut");
      expect(r[0].value[3]).to.equal("hallo");
    });
    it ("Debería capturar cadenas vacías", function() {
      var input = '"hola", ""'
      var r = calculate(input);
      expect(r[0].value[0]).to.equal("hola");
      expect(r[0].value[1]).to.equal("");
    });
    it ("Debería capturar números con cifras decimales", function() {
      var input = '9.375, "euros"';
      var r = calculate(input);
      expect(r[0].value[0]).to.equal("9.375");
      expect(r[0].value[1]).to.equal("euros");
    });
  });
});