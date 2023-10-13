
     function MakeCar(name) {
        return {
          name,
          list: [],
          Maker: Maker,
          displayItems : displayItems,
        };
      }
   
      function generateID() {
        var count = 0;
        return function () {
          return count++;
        };
      }
      
      var id = generateID();
      
      function Maker(price, name, category, images,date) {
        var data = {
          price,
          name,
          category,
          images,
          date,
          
          id: id(),
        };
        this.list.push(data);
        return data;
      }
      
      var RentalCar = MakeCar("Nissem Supercars");
      
    
      RentalCar.Maker("500$" ,"Aston Martin",  "luxury cars", 
        "https://i.pinimg.com/236x/d3/74/8a/d3748a4dd263e24b6227f21c950a9bf4.jpg","available from: 15/10/2023")
      
      RentalCar.Maker("650$", "lamborghini Aventador", "sport cars", 
        "https://i.pinimg.com/564x/39/47/f5/3947f5e65fb3dfa0991353af6fc768e8.jpg","available from: 03/11/2023");
      
      RentalCar.Maker("450$", "Rang Rover 2024","SUV cars", 
        "https://i.pinimg.com/564x/37/4c/97/374c972c66fbab58639a5ef0ca97dee3.jpg","available from: 30/10/2023");
      RentalCar.Maker("1000$","Ferrari Laferrari","sport cars", 
        "https://i.pinimg.com/236x/d0/6c/fa/d06cfae638a7e2a56d23744f9e1f8887.jpg","available from: 02/11/2023");
        RentalCar.Maker("500$", "Lamborghini Urus","SUV cars","https://i.pinimg.com/564x/44/0a/4a/440a4aef86eaecb7aa0dd0e1241f7076.jpg","available from: 12/10/2023")
        RentalCar.Maker("1550$","Rolce Royce","luxury cars", 
        "https://i.pinimg.com/236x/64/f4/b3/64f4b3d8f28911bb122af31232254d6f.jpg","available from: 25/10/2023");
        RentalCar.Maker("1550$","bmw m8 competition","sport cars", 
        "https://i.pinimg.com/236x/e6/f7/f5/e6f7f58da7d5ec6205633fd38a5ce7ff.jpg","available from: 20/10/2023");
        RentalCar.Maker("2500$","limo","luxury cars","https://i.pinimg.com/564x/dc/ff/d4/dcffd47e29f2bb4a160d7a1ebcbb4beb.jpg","available from: 20/10/2023");
        RentalCar.Maker("700$","bently","luxury cars","https://i.pinimg.com/564x/5a/6c/03/5a6c03d8ca27cafa8e4411b82682d6ae.jpg","available from: 12/11/2023");
        RentalCar.Maker("500$","G-wagon Brabus","luxury cars","https://i.pinimg.com/originals/70/fe/9e/70fe9ee6c764c0b69ab33cfcb2f4f1bf.jpg","available from: 17/10/2023");
        RentalCar.Maker("340$","toyota land cruiser","SUV cars","https://i.pinimg.com/564x/40/32/b5/4032b56e287c45ccfb98e1ef5b6e44d2.jpg","available from: 13/10/2023");
        RentalCar.Maker("1500$","nissan GTR","sport cars","https://i.pinimg.com/564x/81/01/a2/8101a2389f8d41beb823167276844686.jpg","available from: 01/11/2023");
        RentalCar.Maker("1400$","toyota","sport cars","https://i.pinimg.com/564x/5f/3b/e5/5f3be560a5034f3f823fbed8f48e773d.jpg","available from: 03/11/2023");
        RentalCar.Maker("1000$","mclaren","sport cars","https://i.pinimg.com/564x/40/8d/46/408d465cb45ff86988a247b6c1da35c5.jpg","available from: 05/11/2023");
        RentalCar.Maker("500$","maseratti","SUV cars","https://i.pinimg.com/564x/b1/62/a9/b162a927ad546aa0908fd84f5a2624e3.jpg","available from: 08/11/2023");
        RentalCar.Maker("1500$","bugatti","luxury cars","https://i.pinimg.com/564x/e8/85/fb/e885fb7b8ccf003bd2e4be1ac2a77caf.jpg","available from: 09/11/2023");
        RentalCar.Maker("450$","marcedes","sport cars","https://i.pinimg.com/564x/73/a9/00/73a900a3dc9a695205b0d546d9148cb1.jpg","available from: 15/10/2023");
        RentalCar.Maker("500$","audi Q7","SUV cars","https://i.pinimg.com/564x/3e/0f/3a/3e0f3af713ee3a957bb2cb70376f0751.jpg","available from: 14/10/2023");
        RentalCar.Maker("1000$","camaro","sport cars","https://i.pinimg.com/564x/15/33/46/1533469fb9e0e7b6ded63160480abad5.jpg","available from: 01/11/2023");
        RentalCar.Maker("800$","mustang","sport cars","https://i.pinimg.com/564x/73/9b/35/739b353043bba7e94a10a567410b7572.jpg","available from: 05/11/2023");



      function display(item) {
        console.log(item)
        var id = item.id;
        $("#shop").append(`
        <section class="post container">
        <div class="post-box SUV CARS">
        <h1>${item.name}</h1>
        <img class = "post-img" src=${item.images} >
        <h2 class="category">${item.category}</h2>
        <a href="post-page.html" class="post-title"></a>
        <span class="post-date">${item.date}</span>
        <p class="post-description">${item.price}</p>
        <button class = "rent">Rent </button>
        </section>
        `);
      }


      function displayItems() {
        $("#shop").empty();
        for (var i = 0; i < this.list.length; i++) {
          display(this.list[i]);
        }
      }
      
      RentalCar.displayItems();
      
    
      
      function updateItem(id, prop, newValue) {
        this.list.forEach(function (item) {
          if (item.id === id) {
            item[prop] = newValue;
          }
        });
        console.log(this);
      
        this.displayItems();
      }
      
     
      
      $(".image").click(function () {
        var id = this.id;
        console.log(id);
        var src = this.src;
        var alt = this.alt;
        $(`#${id}`).attr("src", alt);
        $(`#${id}`).attr("alt", src);
      });
      
    
      $("select").on("change", function () {
        var value = $(this).val();
        console.log(value);
        var filtered = RentalCar.list.filter(function (item) {
          return item.category === value;
        });
        $("#shop").empty();
        filtered.forEach(function (item) {
          display(item);
        });
      });

     $('.message').hide()
     $('.rent').click(function(){
      $('.message').show()
      $('#shop').hide()
      $('.hided').hide()
     })
   
      
      $("#cts").on("click", function () {
        var value = $("#search").val();
        console.log(value);
        var filtered = RentalCar.list.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
        $("#shop").empty();
        filtered.forEach(function (item) {
          display(item);
        });
      });
      window.onscroll = function() {
        scrollFunction();
      };
      
      function scrollFunction() {
        var scrollToTopButton = document.getElementById("scrollToTopButton");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopButton.style.display = "block";
        } else {
          scrollToTopButton.style.display = "none";
        }
      }
      
      function scrollToTop() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
      }