# Dream Holiday Destinations

## Executive Summary of The Website

My second mile-stone project for my school [Code Institute](https://codeinstitute.net/)
This is a simple single web page application where users can search where they want to travel and explore different cities and local restaurants, tourist attractions, accomodation and transport with the search bar above google maps. You can view the live site [here](https://markofsuccess.github.io/interactive-front-end-mile-stone-project/) <br><br> Its very easy to use for anyone, just choose a country and search for city where you want to travel, then chose between different attraction types. A table of results will show under the map showing each marker on the map where it is located, when pressing on any of the markers either on the map or in the results table, detailed info for that specific attraction will show. <br><br> The site is quite simple, its a project I worked long on and in the last phase of the project I decided to test a slightly new design with some old features from before, the main difference was intemplenting more of the Google Place Autocomplete Search in order to make the site more interactive and useful for the users.<br><br> I added a question mark icon when clicked, showing a infobox explaining what the site is about, also added social media link icon for my Github and LinkedIn sites hence if 
anyone would like to get in contact me.   

## The Goal & Purpose of The Website

### The Goal

* The goal of the website is for users to explore the world by searching for any destination they want, and giving the users options to chose what attractions there are in the area they searched for. <br><br> When the users selects an attraction type, the results are show on the map with markers when clicked on displaying detailed information suchs as contact numbers, addresses and website links. The users can really explore any city in the world and see results of many different attraction types in a clear simple way.

### Purpose

* The project purpose is to show how accessing, manipulating and displaying data retrieved from a third-party API resource. The website uses the Google Maps API and Google Places Library to render and visualise search results.

# UX

The website is for individuals who want to explore the world map and see what attractions & destinations in the world they might want to visit. They can easily do it trough just using the search bar just above the map to search for whatever destinations or attractions they would like to visit, and the map will zoom in to whatever destination they search for.

* As a user, I want to perform a seach on the map for a destination I'm intrested in visiting.
* As a user, I want to see what local attratcions there are, like restaurants, shopping, art galleries, spa, train stations, casinos, night clubs, musems and ATM's.
* As a user, I want to know the detailed information such as contact numbers, addresses and websites about the different attractions types.

## Design

* The design of the website is made as simple and minimalistic as possible and visually light appealing for the eye. This site is defined to interactive front-end design only (HMTL, CSS and JavaScript).

## Mockup

[Please find paper and pen mockup for the original design here](https://github.com/markofsuccess/interactive-front-end-mile-stone-project/blob/master/assets/images/mockup.jpeg)

# Features

### Existing Features

* The user can press on the question mark icon next to the navbar title to find out what the site is about.
* When user search for any destination, it will zoom in on their search and returning whatever attraction they chosen to see.
* The user can see local results for restaurants, hotels, shopping, art galleries, spa and train stations for their chosen destination.
* The user can press on any of the result markers both on the map and in the resultstable to find out info about the attraction/establishment.
* The results list for different activities is shown with a table under the map.

### Features Left to Implement

* Email JS or other email contact form on the site.
* Adding map style selector to the map so users can choose what map style they prefer.
* Changing the marker icons.
* Change the table of results list to something more neat.

## Technologies Used

The technologies used in this project were:

* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

* [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3)

* [Bootstrap](https://getbootstrap.com/)
  * Boostrap was used mainly to make different divs on the website responsive on multiple devices using bootstrap grid.

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * JavaScript language is being used to execute different functions of Google maps API.

* [Google Maps & Places API](https://cloud.google.com/maps-platform/)
  * Google maps and places api are being used to display a world map on the screen with locations and markers.

* [AWS Cloud 9](https://aws.amazon.com/education/awseducate/)
  * Amazon Cloud 9 IDE was used to develop the project.

* [jQuery](https://jquery.com/)
  * The project uses JQuery to simplify DOM manipulation. 

* [Github](https://github.com/)
  * Github was used to document the project progress and to host the website.

* [Favicon-Generator.org](https://www.favicon-generator.org/)
  * The Favicon was created with favicon-generator.org.

* [HTML & CSS Validator](https://validator.w3.org/)
  * This was used to validate the HTML and CSS code.

* [JavaScript Formatter](https://beautifier.io/)
  * This was used to format the JavaScript code.

## Testing

### Broswers

* The website was tested on the Google Chrome browser, Safari, Firefox Quantum and Brave broswer to make sure that everything loaded smoothly and looked proper across different browsers. Test were succesful on all browsers, on Brave browser however the markers on the map dont show for some reason.
* Google Chrome Version 76.0.3809.132
* Brave Version 0.61.52 Chromium: 73.0.3683.86
* Safari Version 12.1.2 (14607.3.9)
* Firefox Quantum version 69.01

### Responsivness

* The site was tested on multiple devices using Google chrome developer tools to see the responsivness for different media devices. The devices that were tested were: Samsung S5, iPhone X, iPhone 5/6/7/8, iPhone 6/7/8 Plus, iPad and iPad Pro.

### Javascript

* JavaScript code was tested manually by using the google map searchbar to see if results were returning as should. Test were successful. Google chrome developer tools console was tested to see any error in JavaScript code, and console.log() for different functions from the code was tested.

### Searchbar & Country List

* Checked if all countries functioned and zoomed in when chosen, when typed in location in searchbar it returned results successfully and when chose different attractions to show on map that it returend successfully on both map and table list. Test were succesful.

### Social Meda icons

* The Github and LinkedIn icons in the navbar section were tested if opened up another page with their sites. Tests were successful.

### Dialog Box

* The infobox was tested on all devices, on mobile devices the infobox was to big so added mediq queries for small devices and after that its showing succesfully on all devices.

### Bugs

* The markers dont show on the map in the Brave Broswer.

# Deployment

1. Using AWS Cloud 9 to start the project. 
2. Creating a repository on Github
3. Using Ubuntu terminal in Cloud 9 and with command git init a local repository was created.
4. In Cloud 9 terminal command git push origin master in order to push it to the Github resporitory.
5. Deploy site to Github Pages:
  * Step 1: Go to my repository in Github
  * Step 2: Click on settings
  * Step 3: Scroll down and choose select master branch from dropdown
  * Step 4: Save and page done automatically 

# Credits

## Content

* All the Different Places Types to chose from was from [Google Place Types](https://developers.google.com/places/web-service/supported_types)
* Thanks [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript/tutorial) for lot of the JS code with some adjustments.
* JS code for Autocomplete Search was from [Google Maps Places Autocomplete Hotel Search Documentation](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)
* Dialog Box was created with help by [jQuery Documentation](https://jqueryui.com/dialog/#default)
* Thanks to Fabian Wiktor for the background image and favicon from [pexels](https://www.pexels.com/photo/seaside-994605/)