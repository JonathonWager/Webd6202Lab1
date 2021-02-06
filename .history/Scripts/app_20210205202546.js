/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

(function()
{
    function displayHome()
    {
     
        let paragraphOneText =
          "Welcome to Web Works, Our team at Web Works is dedicated to offering advanced web development creations that will make you stand out from the crowd.";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "Our team consits of two dedicated students that are currently enrolled in the Computer programmer and Analysis course at Durham College located in Northern Oshawa. ";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        // another way of injecting content
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `Oshawa. Our skill sets are growing every day and we are profecient in HTML, CSS, Java, C++,
        database development, automations and much more. Contact our team with inqueries and you will get a response within one business day`;
        paragraphDiv.innerHTML = paragraphThree;

        // insertions

        // example of inserting before a node
        //newParagraph.before(paragraphDiv);

        // example of inserting after a node
        newParagraph.after(paragraphDiv);

        // deletions

        // example of removing a single element
        //paragraphOneElement.remove();

        // example of removeChild
        //mainContent.removeChild(paragraphOneElement);

        // update / modification
        mainContent.firstElementChild.textContent = "Welcome Home!";
       
        
    }

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

    function displayContact()
    {
        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
           window.location.href = "index.html";
           
        });
    }

    function displayHumanResource()
    {

    }
    
     

    function Start()
    {
        console.log("App Started...");
        let navbarProjects = document.getElementById("projects");
        navbarProjects.innerHTML = '<i class="fas fa-cog fa-lg"></i>Projects';

       // let navContentHumanResource = '<li class="nav-item"><a class="nav-link" aria-current="page" href="services.html"><i class="fas fa-map fa-lg"></i> Services</a></li>';
        let navContent = document.getElementsByTagName("ul")[0];

        let navContentHumanResourceLi = document.createElement("li");
        let navContentHumanResourceA = document.createElement("a");

        // Step 2. configure the element
        navContentHumanResourceLi.setAttribute("class", "nav-item");
        
        navContentHumanResourceA.setAttribute("class","nav-link");
        navContentHumanResourceA.setAttribute("aria-current", "page");
        navContentHumanResourceA.setAttribute("href", "human_resource.html");
        navContentHumanResourceA.innerHTML ='<i class="fas fa-people-arrows"></i>Human Resource ';
        
        navContentHumanResourceLi.appendChild(navContentHumanResourceA);

        navContent.appendChild(navContentHumanResourceLi);
     
        


        let bottomNavContent = document.getElementsByTagName("footer")[0];
        
        let navContentFooterNav = document.createElement("nav");
        navContentFooterNav.setAttribute("class","navbar fixed-bottom navbar-light bg-light");

        let navContentDiv = document.createElement("div");
        navContentDiv.setAttribute("class", "container-fluid");

        let navContentH4 = document.createElement("h4");
        navContentH4.innerHTML = '<i class="far fa-copyright fa-lg"></i> Copyright 2021';
        navContentFooterNav.appendChild(navContentDiv);
        navContentDiv.appendChild(navContentH4);
        bottomNavContent.appendChild(navContentFooterNav);
   

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
        }
        
    }

    window.addEventListener("load", Start);

})();