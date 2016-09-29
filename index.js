function ReservationsViewModel() {
    var self = this;
    self.num = 0;
    self.rightAnswers = ko.observable(0);

    self.availableMeals = [
        { mealName: "Сыр", img: "images/Cheese.jpg", wine: "Red" },
        { mealName: "Красное Мясо", img: "images/RedMeat.jpg", wine: "Red" },
        { mealName: "Рыба", img: "images/Fish.jpg", wine: "White" },
        { mealName: "Шоколад", img: "images/Chocolate.jpg", wine: "Sweet" },
        { mealName: "Икра", img: "images/Caviar.jpg", wine: "White" },
        { mealName: "Мороженное", img: "images/Ice Cream.png", wine: "Sweet" },
        { mealName: "Апельсины", img: "images/Orange.jpg", wine: "Red" }
    ];

    self.currentItem = ko.observable(self.availableMeals[self.num]);

    self.check = function(data, event) {
      if(self.num != self.availableMeals.length) {
        self.updateProgressBar();
        if(self.currentItem().wine == event.currentTarget.getAttribute("data-wine"))
          self.rightAnswers(self.rightAnswers() + 1);
        if(++self.num < self.availableMeals.length)
         self.currentItem(self.availableMeals[self.num]);
        else self.showResults();
      }
    }

    self.showResults = function() {
      if(self.rightAnswers() != self.availableMeals.length)
        document.getElementsByTagName( "strong" )[0].textContent  = "";
      document.getElementsByClassName('alert')[0].style.visibility = "visible";
    }

    self.updateProgressBar = function() {
      var value = (self.num + 1) * 100 / self.availableMeals.length;
      progressBar = document.getElementsByClassName( "progress-bar" )[0];
      progressBar.style.width = value+'%';
      progressBar.setAttribute("aria-valuenow",value);
    }
}

ko.applyBindings(new ReservationsViewModel());
