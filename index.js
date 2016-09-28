function ReservationsViewModel() {
    var self = this;
    self.num = 0;
    self.rightAnswers = ko.observable(0);

    self.availableMeals = [
        { mealName: "Сыр", img: "images/Cheese.jpg", wine: "Red" },
        { mealName: "Красное Мясо", img: "images/RedMeat.jpg", wine: "Red" },
        { mealName: "Рыба", img: "images/Fish.jpg", wine: "White" },
        { mealName: "Шоколад", img: "images/Chocolate.jpg", wine: "Sweet" },
    ];

    self.currentItem = ko.observable(self.availableMeals[self.num]);

    self.check = function(data, event) {
      self.updateProgressBar();
      if(self.currentItem().wine == event.currentTarget.getAttribute("data-wine"))
        self.rightAnswers(self.rightAnswers() + 1);
      if(++self.num < self.availableMeals.length)
        self.currentItem(self.availableMeals[self.num]);
      else self.results();
    }

    self.results = function() {
      $(".alert").slideDown();
    }

    self.updateProgressBar = function(){
      var value = (self.num + 1) * 100 / self.availableMeals.length;
      progressBar = $(".progress-bar");
      progressBar.css("width", value+'%');
      progressBar.attr('aria-valuenow', value);
    }
}

ko.applyBindings(new ReservationsViewModel());
