
document.getElementById('timeFrame').addEventListener('change', function() {
    var selectedValue = this.value;
    document.getElementById('msform').action = '/mealplanner/' + selectedValue;
});



document.addEventListener("DOMContentLoaded", function(){
var current_fs, next_fs, previous_fs; // fieldsets
var opacity;
var userData = {};

document.querySelectorAll(".next").forEach(function(nextBtn){
    nextBtn.addEventListener("click", function(){
        current_fs = this.parentElement;
        next_fs = this.parentElement.nextElementSibling;

        // Add Class Active
        document.querySelectorAll("#progressbar li")[Array.prototype.indexOf.call(document.querySelectorAll("fieldset"), next_fs)].classList.add("active");
        document.querySelectorAll("fieldset").forEach(function(fs){
            if (fs !== next_fs) {
                fs.style.display = "none";
            }
        });

        ///
        var inputs = next_fs.querySelectorAll("input, select");
        inputs.forEach(function(input){
            userData[input.id] = input.value;
        });
        console.log(userData);

        // Show the next fieldset
        next_fs.style.display = "block";

        // to store user nputs
        

        // Hide the current fieldset with style
        var animationInterval = setInterval(function(){
            if (opacity >= 1){
                clearInterval(animationInterval);
            }
            opacity += 0.1;
            current_fs.style.opacity = 1 - opacity;
            next_fs.style.opacity = opacity;
        }, 60);
    });
});

document.querySelectorAll(".previous").forEach(function(prevBtn){
    prevBtn.addEventListener("click", function(){
        current_fs = this.parentElement;
        previous_fs = this.parentElement.previousElementSibling;

        // Remove class active
        document.querySelectorAll("#progressbar li")[Array.prototype.indexOf.call(document.querySelectorAll("fieldset"), current_fs)].classList.remove("active");

        document.querySelectorAll("fieldset").forEach(function(fs){
            if (fs !== previous_fs) {
                fs.style.display = "none";
            }
        });

        // Show the previous fieldset
        previous_fs.style.display = "block";

        // Hide the current fieldset with style
        var animationInterval = setInterval(function(){
            if (opacity >= 1){
                clearInterval(animationInterval);
            }
            opacity += 0.1;
            current_fs.style.opacity = 1 - opacity;
            previous_fs.style.opacity = opacity;
        }, 60);
    });
});

document.querySelectorAll(".radio-group .radio").forEach(function(radio){
    radio.addEventListener("click", function(){
        this.parentElement.querySelectorAll(".radio").forEach(function(radio){
            radio.classList.remove("selected");
        });
        this.classList.add("selected");
    });
});

document.querySelectorAll(".submit").forEach(function(submitBtn){
    submitBtn.addEventListener("click", function(){
        return false;
    });
});


/////
// document.getElementById('msform').addEventListener('submit', function(event) {
// 	event.preventDefault(); // Prevent form submission
// 	let mealobject={timeFrame:"",targetCalories:"",diet:"",exclude:""}

// 	console.log("hellooo");
// 	var timeframe = document.getElementById('timeFrame').value;
// 	mealobject["timeFrame"]=timeframe
// 	var calories = document.getElementById('targetCalories').value;
// 	mealobject["targetCalories"]=calories
// 	var diet = document.getElementById('diet').value;
// 	mealobject["diet"]=diet
// 	var exclude = document.getElementById('exclude').value;
// 	mealobject["exclude"]=exclude

// 	// this.querySelectorAll('input, textarea').forEach(function(element) {
// 	// 	formData[element.name] = element.value;
// 	// });
// 	console.log(mealobject);
// 	console.log('Name:', timeframe);
// 	console.log('calories:', calories);
// 	console.log('diet:', diet);
// 	console.log('exclude:', exclude);

// 	displayMealPlan(mealobject)

// 	// You can now use these values as needed, such as sending them to a server using AJAX
// });

// function displayMealPlan(mealobject){
// 	console.log(mealobject["timeFrame"])
// 	fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=${mealobject["timeFrame"]}&targetCalories=${mealobject["targetCalories"]}&apiKey=668459505d964573bdefa9396899795c`)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data);
            
// 		})
// 		.catch(error => {
// 			console.error('Error fetching data:', error);
// 		});
// }



});
