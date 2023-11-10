describe("Happy paths", () => {
  context(
    "Medium viewport",
    {
      viewportWidth: 640,
      viewportHeight: 1250,
    },
    () => {
      it("Should be able to visit all pages directly", () => {
        cy.visit("/");
      });
    },
  );
});
