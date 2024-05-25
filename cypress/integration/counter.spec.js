describe("ui-counter", () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit("http://localhost:5500/");
  });

  it("생성시 버튼과 초기값(10)을 렌더링 한다.", () => {
    // - 버튼 렌더링
    cy.get(".minus-button").should("have.text", "-");

    // + 버튼 렌더링
    cy.get(".plus-button").should("have.text", "+");

    // 초기값 10 렌더링
    cy.get(".count-display").should("have.value", "10");
  });

  it("+ 버튼을 클릭 시 count가 1증가한다.", () => {
    // 클릭 전 초기값
    cy.get(".count-display").should("have.value", 10);

    // + 버튼 클릭
    cy.get(".plus-button").click();

    // 클릭 후 증가한 값
    cy.get(".count-display").should("have.value", 11);
  });

  it("- 버튼을 클릭 시 count가 1감소한다.", () => {
    // 클릭 전 초기값
    cy.get(".count-display").should("have.value", 10);

    // + 버튼 클릭
    cy.get(".minus-button").click();

    // 클릭 후 증가한 값
    cy.get(".count-display").should("have.value", 9);
  });

  it("+ 버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못한다. (Max 값이 12)", () => {
    // 클릭 전 초기값
    cy.get(".count-display").should("have.value", 10);

    // + 버튼 클릭
    cy.get(".plus-button").click();
    cy.get(".plus-button").click();
    cy.get(".plus-button").click();
    cy.get(".plus-button").click();

    // 클릭 후 증가한 값은 12를 넘지 못한다.
    cy.get(".count-display").should("have.value", 12);
  });

  it("- 버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못한다. (Min 값이 8)", () => {
    // 클릭 전 초기값
    cy.get(".count-display").should("have.value", 10);

    // + 버튼 클릭
    cy.get(".minus-button").click();
    cy.get(".minus-button").click();
    cy.get(".minus-button").click();
    cy.get(".minus-button").click();

    // 클릭 후 증가한 값
    cy.get(".count-display").should("have.value", 8);
  });
});
