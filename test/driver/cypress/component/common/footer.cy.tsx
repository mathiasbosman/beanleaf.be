import Footer from "@components/common/footer.tsx";

describe("<Footer/> component", () => {
  it("Should render correctly", () => {
    cy.mount(<Footer />);
    cy.get("footer").should("be.visible");
    cy.get("p")
      .should(
        "have.html",
        "©&nbsp;" +
          new Date().getFullYear().toString() +
          " Beanleaf. footer.disclaimer. vat.short&nbsp;BE&nbsp;0737.612.645",
      )
      .should("have.css", "text-align", "center");
  });
});
