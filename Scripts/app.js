/** 
 * Jonathon Wager(100698641), Aaron Leblanc(100700122)
 * 2/5/2021
 * app.js
 * This file contains all of the java script to control the website pages
 * and also inject the site data in to the pages
*/
"use strict";

(function()
{
  /**
   * DisplayHome()
   * this function injects all of the site data for the index page
   */
    function displayHome()
    {
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
        }
        
    }

    //on load event call the start function
    window.addEventListener("load", Start);

})();