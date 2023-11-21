# outdoor-website
YearUp Capstone
 We were directed to create a website featuring HTML, CSS/ Bootstrap 5 and Javascript.It is a three page website that allows users to search different national parks and mountains to plan their next hiking adventure. I have  a national park and mountain pick of the week as if website users could poll each week which places they enjoyed the most.The first thing the user sees when they open the page is a video.I have two nav links that take you to the other pages as well as to buttons that are linked to the other pages and a footer

![home page](https://github.com/ojohnson1/outdoor-website/assets/77747463/baf6e895-c719-46e0-a41e-e4efeb6ac45b)

## National Park Page
 We were given three data files that would simulate as the database the user would be able to find information on the national parks in a certain location. I put these data files in a separate file in my scripts folder. The location data and parktype data was an array of strings and the national park data was an array of objects. 

So in the win.onload function I am calling my init parktype and location dropdown functions. Both of these dropdowns give the user a list of choices based on their choice of what to search by that being “by location or “by parktype. 

These choices are displayed as radio buttons. When a radio button is my SelectionTypeChosen function is being called. 
Initially both dropdowns are set to display none when the page is loaded and then depending on which radio button is selected the corresponding dropdown list display is set to block. 

Now once the user is ready to make a selection the dropdown functions connected to their onchange event handlers got to work.

Each time a selection is made.  The nationalparks array is filtered using the filter method and a new array is stored in a variable. In this example it’s stored in a variable name specified locations. Then each object in this array is then placed in the addparktocard function to be displayed. I used an arrow function to achieve that. 

![nationalpark](https://github.com/ojohnson1/outdoor-website/assets/77747463/727619dc-b9b3-4f02-9e3b-cbd8a0e457dd)
![code pic](https://github.com/ojohnson1/outdoor-website/assets/77747463/bd671e41-d231-4014-9899-0f0d14da4b19)

## Mountain Page
 For this page we were given two data files. I used a for loop to iterate through the array and append the object property of the mountain's names as  options for the dropdown. I used the find method because I only needed one value to match for the user search to be successful.
![mountain](https://github.com/ojohnson1/outdoor-website/assets/77747463/eb66edac-7c39-4258-994e-8c17018c2e1d)
