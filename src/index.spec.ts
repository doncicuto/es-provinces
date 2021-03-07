import provinces from ".";

describe("provinces array", () => {
  it("contain all Spain's provinces", () => {
    expect(provinces.length).toBe(52);
  });

  it("check for province code duplicates", () => {
    const seen = new Set();
    const hasDuplicates = provinces.some((currentObject) => {
      return seen.size === seen.add(currentObject.code).size;
    });
    expect(hasDuplicates).toBe(false);
  });

  it("check for province name duplicates", () => {
    const seen = new Set();
    const hasDuplicates = provinces.some((currentObject) => {
      return seen.size === seen.add(currentObject.name).size;
    });
    expect(hasDuplicates).toBe(false);
  });

  it("check for province codes sum equal to 1378", () => {
    const provinceCodes = provinces.map((p) => parseInt(p.code, 10));
    const sum = provinceCodes.reduce((a, b) => a + b);
    expect(sum).toBe(1378);
  });

  it("check Valladolid object", () => {
    expect(provinces[23]).toStrictEqual({
      code: "47",
      name: "Valladolid",
      commCode: "07",
      commName: "Castilla y León",
    });
  });

  it("check Alicante/Alacant object", () => {
    expect(provinces[34]).toStrictEqual({
      code: "03",
      name: "Alicante/Alacant",
      commCode: "10",
      commName: "Comunitat Valenciana",
    });
  });

  it("check Melilla object", () => {
    expect(provinces[51]).toStrictEqual({
      code: "52",
      name: "Melilla",
      commCode: "19",
      commName: "Ciudad Autónoma de Melilla",
    });
  });
});
