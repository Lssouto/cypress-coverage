import { addItem, checkIfItemDontExist, checkIfItemExist, findItem, getStatus, removeItem } from "cypress/src/actions/item";
import { ELEMENTS } from "cypress/src/constants/elements";
import { ROUTES } from "cypress/src/constants/routes";
import { getFilterListItem, getOrderListItem } from '../src/actions/list-menu';

describe(
    'Teste das opções de filtro do menu', () => {
    it(
        `
    Dado que a lista de tarefas está populada com os seguintes itens

    'Comprar uma mesa', não completo
    'Comprar uma cadeira', completo
    'Comprar um notebook', não completo
    'Comprar um estabilizador' completo
    
    Quando eu clico no menu para filtrar por items completos

    Então eu vejo somente os itens 'Comprar uma cadeira' e 'Comprar um estabilizador'
    `, () => {
        cy.visit(ROUTES.basicRoute);
        addItem('Comprar uma mesa');
        addItem('Comprar uma cadeira');
        addItem('Comprar um notebook');
        addItem('Comprar um estabilizador');
        getStatus('Comprar uma cadeira').click();
        getStatus('Comprar um estabilizador').click();
        cy.wait(500);
        getFilterListItem('Completos').click();

        checkIfItemDontExist('Comprar uma mesa');
        checkIfItemDontExist('Comprar um notebook');

        checkIfItemExist('Comprar uma cadeira');
        checkIfItemExist('Comprar um estabilizador');

    });

    it(
        `
    Dado que a lista de tarefas está populada com os seguintes itens

    'Comprar uma mesa', não completo
    'Comprar uma cadeira', completo
    'Comprar um notebook', não completo
    'Comprar um estabilizador' completo
    
    Quando eu clico no menu para filtrar por items NÃO completo

    Então eu vejo somente os itens 'Comprar uma mesa' e 'Comprar um notebook'
    `, () => {
        cy.visit(ROUTES.basicRoute);
        addItem('Comprar uma mesa');
        addItem('Comprar uma cadeira');
        addItem('Comprar um notebook');
        addItem('Comprar um estabilizador');
        getStatus('Comprar uma cadeira').click();
        getStatus('Comprar um estabilizador').click();

        getFilterListItem('Ativos').click();

        checkIfItemDontExist('Comprar uma cadeira');
        checkIfItemDontExist('Comprar um estabilizador');

        checkIfItemExist('Comprar uma mesa');

        checkIfItemExist('Comprar um notebook');
    });

    it(
        `
    Dado que a lista de tarefas está populada com os seguintes itens e filtrada por Não completo

    'Comprar uma mesa', não completo
    'Comprar uma cadeira', completo
    'Comprar um notebook', não completo
    'Comprar um estabilizador' completo
    
    Quando eu clico no menu para exibit todos

    Então eu vejo todos os items
    `, () => {
        cy.visit(ROUTES.basicRoute);
        addItem('Comprar uma mesa');
        addItem('Comprar uma cadeira');
        addItem('Comprar um notebook');
        addItem('Comprar um estabilizador');
        getStatus('Comprar uma cadeira').click();
        getStatus('Comprar um estabilizador').click();

        getFilterListItem('Ativos').click();

        checkIfItemDontExist('Comprar uma cadeira');
        checkIfItemDontExist('Comprar um estabilizador');

        checkIfItemExist('Comprar uma mesa');
        checkIfItemExist('Comprar um notebook');

        getFilterListItem('Todos').click();
        cy.wait(500);

        checkIfItemExist('Comprar uma cadeira');
        checkIfItemExist('Comprar um estabilizador');

    });
});

describe(
    'Teste das opções de ordenação do menu', () => {

        it(
            `
        Dado que a lista de tarefas está populada com os seguintes itens
    
        'Banana',
        'Caju',
        'Abacaxi',
        
        Quando eu clico no menu para ordenar ordem crescente
    
        Então eu vejo os itens 'Abacaxi', 'Banana', 'Caju'
        `,
        () => {
            cy.visit(ROUTES.basicRoute);
            addItem('Banana');
            addItem('Caju');
            addItem('Abacaxi');

            getOrderListItem('Crescente').click();
            cy.wait(500);

            cy.get(`${ELEMENTS.list} > ${ELEMENTS.listItem}:first-child`)
                .find(ELEMENTS.baseInput)
                .invoke('val')
                .should('be.oneOf', ['Abacaxi', 'abacaxi']);

            cy.get(`${ELEMENTS.list} > ${ELEMENTS.listItem}:last-child`)
                .find(ELEMENTS.baseInput)
                .invoke('val')
                .should('be.oneOf', ['Caju', 'caju']);


        })

        it(
            `
        Dado que a lista de tarefas está populada com os seguintes itens
    
        'Banana',
        'Caju',
        'Abacaxi',
        
        Quando eu clico no menu para ordenar ordem decrescente
    
        Então eu vejo os itens 'Caju', 'Banana', 'Abaxaci'
        `,
        () => {
            cy.visit(ROUTES.basicRoute);
            addItem('Banana');
            addItem('Caju');
            addItem('Abacaxi');

            getOrderListItem('Decrescente').click();
            cy.wait(500);

            cy.get(`${ELEMENTS.list} > ${ELEMENTS.listItem}:last-child`)
                .find(ELEMENTS.baseInput)
                .invoke('val')
                .should('be.oneOf', ['Abacaxi', 'abacaxi']);

            cy.get(`${ELEMENTS.list} > ${ELEMENTS.listItem}:first-child`)
                .find(ELEMENTS.baseInput)
                .invoke('val')
                .should('be.oneOf', ['Caju', 'caju']);


        })
});