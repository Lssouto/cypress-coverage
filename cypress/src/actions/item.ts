import { ELEMENTS } from "../constants/elements"

export const addItem = (label: string) => {
    cy.get(`.header__input > ${ELEMENTS.baseInput}`)
        .type(`${label}{enter}`);
}

export const removeItem = (label: string) => {
    findItem(label)
        .parent()
        .parent()
        .parent()
        .find(`${ELEMENTS.todoItemRemove} > ${ELEMENTS.baseButton}`)
        .click()
}

export const editItem = (label: string, newValue: string) => {
    findItem(label)
        .clear()
    findItem('')
        .type(`${newValue}{enter}`);
}

export const getStatus = (label: string) => {
    return findItem(label)
        .parent()
        .parent()
        .parent()
        .find(`${ELEMENTS.todoItemStatus} > ${ELEMENTS.baseCheckbox}`)
}

export const findItem = (label: string) => {
    return cy.get(ELEMENTS.list)
        .find(`${ELEMENTS.listItem} ${ELEMENTS.baseInput}`)
        .then((elements) => {
            let selectedElement = null;
            elements.each(element => {
                const attributeValue = elements[element]['value'];
                if (attributeValue == label) {
                    selectedElement = elements[element]
                }
            })
            cy.wrap(selectedElement);
        })
}

export const checkIfItemExist = (label: string) => {
    findItem(label)
      .invoke('val')
      .should('be.oneOf', [label, label.toLowerCase()]);
}

export const checkIfItemDontExist = (label: string) => {
    cy.wait(500);
    findItem(label)
      .should('be.null');
}