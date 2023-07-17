# Express-Dev-Skills

## Part 1 &check;

### Exercises &check;
The goal of the lab is to put in a rep doing everything that you did during the Express - Routers & Controllers lesson:

- [X] Be sure to create an array of “fake” data representing some of your awesome developer skills. The specific properties describing a skill object is up to you!

- [X] Implement index functionality for the skills resource

- [X] Implement show functionality for the skills resource

### Hints &check;
- [X] Keep the data resource name short and simple - something like skills.

- [X] Following best-practice routing and MVC will result in the following modules for the skills resource:
    - routes/skills.js
    - models/skill.js
    - views/skills
    - controllers/skills.js
- [X] Use [RESTful routes](https://gist.github.com/jim-clark/17908763db7bd3c403e6)

### Bonuses &check;
- [X] Use EJS partial views to make your templates more DRY (see link in Reference section of the lesson) and/or this link.

- [X] Add styling or use a CSS framework to make the app look better :)

---

## Part 2 &check;

### Intro &check;
In recent lessons you saw how to use HTML forms and Express middleware, such as:

- express.urlencoded (AKA body-parser middleware)
- method-override

to perform Create, Update & Delete data operations in an Express application.

This lab builds upon the express-dev-skills project you created in the My Dev Skills - Part 1 lab where the Read data operations were implemented.

This Lab is a Deliverable

### Exercises &check;
The goal of the lab is to do put in a rep doing everything that you did during the Express - Middleware lesson by adding the following functionality to the express-dev-skills project:

1. [X] Display an Add Skill link on the index view that when clicked, displays a new view that includes a form for entering a new Dev Skill.

2. [X] When a new Dev Skill is submitted, add the skill to the simulated “database” and redirect the user to the index view.

3. [X] On the show view, display a Delete Skill button (the submit button within a ```<form>```) that when clicked, deletes the skill from the “database” and redirects to the index view.

Note: All routes should follow those described in the RESTful/Resourceful routing chart

### Hints &check;
- [X] Be sure to install, require & mount the method-override middleware.

### Bonuses &check;
1. [X] On the show view, display an Edit Skill link that when clicked, displays an edit view that displays a form for editing that Dev Skill.

2. [X] When the edit Dev Skill form is submitted, the skill should be updated in the “database” then redirect the user back to the show view.

### Hints &check;
The controller action will need to get the Dev Skill being edited using the Skill Model and pass it to the edit view.
Prefill ```<input>``` elements by using the value attribute and some EJS tags to write out the data properties of the skill passed in, for example, an ```<input>``` used to edit a skill’s name property would look like the following (assuming you passed a skill object for the previous hint):

  ```<input type="text" name="name" value="<%= skill.name %>">```