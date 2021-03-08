/** 
 * Jonathon Wager(100698641), Aaron Leblanc(100700122)
 * 2/5/2021
 * app.js
 * This file contains all of the java script to control the website pages
 * and also inject the site data in to the pages
*/
"use strict";
((core) =>
{
  /**
   * DisplayHome()
   * this function injects all of the site data for the index page
   */
    function displayHome()
    {
      InjectUsername();
     //Creating the first paragraph for the index page
        let paragraphOneText =
          "Welcome to Web Works, Our team at Web Works is dedicated to offering advanced web development creations that will make you stand out from the crowd.";
      //getting the p1 element from the page    
        let paragraphOneElement = document.getElementById("paragraphOne");
      //setting the text on the element and setting font size
        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";
      
      //Creating new paragraph element  
        let newParagraph = document.createElement("p");
      //Setting id attribute on the new element and setting its text to the second paragraph on the page
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "Our team consits of two dedicated students that are currently enrolled in the Computer programmer and Analysis course at Durham College located in Northern Oshawa. ";
      //getting the first set of main tags element
        let mainContent = document.getElementsByTagName("main")[0];
      //appending the new paragraph to the main tag
        mainContent.appendChild(newParagraph);
      //setting font size
        newParagraph.className = "fs-6";

      //creating final element to hold 3rd paragraph
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `Oshawa. Our skill sets are growing every day and we are profecient in HTML, CSS, Java, C++,
        database development, automations and much more. Contact our team with inqueries and you will get a response within one business day`;
        paragraphDiv.innerHTML = paragraphThree;
        //injecting final paragraph
        newParagraph.after(paragraphDiv);
        
    }
  /**
   * DisplayAbout()
   * this function injects all of the site data for the about page
   */
    function displayAbout()
    {
      let paragraphOneText = "I'm twenty years old and I'm currently enrolled in the Computer Programmer and Analysis course at Durham College. I spent one year at Ontario Tech University doing game development before switching into my current program. I enjoy programming and design, spending time with friends and going to music festivals. In future I aspire to be a succesful software developer and be able to travel too many countries and support my family.";

      let projectsDiv1 = document.getElementById("AboutAaronContent");

      let projectsP1 = document.createElement("p");

      projectsP1.textContent = paragraphOneText;

      projectsDiv1.appendChild(projectsP1);

      let paragraph2Text = "My name is Jonathon Wager and i am currently enrolled in the Computer Programmer and Analysis course at Durham College. I am very interested in  science and coding. Some of my hobbies include Auto Racing, Skateboarding and snowboarding. I live in a small town in Uxbridge Ontario but frecently spend time at the family cottage in Haliburton Ontario ";

      let projectsDiv2 = document.getElementById("AboutJonathonContent");

      let projectsP2 = document.createElement("p");

      projectsP2.textContent = paragraph2Text;

      projectsDiv2.appendChild(projectsP2);
    }

    /**
     * displayProjects()
    * this function injects all of the site data for the Projects page
    */
    function displayProjects()
    {
      let paragraphOneText = "The following project focus was on developing our skills in object-orientated programming as we were developing a program that would create card objects that could be used for a wide variety of purposed including implementing into hundreds of different card games. The project was one of our favourites because it widned our skill set and showed us even further how useful object-orientate programming can be.";

      let projectsDiv1 = document.getElementById("DeckOfCardsContent");

      let projectsP1 = document.createElement("p");

      projectsP1.textContent = paragraphOneText;

      projectsDiv1.appendChild(projectsP1);


      let paragraph2Text = "This next project was from our Systems and Automation class where we create a GPA calculator program that was able to handle input, and formatted output containing calculations for averages and more. This project was one of our other favourites because it worked perfectly and we learned a lot of things in the process of completing the project.";

      let projectsDiv2 = document.getElementById("GPACalculatorContent");

      let projectsP2 = document.createElement("p");

      projectsP2.textContent = paragraph2Text;

      projectsDiv2.appendChild(projectsP2);


      
      let paragraph3Text = "The last project we will be showcasing was the website we built over the course of the semester for the Web Development course if first semester of our second year. This was one of our favourite projects because we learned so much along the way to the end of the project including skills in HTML, CSS, PHP and PGSQL. Our website was able to handle login using data from our database with encrypted passwords and had tables on our website that were directly pulled from its database. ";

      let projectsDiv3 = document.getElementById("WebsiteContent");

      let projectsP3 = document.createElement("p");

      projectsP3.textContent = paragraph3Text;

      projectsDiv3.appendChild(projectsP3)

     
    }
    /**
     * displayServices()
    * this function injects all of the site data for the Services page
    */
    function displayServices()
    {
      let paragraphOneText = "We have the ability to create interactive websites that will stand out and make you look professional. We can apply custom themes to style your website as well as make it an interactive website that is effeciently navigable.";

      let projectsDiv1 = document.getElementById("WebDesignContent");

      let projectsP1 = document.createElement("p");

      projectsP1.textContent = paragraphOneText;

      projectsDiv1.appendChild(projectsP1);

      let paragraphTwoText = "We can create small to medium sized databases that will be able to meet your business needs. We can then implement the database into your website so that you can take your business to the next level.";

      let projectsDiv2 = document.getElementById("DatabaseDevelopmentContent");

      let projectsP2 = document.createElement("p");

      projectsP2.textContent = paragraphTwoText;

      projectsDiv2.appendChild(projectsP2);

      let paragraphThreeText = "We can create small to medium sized databases that will be able to meet your business needs. We can then implement the database into your website so that you can take your business to the next level.";

      let projectsDiv3 = document.getElementById("CustomProgrammingContent");

      let projectsP3 = document.createElement("p");

      projectsP3.textContent = paragraphThreeText;

      projectsDiv3.appendChild(projectsP3);
      
    }
    /**
     * displayContact()
    * This headers back to the index page when the user has submited the form
    * on the contact page
    */
    function displayContact()
    {
      //getting send button element
        let sendButton = document.getElementById("sendButton");
        //when the user clicks submit header back to home page
        sendButton.addEventListener("click", function(event){
           window.location.href = "index.html";
           
        });
    }

    /**
     * displayHumanResource()
    * this function injects all of the site data for the HR page
    */
    function displayHumanResource()
    {
      let paragraphOneText = "Human Resources are in charge of the employee life cycle at an organization. Responsibilities include updating employement records, transferring employees, promoting and terminating employees. At Web Works our lead Human Resources Representatives is split between Jonathon Wager and Aaron LeBlanc to satisfy the requirements of the position. Our responbilities also include but are not limited too, determining what employees can and can't do, determine the need for staff and if employees must be hired or fired, recruiting the best candidates for the positions we must fill, supervising the work of those within the company, evaluating work of employees and establishing discipline in the work place while ensure no discrimination occurs.";

      let projectsDiv1 = document.getElementById("HRcontent");

      let projectsP1 = document.createElement("p");

      projectsP1.textContent = paragraphOneText;

      projectsDiv1.appendChild(projectsP1);

    }
    /**
     * SetProjects()
     * This function injects the word projects to replace the word products on the navbar
     */
    function SetProjects(){
      //getting element that holds the product nav link
      let navbarProjects = document.getElementById("projects");
      //injecting new name
      navbarProjects.innerHTML = '<i class="fas fa-cog fa-lg"></i>Projects';
    }
    /**
     * InjectHR()
     * This function injects the nav link Human Resource in to the Nav bar
     */
     function InjectHR(){
       //getting ul tage element
      let navContent = document.getElementsByTagName("ul")[0];
      //creating two new elements one li and one a
      let navContentHumanResourceLi = document.createElement("li");
      let navContentHumanResourceA = document.createElement("a");
     //setting atributes for li element
      navContentHumanResourceLi.setAttribute("class", "nav-item");
      //setting atributes for a element
      navContentHumanResourceA.setAttribute("class","nav-link");
      navContentHumanResourceA.setAttribute("aria-current", "page");
      navContentHumanResourceA.setAttribute("href", "human_resource.html");
      //injecting html name human resource
      navContentHumanResourceA.innerHTML ='<i class="fas fa-people-arrows"></i>Human Resource ';
      //appending the a element to the li element
      navContentHumanResourceLi.appendChild(navContentHumanResourceA);
      //append the li element to the navContent
      navContent.appendChild(navContentHumanResourceLi);
     }

     /**
      * InjectBottomNav()
      * this function injects the bottom nav bar containing the copy right symbol and year at the bottom of the page
      */
     function InjectBottomNav(){
       //getting the footer element
      let bottomNavContent = document.getElementsByTagName("footer")[0];
      //creating new nave element
      let navContentFooterNav = document.createElement("nav");
      navContentFooterNav.setAttribute("class","navbar fixed-bottom navbar-light bg-light");
      //creating new div element
      let navContentDiv = document.createElement("div");
      //setting new div attributes
      navContentDiv.setAttribute("class", "container-fluid");

      //creating new h4 element
      let navContentH4 = document.createElement("h4");
      //setting text for h4 element
      navContentH4.innerHTML = '<i class="far fa-copyright fa-lg"></i> Copyright 2021';
      //appending all the elements together and adding them to the footer
      navContentFooterNav.appendChild(navContentDiv);
      navContentDiv.appendChild(navContentH4);
      bottomNavContent.appendChild(navContentFooterNav);
     }

     /*
     * InjectUsername() Function used to inject the username grabbed from the form ontop the navbar
     */
     function InjectUsername()
     {
      if(sessionStorage.getItem("user"))
      {
        let usersName = sessionStorage.getItem("user");
        
         // Finding the element by id and setting its content to the userName value
        document.getElementById("usernameInputID").innerHTML = usersName;      
      }
         console.log(sessionStorage.getItem("user"));
         
         
     }

     /*
     * Function displayLogin() used to inject all of the site data for the login page
     */
     function displayLogin()
     {
       let messageArea = $("#messageArea");
       messageArea.hide();
 
       $("#loginButton").on("click", function() 
       {
         let username = $("#username");
         let password = $("#password");
         let success = false;
         let newUser = new core.User();
 
         // use ajax to access the json file
         $.get("./Data/users.json", function(data)
         {
           // check each user in the users.json file  (linear search)
           for (const user of data.users) 
           {
             if(username.val() == user.Username && password.val() == user.Password)
             {
               newUser.fromJSON(user);
               success = true;
               break;
             }
           }
 
           // if username and password matches - success... then perform login
           if(success)
           {


             // add user to session storage
             sessionStorage.setItem("user", newUser.serialize());
 
             // hide any error message
             messageArea.removeAttr("class").hide();

                          // Calling inject username function
                          InjectUsername();
 
             // redirect user to secure area - contact-list.html
             //location.href = "index.html";
           }
           else
           {
             // display an error message
             username.trigger("focus").trigger("select");
             messageArea.show().addClass("alert alert-danger").text("Error: Invalid login information");
           }
         });
       });
 
       $("#cancelButton").on("click", function()
       {
         // clear the login form
         document.forms[0].reset();
         // return to the home page
         location.href = "index.html";
       });
     }
     
     /*
     * Function testNames() used to validate form entries for first and last names
     * function gets passed first name and last name and returns boolean if valid
     */
     function testNames(fName, lName){
      let messageArea = $("#messageArea");
       let isValid = true;
       // checking if the first name and last name are less than 2 characters
       if(fName.length < 2 || lName.length < 2){
         // setting isValid to false because if statement was met
         isValid = false;
         // Displaying an alert message
         messageArea.show().addClass("alert alert-danger").text("Please enter valid First and Last names ie.Must be greater than a character long");
       
       }
       return isValid;
     }

     /*
     * function testEmailAddress used to validate the email address form entry field
     * checks that the email has a @ symbol and that minimum length is at least 8
     * displays and error message if invalid email is entered return a boolean isValid
     * if the email passes the checks
     */
     function testEmailAddress(email)
     {
       let messageArea = $("#messageArea");
       let isValid = true;
       
       let hasAt = email.includes("@");

       // if email legnth is less than eight characters and dosen't contain an @ symbol
       if(!hasAt || email.length < 8){
         // setting isValid to false
         isValid = false;
         // displaying alert message for valid email address
         messageArea.show().addClass("alert alert-danger").text("Please enter a valid Email Address.");
       }
       
       // returning isValid 
       return isValid;
     }

     /*
     * function passwordCheck to validate the password from the form
     */
     function passwordCheck(Password, confirmPassword){
        let messageArea = $("#messageArea");
        let isValid = true;
        // if the password is not equal to the confirm password and the length is less then six
        if(Password != confirmPassword || Password.length < 6){
          // set is valid to false
          isValid = false;
          // display an alert message that passwords don't match or are not to length
          messageArea.show().addClass("alert alert-danger").text("Passwords do not match or are not entered at least six characters");
        }
        // return is valid
        return isValid;
     }

     /*
     * function getUserName that takes first name and alst name as parameters and returns userName which is firstname + last name
     */
     function getUserName(fName, lName){
       let userName ="";
       // setting username equal to firstname plus last name in lower case
       userName = fName.toLowerCase() + lName.toLowerCase();
       return userName;
     }

     /*
     * function getDisplayName that sets a variable name display name to first name + last name and takes first and last name as parameters
     */
     function getDisplayName(fName, lName){
       // Setting displayName variable to first name plus last name with space in between
       let displayName = fName + " " + lName;
       // returning displayName variable
       return displayName;
     }

     /*
     * function displayRegister() that displays register page and contains all javascript and jquery used to alter the page
     */
     function displayRegister(){
      let messageArea = $("#messageArea");
      messageArea.hide();
      let testCount = 0;

      $("#submitButton").on("click", function() 
      {
        testCount = 0;
        // Setting variables and their respective values accordingly 
        let firstName = $("#firstName");
         let lastName = $("#lastName");
         let email = $("#emailAddress");
         let password = $("#password");
         let cPassword = $("#confirmPassword");
         
         if(testEmailAddress(email.val())){
           testCount++;
         }
         if(testNames(firstName.val(), lastName.val())){
           testCount++;
         }
         if(passwordCheck(password.val(), cPassword.val())){
           testCount++;
         }
         console.log(testCount);
         if(testCount == 3){
           // calling getUserName() and getDisplayName and storing values in variables
          let userName = getUserName(firstName.val(), lastName.val());
          let displayName = getDisplayName(firstName.val(), lastName.val());
          // creating a User object called registeredUser
          const registeredUser = new User(displayName, email.val(), userName, password.val());
          messageArea.hide();
          
          // Resetting registerForm id
          document.getElementById("registerForm").reset();
          // login to console the registeredUser User object
          console.log(registeredUser.toString());
         }    
      });
      
     }
     /**
      * Start()
      * This function is called on website start
      */
    function Start()
    {
      console.log("App Started...");
      //calling all functions required to start website
      SetProjects();
      InjectHR();
      InjectBottomNav();
        switch (document.title) 
        {
          // Case statements for display functions
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
            case "HumanResource":
              displayHumanResource();
              break;
              case "Login":
            displayLogin();
          break;
          case "Register":
            displayRegister();
          break;
        }
        
    }

    //on load event call the start function
    window.addEventListener("load", Start);

    // Creating new class called User
    class User 
    {
      // getters and setters
      get DisplayName() 
      {
        return this.m_displayName;
      }
      
      // DisplayName setter
      set DisplayName(value) 
      {
        this.m_displayName = value;
      }
    
      // EmailAddress getter
      get EmailAddress() 
      {
        return this.m_emailAddress;
      }
    
      // EmailAddress setter
      set EmailAddress(value) 
      {
        this.m_emailAddress = value;
      }
  
      // Username Getter
      get Username() 
      {
        return this.m_username;
      }
    
      // Username setter
      set Username(value) 
      {
        this.m_username = value;
      }
  
      // Password getter
      get Password() 
      {
        return this.m_password;
      }
    
      // Password Setter
      set Password(value) 
      {
        this.m_password = value;
      }
    
      // constructor
  
      /**
       * Creates an instance of User.
       * @param {string} [displayName=""]
       * @param {string} [emailAddress=""]
       * @param {string} [username=""]
       * @param {string} [password=""]
       */
      constructor(displayName = "", emailAddress = "", username = "", password="") 
      {
        this.DisplayName = displayName;
        this.EmailAddress = emailAddress;
        this.Username = username;
        this.Password = password;
      }
  
      // methods
  
      /**
       * This method overrides the built-in toString method for the User class
       *
       * @returns {string}
       */
      toString() 
      {
        return `Display Name     : ${this.DisplayName} \nEmail Address : ${this.EmailAddress} \nUsername : ${this.Username}`;
      }
  
      /**
       * This method returns a JSON object made up of the properties of the User class
       *
       * @returns {Object}
       */
      toJSON()
      {
        return {
          "DisplayName": this.DisplayName,
          "EmailAddress": this.EmailAddress,
          "Username": this.Username
        }
      }
  
      /**
       * This method takes a JSON data object and assigns the values to the User class properties
       *
       * @param {Object} data
       */
      fromJSON(data)
      {
        this.DisplayName = data.DisplayName;
        this.EmailAddress = data.EmailAddress;
        this.Username = data.Username;
        this.Password = data.Password;
      }
  
      /**
       * This method converts the User into a comma-separated value string
       *
       * @returns {string}
       */
      serialize()
      {
        if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
        {
          return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
        }
        else 
        {
          console.error("One or more properties of the User is empty");
          return null;
        }
      }
  
      /**
       * This method takes a comma-separated data string and assigns the values to the User class properties
       *
       * @param {string} data
       * @return {void}
       */
      deserialize(data)
      {
        let propertyArray = data.split(",");
        this.DisplayName = propertyArray[0];
        this.EmailAddress = propertyArray[1];
        this.Username = propertyArray[2];
      }
    }
  
    core.User = User;
  })(core || (core={}));