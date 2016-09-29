class ReservationsViewModel {
  num: number;
  rightAnswers: KnockoutObservable<number>;
  availableMeals: Array<any>;
  currentItem: KnockoutObservable<any>;
  showResults: KnockoutObservable<Boolean>;
  testProgress: KnockoutObservable<String>;

    constructor() {
      var self = this;
      this.num = 0;
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

      this.currentItem = ko.observable(this.availableMeals[self.num]);
  }

    check(data: any, event: any): void {
      if(this.num != this.availableMeals.length) {
        this.updateProgressBar();
        if(this.currentItem().wine == event.currentTarget.getAttribute("data-wine"))
          this.rightAnswers(this.rightAnswers() + 1);
        if(++this.num < this.availableMeals.length)
         this.currentItem(this.availableMeals[this.num]);
        else this.showResults(true);
      }
    }

    updateProgressBar(): void {
      let value: number = (this.num + 1) * 100 / this.availableMeals.length;
      this.testProgress(value+'%');
    }
}

ko.applyBindings(new ReservationsViewModel());
