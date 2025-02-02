describe('test functionalities from my todo lists', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.fixture('example').as('exampleData')
    cy.viewport('iphone-x')
  })

  it('testing to insert a value in my list', () => {
    cy.fixture('example').then((example) => {
      cy.get('.input-text').type(example.name)
    })
    cy.get('.input-submit').click()
    cy.get('.todo-item').should('have.length', 1)
  })

  it('testing delete a taks in mt board', () => {
    cy.fixture('example').then((example) => {
      cy.get('.input-text').type(example.name)
    })

    cy.get('.input-submit').click()

    cy.get('.todo-item').should('have.length', 1)

    cy.get('.todo-list')
      .children()
      .then(($children) => {
        const initialLength = $children.length

        cy.get('button').contains('Delete').click()

        if (initialLength === 1) {
          cy.get('.todo-list').should('not.exist')
          return
        }

        cy.get('.todo-list')
          .children()
          .should('have.length', initialLength - 1)
      })
  })
})
