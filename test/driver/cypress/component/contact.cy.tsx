import { Contact } from "@components/contact.tsx";

describe("<Contact/> component", () => {
  it("Should render correctly", () => {
    cy.mount(<Contact />);
    cy.get('input[type="text"]').should("be.visible");
    cy.get("button").should("be.visible");
  });

  it("Should handle input correctly", () => {
    cy.mount(<Contact />);
    const dummyText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    cy.get('input[type="text"]')
      .type(dummyText)
      .should("have.value", dummyText.substring(0, 30));
  });
});
