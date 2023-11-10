import Footer from "@components/common/footer.tsx";

describe("<Footer/> component", () => {
  it("Should render correctly", () => {
    cy.mount(<Footer />);
    cy.get("footer").should("be.visible");
    cy.get("p")
      .should(
        "contain.html",
        "©&nbsp;" +
          new Date().getFullYear().toString() +
          " Beanleaf",
      )
      .should("have.css", "text-align", "center");
  });
});
