describe('Comprobamos que los botones de acciones funcionan', () => {
  it('Abrimos la aplicación para hacer el test', () => {
    cy.visit('/');
  });
  // Acceso por ID
  it('Comprobamos que el resultado este vacio en este momento mediante el ID', () => {
    cy.get('#resultID').should('contain', '');
  });
  it('Comprobamos que el resultado este relleno en este momento mediante el ID', () => {
    cy.get('#btnID').click();
    cy.get('#resultID').should('contain', 'Acceso por el ID');
  });
  // Acceso por Atributo
  it('Comprobamos que el resultado este vacio en este momento mediante el Atributo', () => {
    cy.get('[name=resultATTR]').should('contain', '');
  });
  it('Comprobamos que el resultado este relleno en este momento mediante el Atributo', () => {
    cy.get('#btnATTR').click();
    cy.get('[name=resultATTR]').should('contain', 'Acceso por el Atributo');
  });
  // Acceso por Clase
  it('Comprobamos que el resultado este vacio en este momento mediante la Clase', () => {
    cy.get('.resultCLASS').should('contain', '');
  });
  it('Comprobamos que el resultado este relleno en este momento mediante la Clase', () => {
    cy.get('#btnCLASS').click();
    cy.get('.resultCLASS').should('contain', 'Acceso por la Clase');
  });
  // Acceso por Tagname
  it('Comprobamos que el resultado este vacio en este momento mediante el nombre de la etiqueta', () => {
    cy.get('.col > :nth-child(4)').should('contain', '');
  });
  it('Comprobamos que el resultado este relleno en este momento mediante el nombre de la etiqueta', () => {
    cy.get('#btnTAGNAME').click();
    cy.get('.col > :nth-child(4)').should('contain', 'Acceso por el Tagname');
  });
  // Reset
  it('Reseteamos todos los valores para dejarlos con el valor de origen', () => {
    cy.get('#btnResetID').click();
    cy.get('#resultID').should('contain', '');
    cy.get('#btnResetATTR').click();
    cy.get('[name=resultATTR]').should('contain', '');
    cy.get('#btnResetCLASS').click();
    cy.get('.resultCLASS').should('contain', '');
    cy.get('#btnResetTAGNAME').click();
    cy.get('.col > :nth-child(4)').should('contain', '');
  });

  // Test en la tabla
  it('Comprobamos el nùmero de filas (registros)', () => {
    cy.get('table tbody tr').should('have.length', 5);
  });
});
