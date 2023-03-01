# Sneaky Clean

This site can be accessed as a GitHub Page [here](https://wsvoboda.github.io/sneakyclean/).

Sneaky Clean is a faux shoe-cleaning company that provides pickup and delivery to customers within a 50 mile radius of their physical locations.

The logo was created using the logo feature on canva.com.

![image](https://user-images.githubusercontent.com/78281930/114891693-b6786000-9dd1-11eb-85e7-a07a3c801e83.png)

The homepage provides short blurbs on the company and shows pictures of various types of shoes. There are faux reviews at the bottom of the page.

![image](https://user-images.githubusercontent.com/78281930/114892002-fe978280-9dd1-11eb-8daf-3356433a9659.png)

## Locations

_Please note the maps on the "Locations" page will not load without a Google API key. My API key is omitted from the code on this repo for privacy reasons. These maps have been replaced by a static image for demonstration purposes._

The locations tab pulls interactive maps using the Google Maps API. The maps are marked with the faux locations of Sneaky Clean. The locations are actually the locations of my bootcamp, DigitalCrafts!

![image](https://user-images.githubusercontent.com/78281930/114892537-79609d80-9dd2-11eb-9508-a2117055b128.png)

Users are able to check if their zip code is within 50 miles of the physical store locations. The zip code check uses an API to check the distance between the Sneaky Clean location zip and the user's zip.

There is an if statement in the code deciding the output of the search. There are three possible outcomes of the search.

![image](https://user-images.githubusercontent.com/78281930/114893258-26d3b100-9dd3-11eb-9f4e-70d0fea0bb51.png)

![image](https://user-images.githubusercontent.com/78281930/114893373-3e129e80-9dd3-11eb-9e92-ff6e089df4f9.png)

![image](https://user-images.githubusercontent.com/78281930/114893416-4b2f8d80-9dd3-11eb-9dd3-bb5d33bc2650.png)

## Services

The services page provides a list of the services provided by the company. The services are displayed as cards.

![image](https://user-images.githubusercontent.com/78281930/114894306-2556b880-9dd4-11eb-8137-f4f80add1c04.png)

There is an order form at the bottom of the page to capture user input.

![image](https://user-images.githubusercontent.com/78281930/114894472-46b7a480-9dd4-11eb-9cd4-f4136296cfd2.png)

In the future, when including back-end functionality, this order form will be converted to a shopping cart.

Once the user submits the form, its input fields are cleared, and the user receives confirmation that their order was received.

![image](https://user-images.githubusercontent.com/78281930/114894771-8a121300-9dd4-11eb-87b6-c6af5a13ad21.png)

## Meet the Team

The Meet the Team page shows a button for each Sneaky Clean location.

![image](https://user-images.githubusercontent.com/78281930/114894975-b332a380-9dd4-11eb-8ef1-1d4129207bd8.png)

Depending on the button that is clicked, a team will be generated and their information will be displayed in cards. The name and photo for each card is pulled using an API of fake people's data. The job title and "About Me" blurb come from an array I created.

![image](https://user-images.githubusercontent.com/78281930/114895437-1fada280-9dd5-11eb-9e8a-d021d8a5797f.png)

---

This page is mobile responsive and utilizes Bootstrap framework for most styling.

---

My goal in creating this site was to use a framework for the majority of the styling. Styling using my own creative visions has not always resulted in the most aesthetically-pleasing product. I wanted to utilize a framework to help overcome these challenges! I am overall pleased with the result of this site. I look forward to being able to incorporate back-end functionality in order to impliment a shopping card and provide full functionality to some of my site's features.
