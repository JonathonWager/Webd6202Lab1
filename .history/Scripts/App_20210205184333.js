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

    }

    function displayProjects()
    {

    }

    function displayServices()
    {

    }

    function displayContact()
    {
        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        // form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
            //event.preventDefault();
            
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);

            if(contact.serialize())
            {
              localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
            }
           
        });
    }

    function displayContactList() 
    {
      if (localStorage.length > 0) 
      {
        let contactList = document.getElementById("contactList");

        let data = "";

        for (let index = 0; index < localStorage.length; index++) 
        {
          let contactData = localStorage.getItem((index + 1).toString());

          let contact = new Contact();
          contact.deserialize(contactData);

          data += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
        </tr>`;
        }

        contactList.innerHTML = data;
      }
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
          case "Contact-List":
            displayContactList();
          break;
        }
        
    }

    window.addEventListener("load", Start);

})();