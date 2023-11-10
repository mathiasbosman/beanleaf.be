const allPages = ["/"];

describe("A11 checks", () => {
  function _checkAllPages() {
    allPages.forEach((page) => {
      cy.visit(page);
      cy.injectAxe();
      cy.checkA11y();
    });
  }

  context(
    "Medium viewport",
    {
      viewportWidth: 640,
      viewportHeight: 1250,
    },
    () => {
      it("All pages should pass the a11 check", () => {
        _checkAllPages();
      });
    },
  );
  context(
    "Small viewport",
    {
      viewportWidth: 639,
      viewportHeight: 1250,
    },
    () => {
      it("All pages should pass the a11 check", () => {
        _checkAllPages();
      });
    },
  );
  it("All pages have an h1, header, main nav and footer", () => {
    allPages.forEach((page) => {
      cy.visit(page);
      cy.get("h1").should("be.visible");
      cy.get("main").should("be.visible");
      cy.get("footer").should("be.visible");
      cy.screenshot("pages" + page);
    });
  });
});
