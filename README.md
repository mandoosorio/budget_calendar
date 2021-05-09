# budget_calendar

![Issues Badge](https://img.shields.io/github/issues/mandoosorio/budget_calendar)


## Table of Contents
* [Title](#Title)
* [Description](#Description)
* [Usage](#Usage)


## Description
In this app, the user will be able to create an account or use the application as a guest. If the user chooses to create an account, they will be able to save multiple calendars which will be handled with MongoDB. If the user uses the app as a guest, then their data will be saved using local storage. This is an app using the MERN stack and hosted online through heroku. 


**In Progress**

<!-- ## Usage
For this app, the user is able to utilize it while offline. When the user is back online, their data will have been saved. -->


<!-- ![App Image](budget.png)
![Profile Image](https://avatars2.githubusercontent.com/u/65792333?v=4/to/img.png) -->


Database Collections:

User Collection: id, name, email, phone, calendars (added from calendars collection)
Todos Collection: id, description, priority, completed, expense, date
Calendars Collection: id, todos(added from todos collection), budget, month

1. user will create an account
2. Collection User will contain a new data entry with new registered user, calendars array is empty
3. the user will start by creating a new calendar by choosing the month and year. this will be recorded in the calendars collection.
4. once user creates their first todo, the data from the todo will be stored in the todos collection, and this same todo entry will be copied into the calendars array collection
5. the month and budget information entered by user will also be stored in the calendars collection
6. everytime a change occurs in any of the collection, the data will be pushed into the users collection calendars data array.
7. this will make the todos and calendars collections global with everyones data. This could be a cool thing for analytics purpose, we can display something like: "for the month of May, users have created a total of 1500 calendars." or "users have used this app to keep track of a total of 10000 reminders" 
8. Editing and Deleting Todos and Calendars: make changes in global collections and push changes to user's data??? or just make changes in user's data???
