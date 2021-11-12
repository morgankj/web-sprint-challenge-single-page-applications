describe('LambdaEats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    const pizzaFormButton = () => cy.get('a[id=order-pizza]');
    const nameInput = () => cy.get('input[id=name-input]');
    const mediumPizza = () => cy.get('select[id=size-dropdown]').select('medium');
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const sausage = () => cy.get('input[name=sausage]');
    const mushrooms = () => cy.get('input[name=mushrooms]');
    const peppers = () => cy.get('input[name=peppers]');
    const olives = () => cy.get('input[name=olives]');
    const special = () => cy.get('textarea[id=special-text]');
    const submitButton = () => cy.get('button[id=order-button]');

    it('Sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(3 + 4).not.to.equal(8);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('The proper elements are showing', () => {
        pizzaFormButton().should('exist');
        pizzaFormButton().click();
        mediumPizza().should('exist');
        mushrooms().should('exist');
        submitButton().should('exist');
    })

    describe('Filling out the inputs and submitting', () => {
        it('Submit button should start out disabled', () => {
            pizzaFormButton().click();
            submitButton().should('be.disabled');
        })

        it('Can type in the text fields', () => {
            pizzaFormButton().click();
            nameInput()
                .should('have.value', '')
                .type('Bella Cullen')
                .should('have.value', 'Bella Cullen');
            special()
                .should('have.value', '')
                .type('I would like my pizza in the shape of a vampire, please')
                .should('have.value', 'I would like my pizza in the shape of a vampire, please');
        })

        it('Can check toppings on and off', () => {
            pizzaFormButton().click();
            pepperoni()
                .should('not.be.checked')
                .click()
                .should('be.checked')
                .click()
                .should('not.be.checked');
            sausage()
                .should('not.be.checked')
                .click()
                .should('be.checked')
                .click()
                .should('not.be.checked');
            })

        describe('Can submit an order for a pizza', () => {
            it('The submit button activates when all required fields have been filled', () => {
                pizzaFormButton().click();
                nameInput().type('Edward Cullen');
                mediumPizza();
                submitButton().should('not.be.disabled');
            })

            it('The submit button deactivates when you clear a required field', () => {
                pizzaFormButton().click();
                nameInput().type('Edward Cullen');
                mediumPizza();
                submitButton().should('not.be.disabled');
                nameInput().clear();
                submitButton().should('be.disabled');
            })

            it('Submit an order with multiple toppings', () => {
                pizzaFormButton().click();
                nameInput().type('Edward Cullen');
                mediumPizza();
                pepperoni().click();
                peppers().click();
                olives().click();
                submitButton().click();
            })
        })
    })

})