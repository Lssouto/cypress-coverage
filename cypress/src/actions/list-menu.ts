import { ELEMENTS } from "../constants/elements"

export const getOrderListItem = (label: string) => {
    return cy.get(ELEMENTS.actionsOrderlist).contains(label)
};

export const getFilterListItem = (label: string) => {
    return cy.get(ELEMENTS.actionsFilterList).contains(label);
}

export const getNumberOfItems = () => {
    return cy.get(ELEMENTS.menuItems)
}