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

        // bistroPage.navigate('/pijeme/')

        bistroPage.pickFoodFromMenu(1, 1)
        bistroPage.enterTheAddress(address)
        bistroPage.checkModalWindow()
        bistroPage.pickFoodFromMenu(2, 1)
        bistroPage.checkModalWindow()
        bistroPage.pickFoodFromMenu(3, 1)
        bistroPage.checkModalWindow()
        bistroPage.validateItemsInCart(3)

    })
})