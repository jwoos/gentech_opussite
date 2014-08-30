Parse.initialize("TPf2kF11biPfcF5yIrEKqw6rTRxjFRibGgSKy73A", "NOwE5UK4nwCEM1Irrl6h1iCSEh4tdR5FJe19ML1m");

//Parse Job Object
var Jobs = Parse.Object.extend("jobs");
var jobs = new Jobs();	

function jobFields() 
{
	//parse columns set to text input
    var jobType = document.getElementById('jobType');
	var jobName = document.getElementById('jobDescription');
	var jobPay = document.getElementById('jobPay');
	var jobTime = document.getElementById('jobTime');
	var jobDate = document.getElementById('jobDate');
	
	jobs.set("type", jobType);
    jobs.set("name", jobDescription);
	jobs.set("pay", pay);
	jobs.set("date", jobDate);
	jobs.set("time", jobTime);
	
    //Pushes to parse
    jobs.save(null, {
    	success: function(jobs) 
    	{
    		alert("New job saved sucessfully:" + "\n Job Type: " + jobType + " \n Name: " + jobName +" \n Company: " + jobCompany);
			window.location.assign('congratz.html');
    	},
    	error: function(jobs, error) 
    	{
    		alert('Failed to save job ' + error.message);
    	}
    });

    /* this.jobQuery = function()
    {
    	var query = new Parse.Query(Jobs);
    	query.find({
    		success: function(results)
    		{
    			alert("Successfully retrieved " + results.length + " jobs.");
    			for (var i = 0; i < results.length; i++) 
    			{
    				var listJob = results[i];
    				alert(listJob.id + ' - ' + listJob.get('company'));
    			}	
    		},

    		error: function(error)
    		{
    			alert("Error: " + error.code + " " + error.message);
    		}
    	});

    	alert("CAN QUERY!!");
    }
    jobQuery(); */
}

//Parse business object
var Business = Parse.Object.extend("User");
var business = new Business();	

function signUp()
{
    //HTML user account info input
    var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
        phone = parseInt(phone);    
    var password = document.getElementById('password').value;
    var reEnter = document.getElementById('reEnter').value;
	
	business.set("name", name);
	business.set("username", email);
	business.set("email", email);
    business.set("phone", phone);
    business.set("password", password);
	business.set("type", "business");

    if(password == reEnter)
    {
        business.signUp(null, {
          success: function(business) 
          {
            alert('Signup successful!');
			window.location.assign('home.html');
          },
          error: function(business, error) 
          {
            alert("Error: " + error.code + " " + error.message);
          } 
        });
    }
    else
    {
        alert('Passwords do not match. Please try again.');
    }
}

//For user to log in in index.html
function logIn()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    Parse.Business.logIn(email, password, {
      success: function(business) {
        window.location.assign('studentprofile.html');
        gloEmail = 'Global Test';
         // Do stuff after successful login.
        },
      error: function(business, error) {
        alert("Login Failed \n Incorrect email or password");
        document.getElementById('login').href='#';
        // The login failed. Check error to see why.
        }
    });

    //Sets as current user
    var currentBusiness = Parse.Business.current();
    if (currentBusiness) 
    {
    // do stuff with the user
    } 
    else 
    {
    // show the signup or login page
    }
}

//Loading information to studentprofile.html
function loadBusiness()
{
    var business = Parse.Business.current();

    business.fetch().then(
        function(business)
        {
            var name = business.get('name');

            var email = business.get('email');
            var phone = business.get('phone');

            /* var imageFile = user.get('profilePic');
            var imageURL = imageFile.url(); */
			
			var aboutMe = business.get('about');

            document.getElementById('name').innerHTML = name;
            document.getElementById('email').innerHTML = email;
            document.getElementById('phone').innerHTML = phone;
            document.getElementById('profilePic').src = imageURL;
			document.getElementById('about').innerHTML = aboutMe;
        }, 
        function(error){
             //Handle the error
             console.log('Fetch Error: ' + error);
        });
}


// http://stackoverflow.com/questions/6280495/populate-html-table-using-javascript 

        //RESERVED FOR BROWSER FUNCTIONALITY    
// function uploadPic()
// {
//     var user = new Parse.User();
//  //Uploading photo to parse
//     var fileUpload = $("#profilePhoto")[0];
//     if (fileUpload.files.length > 0) 
//     {
//       var file = fileUpload.files[0];
//       var name = "photo.jpg";
//       var parseFile = new Parse.File(name, file);
//     }

//     parseFile.save().then(function() {
//       //alert('File uploaded!'); 
//     }, function(error) {
//       alert('The file either could not be read, or could not be saved to Parse');
//     });
//     user.set("profilePic", parseFile);
//     //Pushes photo to parse
//     user.save(null, {
//         success: function(user) 
//         {
//             //alert("Photo saved!"); 
//         },
//         error: function(user, error) 
//         {
//             alert('Failed to save photo ' + error.message);
//         }
//     });
// }

//HTML job form text input

/* var jobType = document.getElementById('jobType').value;
var jobName = document.getElementById('jobName').value;
var jobCompany = document.getElementById('jobCompany').value; */