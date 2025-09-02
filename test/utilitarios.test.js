const Utilitarios = require("../src/utilitarios");

describe("Testes da classe Utilitarios", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  test("inverterString deve inverter a string corretamente", () => {
    expect(utilitarios.inverterString("hello")).toBe("olleh");
  });

  test("contarCaracteres deve retornar o número correto de caracteres", () => {
    expect(utilitarios.contarCaracteres("hello")).toBe(5);
  });

  test("paraMaiusculas deve converter a string para maiúsculas", () => {
    expect(utilitarios.paraMaiusculas("hello")).toBe("HELLO");
  });

  test("paraMinusculas deve converter a string para minúsculas", () => {
    expect(utilitarios.paraMinusculas("HELLO")).toBe("hello");
  });

  test("primeiraLetraMaiuscula deve capitalizar a primeira letra", () => {
    expect(utilitarios.primeiraLetraMaiuscula("hello")).toBe("Hello");
  });

  test("somar deve retornar a soma de dois números", () => {
    expect(utilitarios.somar(2, 3)).toBe(5);
  });

  test("subtrair deve retornar a diferença de dois números", () => {
    expect(utilitarios.subtrair(5, 2)).toBe(3);
  });

  test("multiplicar deve retornar o produto de dois números", () => {
    expect(utilitarios.multiplicar(2, 3)).toBe(6);
  });

  test("dividir deve retornar o quociente de dois números", () => {
    expect(utilitarios.dividir(6, 3)).toBe(2);
  });

  test("dividir deve lançar um erro ao dividir por zero", () => {
    expect(() => utilitarios.dividir(6, 0)).toThrow("Divisão por zero");
  });

  test("ehPar deve retornar true para números pares", () => {
    expect(utilitarios.ehPar(4)).toBe(true);
  });

  test("ehPar deve retornar false para números ímpares", () => {
    expect(utilitarios.ehPar(3)).toBe(false);
  });

  test("primeiroElemento deve retornar o primeiro elemento de um array", () => {
    expect(utilitarios.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test("ultimoElemento deve retornar o último elemento de um array", () => {
    expect(utilitarios.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test("tamanhoArray deve retornar o tamanho de um array", () => {
    expect(utilitarios.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test("ordenarArray deve ordenar um array", () => {
    expect(utilitarios.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("inverterArray deve inverter um array", () => {
    expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("gerarNumeroAleatorio deve gerar um número aleatório dentro do limite", () => {
    const num = utilitarios.gerarNumeroAleatorio(10);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(10);
  });

  test("ehNumero deve retornar true para números", () => {
    expect(utilitarios.ehNumero(123)).toBe(true);
    expect(utilitarios.ehNumero(NaN)).toBe(false);
  });

  test("removerEspacos deve remover espaços em branco do início e fim da string", () => {
    expect(utilitarios.removerEspacos("  hello world  ")).toBe("hello world");
  });

  test("repetirTexto deve repetir o texto o número de vezes correto", () => {
    expect(utilitarios.repetirTexto("abc", 3)).toBe("abcabcabc");
  });

  test("juntarArray deve juntar os elementos de um array com um separador", () => {
    expect(utilitarios.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
  });

  test("contarPalavras deve contar o número de palavras em uma string", () => {
    expect(utilitarios.contarPalavras("hello world")).toBe(2);
  });

  test("mediaArray deve calcular a média de um array de números", () => {
    expect(utilitarios.mediaArray([1, 2, 3])).toBe(2);
  });

  test("removerDuplicados deve remover elementos duplicados de um array", () => {
    expect(utilitarios.removerDuplicados([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test("ehPalindromo deve retornar true para palíndromos", () => {
    expect(utilitarios.ehPalindromo("arara")).toBe(true);
    expect(utilitarios.ehPalindromo("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("ehPalindromo deve retornar false para não palíndromos", () => {
    expect(utilitarios.ehPalindromo("hello")).toBe(false);
  });

  test("mesclarObjetos deve mesclar dois objetos corretamente", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});
