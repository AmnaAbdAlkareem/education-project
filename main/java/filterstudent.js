$(document).ready(function(){
    var data = [
        {
            "location": "Brazil",
            "course": "Programming",
            "gender": "Male",
            "name": "Smith",
            "image": "images/s4.jpg"
        },
        {
            "location": "Sudan",
            "course": "Math",
            "gender": "Female",
            "name": "Alaa",
            "image": "images/s5.jpg"
        },
        {
            
            "location": "Brazil",
            "course": "English",
            "gender": "Female",
            "name": "Alla",
            "image": "images/s3.jpg"
        },
        {
            "location": "Lebnon",
            "course": "Programming",
            "gender": "Female",
            "name": "Hala",
            "image": "images/s1.jpg"
        },
        {
            
            "location": "USA",
            "course": "English",
            "gender": "Male",
            "name": "Sam",
            "image": "images/s2.jpg"
        },
        {
            
            "location": "India",
            "course": "Math",
            "gender": "Female",
            "name": "Mery",
            "image": "images/s6.jpg"
        },
        {
            
            "location": "Lebnon",
            "course": "Markiting",
            "gender": "Female",
            "name": "Neven",
            "image": "images/s7.jpeg"
        },
        {
            
            "location": "Iraq",
            "course": "Physical",
            "gender": "Female",
            "name": "Fatima",
            "image": "images/s8.jpeg"
        },
        {
            "location": "USA",
            "course": "Markitning",
            "gender": "Female",
            "name": "Lolo",
            "image": "images/home2.jpg"
        },
        {
            "location": "Egypt",
            "course": "Math",
            "gender": "Female",
            "name": "Hanan",
            "image": "images/home3.jpg"
        },
        {
            "location": "Iraq",
            "course": "Programming",
            "gender": "Female",
            "name": "Huda",
            "image": "images/te2.jpg"
        },
        {
            "location": "Britain",
            "course": "Busniss",
            "gender": "Female",
            "name": "Enjella",
            "image": "images/t13.jpg"
        },
        {
            
            "location": "India",
            "course": "English",
            "gender": "Female",
            "name": "Sarah",
            "image": "images/t19.webp"
        },
        {
            "location": "USA",
            "course": "Programming",
            "gender": "Male",
            "name": "Lara",
            "image": "images/t15.jpg"
        },
        {
            "location": "Brazil",
            "course": "English",
            "gender": "Female",
            "name": "Reta",
            "image": "images/t16.jpg"
        },
        {
            "location": "Sudan",
            "course": "Math",
            "gender": "Female",
            "name": "Sandra",
            "image": "images/t17.jpg"
        },
        {
            "location": "Egypt",
            "course": "Programming",
            "gender": "Female",
            "name": "Donia sadiq",
            "image": "images/t14.jpg"
        },
        {
            "location": "Iraq",
            "course": "Programming",
            "gender": "Male",
            "name": "ahmed sadiq",
            "image": "images/t18.jpg"
        },
        {
            "location": "USA",
            "course": "Markiting",
            "gender": "Female",
            "name": "Mella Braeke",
            "image": "images/home1.png"
        },
        {
            "location": "Lebnon",
            "course": "English",
            "gender": "Male",
            "name": "Rami Yousif",
            "image": "images/t20.webp"
        }
    ];
    
    var teachers = "",
        locations = "",
        courses = "",
        genders = "";
        names = "";
    
    for (var i = 0; i < data.length; i++) {
        var location = data[i].location,
            course = data[i].course,
            gender = data[i].gender,
            name = data[i].name,
            image = data[i].image;
        
        //create teacher cards
        teachers += "<div class='col-sm-4 teacher' data-location='" + location + "' data-course='" + course + "' data-gender='" + gender + "' data-name='" + name + "'><div class='product-inner text-center'><img src='" + image + "'><br />Location: " + location + "<br />Course: " + course + "<br />Gender: " + gender + "<br />Name: " + name + "</div></div>";
        
        //create dropdown of makes
        if (locations.indexOf("<option value='" + location + "'>" + location + "</option>") == -1) {
            locations += "<option value='" + location + "'>" + location + "</option>";
        }
        
        //create dropdown of models
        if (courses.indexOf("<option value='" + course +"'>" + course + "</option>") == -1) {
            courses += "<option value='" + course + "'>" + course + "</option>";
        }
        
        //create dropdown of types
        if (genders.indexOf("<option value='" + gender + "'>" + gender + "</option>") == -1) {
            genders += "<option value='" + gender + "'>" + gender + "</option>";
        }
        //creat dropdown of names
        if (names.indexOf("<option value='" + name + "'>" + name + "</option>") == -1) {
            names += "<option value='" + name + "'>" + name + "</option>";
        }
    }
    
    $("#teachers").html(teachers);
    $(".filter-location").append(locations);
    $(".filter-course").append(courses);
    $(".filter-gender").append(genders);
    $(".filter-name").append(names);
    
    var filtersObject = {};
    
    //on filter change
    $(".filter").on("change",function() {
        var filterName = $(this).data("filter"),
            filterVal = $(this).val();
        
        if (filterVal == "") {
            delete filtersObject[filterName];
        } else {
            filtersObject[filterName] = filterVal;
        }
        
        var filters = "";
        
        for (var key in filtersObject) {
              if (filtersObject.hasOwnProperty(key)) {
                filters += "[data-"+key+"='"+filtersObject[key]+"']";
             }
        }
        
        if (filters == "") {
            $(".teacher").show();
        } else {
            $(".teacher").hide();
            $(".teacher").hide().filter(filters).show();
        }
    });
    
    //on search form submit
    $("#search-form").submit(function(e) {
        e.preventDefault();
        var query = $("#search-form input").val().toLowerCase();
    
        $(".teacher").hide();
        $(".teacher").each(function() {
            var location = $(this).data("location").toLowerCase(),
                course = $(this).data("course").toLowerCase(),
                gender = $(this).data("gender").toLowerCase();
                name = $(this).data("name").toLowerCase();
    
            if (location.indexOf(query) > -1 || course.indexOf(query) > -1 || gender.indexOf(query) > -1) {
                $(this).show();
            }
        });
    });
    });