import { ROUTES } from "../src/constants/routes";

describe('The application is running', () => {
    it('Visits the initial project page', () => {
      cy.visit(ROUTES.basicRoute)
      cy.contains('Todos')
    })
});