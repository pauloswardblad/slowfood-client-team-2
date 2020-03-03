describe("User can see a list of items in menu", () => {
  it("show list oif items", () => {
    cy.visit('/');
    cy.get("h1");      
  });
});
