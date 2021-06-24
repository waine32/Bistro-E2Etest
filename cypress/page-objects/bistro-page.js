export class BistroPage {

    navigate(url) {
        cy.visit(url)
    }

    pickLocation(location) {
        cy.get('#hp-autocomplete').type(location)
        cy.get('.results > :nth-child(1)').click()
    }

    validatePageForLocation(location) {
        cy.get('h1').should('contain', 'Food delivery '+location)
    }

    pickFoodGroup(foodGroup) {
        cy.contains(foodGroup).click()
    }

    validatePageForFoodGroup(foodGroup, location) {
        cy.get('h1').should('contain', foodGroup).and('contain', location)
    }

    setFilter(typeOfSorting) {
        cy.get('.selectButtonTitle').click()
        cy.contains(typeOfSorting).click()
        cy.get('.restaurantFilter > .button').click()
        cy.get('#filterFreeDelivery').click()
        cy.get('#filterOnlinePayment').click()
        cy.get('#filterHomeDelivery').click()
    }

    pickRestaurant(rankingOfRestaurant) {
        cy.get('.content > .action > .button').eq(rankingOfRestaurant - 1).click()
    }

    validatePageOfRestaurant() {
        cy.get('.cartTitle').should('contain', 'Your order')
    }

    pickFoodFromMenu(itemInSection, section) {
        cy.get(':nth-child('+itemInSection+') > .content-wrapper').eq(section+1).click({force: true})
    }

    enterTheAddress(address) {
        cy.window().then(win => {

            cy.get('.bistro-input__input').type(address) 
            cy.get(':nth-child(1) > .location-results__result').contains(address).click({force: true}) //- Petržalka, Bradáčova 1683/1').click({force: true})
            cy.get('.specification-wrapper__footer--submit').click({force: true})
            
            cy.wait(1000)
        })
    }

    checkModalWindow() {

        cy.get('body').then(($body) => {
            
            if ($body.find('.modal-window').length) {
                cy.window().then(win => {
                    cy.get('.modal-bottom > .button').click() 
                })
            }
        })
    }    

    validateItemsInCart(countOfItems) {
        cy.get('#cart-fixed > .inside').find('.name').should('have.length', countOfItems)
    }
}