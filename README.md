 Technologies Used:
HTML

CSS

JavaScript (OOP style)

⚙️ How It Works:
I used Object-Oriented Programming to create a class called Slider.

First, I selected the container element and all the slides using document.querySelectorAll().

Inside the constructor, I defined all the important DOM elements like the Next and Previous buttons.

I added event listeners to the buttons and used .bind(this) to make sure the correct context is kept when the methods are called.

I created a showSlide() method that:

Hides all the slides first,

Then displays only the current one based on the index.

I also added setInterval() to automatically change the slide every 4000 milliseconds (4 seconds), so the slider runs on its own too.

✅ What I Learned:
How to use classes in JavaScript for better structure.

How to manipulate the DOM using query selectors.

How to handle events and manage slide logic using indexes.

The importance of .bind(this) when working with class methods and event listeners.

