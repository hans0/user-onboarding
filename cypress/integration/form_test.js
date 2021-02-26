describe('Form app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  
  it('Sanity Check to make sure our tests work', () => {
    expect(1 + 1).to.equal(2);
    expect(1 + 1).not.to.equal(3);
    expect(7).to.equal(7);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });
  
  const nameInput = () => cy.get('input[name=name]');
  const emailInput = () => cy.get('input[name=email]');
  const passwordInput = () => cy.get('input[name=password]');
  const tosCheckbox = () => cy.get('input[name=tos]');
  const submitButton = () => cy.get('button[name=submitButton]')

  it('Elements are showing', () => {
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    tosCheckbox().should('exist');
    submitButton().should('exist');
  });

  it('Can use inputs', () => {
    nameInput()
      .should('have.value', '')
      .type('Testman')
      .should('have.value', 'Testman')
    emailInput()
      .should('have.value', '')
      .type('test@bizcorp.net')
      .should('have.value', 'test@bizcorp.net')
    passwordInput()
      .should('have.value', '')
      .type('weakpassword')
      .should('have.value', 'weakpassword')
    tosCheckbox()
      .should('not.be.checked')
      .check()
      .should('be.checked')
    nameInput().clear()
    emailInput().clear()
    passwordInput().clear()
    tosCheckbox().uncheck()
  })
  it('Can submit information', () => {
    nameInput()
      .should('have.value', '')
      .type('Testman')
      .should('have.value', 'Testman')
    emailInput()
      .should('have.value', '')
      .type('test@bizcorp.net')
      .should('have.value', 'test@bizcorp.net')
    passwordInput()
      .should('have.value', '')
      .type('weakpassword')
      .should('have.value', 'weakpassword')
    tosCheckbox()
      .should('not.be.checked')
      .check()
      .should('be.checked')
    submitButton().click();
  })
  it(`Won't submit information if any form empty`, () => {
    nameInput()
      .should('have.value', '')
    emailInput()
      .should('have.value', '')
      .type('test@bizcorp.net')
      .should('have.value', 'test@bizcorp.net')
    passwordInput()
      .should('have.value', '')
      .type('weakpassword')
      .should('have.value', 'weakpassword')
    tosCheckbox()
      .should('not.be.checked')
      .check()
      .should('be.checked')
    submitButton().click();
    emailInput()
      .should('have.value', 'test@bizcorp.net')
    passwordInput()
      .should('have.value', 'weakpassword')
    tosCheckbox()
      .should('be.checked')
    // email clear
    nameInput()
      .should('have.value', '')
      .type('Testman')
      .should('have.value', 'Testman')
    emailInput()
      .clear()
      .should('have.value', '')
    passwordInput()
      .clear()
      .should('have.value', '')
      .type('weakpassword')
      .should('have.value', 'weakpassword')
    tosCheckbox()
      .uncheck()
      .should('not.be.checked')
      .check()
      .should('be.checked')
    submitButton().click();
    nameInput()
      .should('have.value', 'Testman')
    emailInput()
      .should('have.value', '')
    passwordInput()
      .should('have.value', 'weakpassword')
    tosCheckbox()
      .should('be.checked')
    // password not input
    nameInput()
      .should('have.value', 'Testman')
    emailInput()
      .type('test@bizcorp.net')
      .should('have.value', 'test@bizcorp.net')
    passwordInput()
      .clear()
      .should('have.value', '')
    tosCheckbox()
      .check()
      .should('be.checked')
    submitButton().click();
    nameInput()
      .should('have.value', 'Testman')
    emailInput()
      .should('have.value', 'test@bizcorp.net')
    passwordInput()
      .should('have.value', '')
    tosCheckbox()
      .should('be.checked')
    // TOS not checked
    passwordInput()
      .type('weakpassword')
      .should('have.value', 'weakpassword')
    tosCheckbox()
      .uncheck()
      .should('not.be.checked')
    submitButton().click();
    nameInput()
      .should('have.value', 'Testman')
    emailInput()
      .should('have.value', 'test@bizcorp.net')
    passwordInput()
      .should('have.value', 'weakpassword')
    tosCheckbox()
      .should('not.be.checked')



  })


})