import { addItem, checkIfItemDontExist, checkIfItemExist, editItem, findItem, getStatus, removeItem } from "../src/actions/item"
import { ROUTES } from "../src/constants/routes"

describe('Teste de CRUD dos itens', () => {

  it(`
    Dado que a lista está vazia
    Quando eu preencho o formulário com o valor "Ler Livros"
    Entao eu vejo ele na lista de tarefas como não preenchido`
  , () => {
    cy.visit(ROUTES.basicRoute)
    addItem('Ler Livros');
    checkIfItemExist('Ler Livros')
    getStatus('Ler Livros')
      .should('not.be.checked')  
  })

  it(`
    Dado que a lista está preenchida com um item "Comprar um monitor" como não completo
    Quando eu clico para completar-lo
    Entao eu vejo o checkbox marcado
  `, () => {
    cy.visit(ROUTES.basicRoute)
    addItem('Comprar um monitor');
    getStatus('Comprar um monitor')
      .click()
    getStatus('Comprar um monitor')
      .should('be.checked')
  })

  it(`
    Dado que a lista está preenchida com um item "Comprar um monitor" como não completo
    Quando eu clico para remover-lo
    Entao eu nao vejo mais ele na lista
  `, () => {
    cy.visit(ROUTES.basicRoute)
    addItem('Comprar um monitor');
    addItem('Comprar uma mesa');
    removeItem('Comprar um monitor')
    checkIfItemDontExist('Comprar um monitor')
    checkIfItemExist('Comprar uma mesa')
  })

  it(`
    Dado que a lista está preenchida com dois itens "Comprar um monitor" e "Comprar uma mesa" como não completos
    Quando eu clico para editar o item "Comprar um monitor" e altero para "Comprar livros"
    Entao eu vejo que a nova lista é "Comprar livros" e "Comprar uma mesa"
  `, () => {
    cy.visit(ROUTES.basicRoute)
    addItem('Comprar um monitor');
    addItem('Comprar uma mesa');
    editItem('Comprar um monitor', 'Comprar livros')
    checkIfItemExist('Comprar livros')
    checkIfItemExist('Comprar uma mesa')
    checkIfItemDontExist('Comprar um monitor')
  })
})

