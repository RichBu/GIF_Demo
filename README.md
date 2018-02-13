# GIF Demo

by Rich Budek 02/13/2018

Project location for viewing   [richbu.github.io](https://richbu.github.io/GIF_Demo/)

Description:
This is a demonstration of the posibilities of manipulating GIF's.  The program starts out with ten "topic" buttons.  If the user picks one of the topic buttons, then the 10 GIF's with that topic are pulled in and displayed.  If the user clicks on a GIF, it begins to be animated and plays in the background.  There are additional buttons which allow the user to stop all animations as well as running them.

Startup Screen:
The top row returns the user back to the portfolio
![Start up Screen](/assets/images/screen_caps/GIF_Demo_01.png)

Typing in a new topic and then hitting the enter key or the ADD button

![New game](/assets/images/screen_caps/GIF_Demo_02.png)


Then the new topic button is added to the "button row".

![Topic Selection](/assets/images/screen_caps/GIF_Demo_03.png)

The user can keep on entering more buttons

![Typical Question](/assets/images/screen_caps/GIF_Demo_03_04.png)



Technolgies used:
1. HTML for general page layout.  Handcoded to match porfolio pages
2. Responsive design
3. BootStrap for nice buttons and menu
4. Javascript for program functions
5. JQuery to talk to the HTML elements
6. API calls to Giphy
7. Processing API returns of JSON object
8. GIF control using "on click" functions and swapping urls

Internal design
1. Javascript manupulates the HTML elements directly using jQuery.
2. Most of code written as object and methods to make it clearer and easier to handle
3. All data is stored in objects and arrays for easy viewing and debugging.
4. API calls are made and the data is sent thru  "scrubbing" routines which parse the data and store it in an array.
5. The array data is then sent to two arrays that store the button data and the image data
6. Clicking on an image will invoke a routine that swaps out the url's of the statis and the animated versions.

Left to do:
1. Make the images looks pretty by putting them into panels.




