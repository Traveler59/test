interface Meal{
    mealName: string;
    img: string;
    wine: string;
}

class TestViewModel {
    currentMealNumber: number;
    rightAnswers: KnockoutObservable<number>;
    availableMeals: Array<Meal>;
    currentItem: KnockoutObservable<Meal>;
    showResults: KnockoutObservable<boolean>;
    testProgress: KnockoutObservable<string>;

    constructor() {
        this.currentMealNumber = 0;
        this.rightAnswers = ko.observable(0);
        this.showResults = ko.observable(false);
        this.testProgress = ko.observable("0%");

        this.availableMeals = [
            { mealName: "Сыр", img: "images/Cheese.jpg", wine: "Red" },
            { mealName: "Красное Мясо", img: "images/RedMeat.jpg", wine: "Red" },
            { mealName: "Рыба", img: "images/Fish.jpg", wine: "White" },
            { mealName: "Шоколад", img: "images/Chocolate.jpg", wine: "Sweet" },
            { mealName: "Икра", img: "images/Caviar.jpg", wine: "White" },
            { mealName: "Мороженное", img: "images/Ice Cream.png", wine: "Sweet" },
            { mealName: "Апельсины", img: "images/Orange.jpg", wine: "Red" }
        ];

        this.currentItem = ko.observable(this.availableMeals[this.currentMealNumber]);
    }

    check(answer: string): void {
        if (this.currentMealNumber != this.availableMeals.length) {
            this.updateProgressBar();
            if (this.currentItem().wine == answer)
                this.rightAnswers(this.rightAnswers() + 1);

            if (++this.currentMealNumber < this.availableMeals.length)
                this.currentItem(this.availableMeals[this.currentMealNumber]);
            else this.showResults(true);
        }
    }

    updateProgressBar(): void {
        const value = (this.currentMealNumber + 1) * 100 / this.availableMeals.length;
        this.testProgress(value+'%');
    }
}

ko.applyBindings(new TestViewModel());
