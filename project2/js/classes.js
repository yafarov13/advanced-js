class Hamburger {
    constructor(size, stuffing, seasoning, mayonnaise) {
        this.size = size;
        this.stuffing = stuffing;
        this.seasoning = seasoning;
        this.mayonnaise = mayonnaise;
        this.allServices = [
            {name: "small", cost: 50, calories: 20},
            {name: "big", cost: 100, calories: 40},
            {name: "cheese", cost: 10, calories: 20},
            {name: "salad", cost: 20, calories: 5},
            {name: "potato", cost: 15, calories: 10},
            {name: "seasoning", cost: 15, calories: 0},
            {name: "mayonnaise", cost: 20, calories: 5},
        ];
        this.hamburgerInfo = this.getInfo();
    }
    getInfo() {
        let myHamburger = [this.size, this.stuffing, this.seasoning, this.mayonnaise];
        let infoMyHamburger = [];
        myHamburger.forEach( (myHamburgerChoice) => {
            if (myHamburgerChoice) {
                this.allServices.forEach( function (service) {
                    if (myHamburgerChoice == service.name) {
                        infoMyHamburger.push(service);
                    }
                });
            }
        });
        return infoMyHamburger;
    }

    getPrice() {
        let myHamburgerPrice = 0;
        this.hamburgerInfo.forEach(function (myHamburgerChoice) {
            myHamburgerPrice += myHamburgerChoice.cost;
        });
        return myHamburgerPrice;
    }
    getCalories() {
        let myHamburgerCalories = 0;
        this.hamburgerInfo.forEach(function (myHamburgerChoice) {
            myHamburgerCalories += myHamburgerChoice.calories;
        });
        return myHamburgerCalories;
    }

}