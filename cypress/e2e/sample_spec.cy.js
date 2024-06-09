describe("My first tets", () => {
  it("Visits sample website", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("hello@cypress.io")
      .should("have.value", "hello@cypress.io")
  });
});
