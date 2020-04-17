describe('Comprobamos que los botones de acciones funcionan', () => {
  it('Abrimos la aplicación para hacer el test', () => {
    cy.visit('/');
  });
  it('Accedemos al elemento mediante el ID', () => {
    cy.get('#btnID');
  });
});
