describe('Realizar check-out do e-inscrição', () => {

  beforeEach(() => {
    cy.visit('https://checkout.einscricao.app//?event_id=75524&apiUrl=https://www.e-inscricao.com&msApiUrl=https://safe2pay-paymentflow.einscricao.workers.dev/&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://ei-mysql-readonly.raise.workers.dev')

  })
  
  it('Caso de uso', () => {
    cy.get('[tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root > path').click();
    cy.contains('button', 'continuar').click();
    cy.contains('a', 'Continuar Sem Conta').click();
    cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Suriel Jacobsen');
    cy.get('.MuiSelect-root').select('CPF');
    cy.get('.MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('378.554.113-99');
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('surileo@gmail.com')
    cy.contains('button', 'finalizar').click();
    cy.contains('button', 'Salvar comprovante').click();
  })

})
