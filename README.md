# Calendar

*Spotify NYC Technology Fellowship Program Stage Two:* A digital calendar on the web to create events of your own.

This calendar is built in React, Redux, Express, Sequelize, PostgreSQL, Bootstrap 4, SCSS and HTML5.

## Features

Front End

- [x] One month hard coded view (June with 5 rows of 7 boxes).
- [x] One hard coded user (Me).
- [x] Create a same-day event on a date by clicking that date's box to submit a form (Name, Start/End Time, Description).
- [x] Event sent to the backend and stored in the database.
- [x] Form disappearing after clicking the submit button.
- [x] Event appearing in that date's box.
- [x] View that created event.
- [x] Update/delete that event.
- [x] Events fitting in a given date's box.
- [x] Display all events the user has on their calendar.
- [x] Communicate with an API backend using JSON.

Back End

- [x] Create an event by sending a `POST` request to the `/events` API.
- [x] Return all events by sending a `GET` request to the `/events` API.
- [x] Update an existing event by sending a `PUT` request to the `/events/:id` API.
- [x] Delete an event by sending a `DELETE` request to the `/events/:id` API.

## Instructions

1. Fork and clone this repository to your local computer using `git clone https://github.com/Your-Username/Calendar.git`.
2. Move into the root directory: `cd Calendar`.
3. Install `Node` packages: `npm install`.
4. Create a `PostgreSQL` database: `createdb calendar`.
5. Seed the `calendar` database: `npm run seed`.
6. Start an `Express` server: `npm run start-dev`.
7. See the application running at `http://localhost:8080`.

## Walkthrough

![Calendar](public/images/calendar.gif "A digital calendar on the web to create events of your own")

## Deployment

Click [here](https://calendar-month.herokuapp.com/) to see the deployed application.
