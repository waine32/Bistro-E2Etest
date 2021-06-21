/// <reference types="cypress" />

import {BistroPage} from "../page-objects/bistro-page";

describe('bistro order', () => {
    const bistroPage = new BistroPage()

    const location = 'Bratislava'
    const address = location       //'Bratislava - Petržalka, Bradáčova 1683/1'
    const foodGroup = 'Drinks'


    it('pick location', () => {

        bistroPage.navigate('/')
        bistroPage.pickLocation(location)
        bistroPage.validatePageForLocation(location)

    })

    it('pick food group', () => {

        bistroPage.pickFoodGroup(foodGroup)
        bistroPage.validatePageForFoodGroup(foodGroup, location)
        
    })

    it('pick restaurant', () => {

        // bistroPage.navigate('/donaska-napoje/bratislava/')

        bistroPage.setFilter('Rating')
        bistroPage.pickRestaurant(1)
        bistroPage.validatePageOfRestaurant()
      
    })

    it('pick food', () => {

        bistroPage.navigate('/domased/')

        bistroPage.pickFoodFromMenu(1)
        bistroPage.enterTheAddress(address)
        bistroPage.pickFoodFromMenu(2)
        bistroPage.pickFoodFromMenu(3)
        bistroPage.validateItemsInCart(3)

    })
})