# Calendario Familiar App

## Intro

Calendario - Agenda familiar que me permita crear diferentes eventos y poder llevar una organizacion con las ni;as peque;as texto en desarrollo....

![Poner imagen aqui titulo](https://cloudfront-us-east-1.images.arcpublishing.com/infobae/6LKSK3L3SZE4TMHDU4I37QZIBE.jpg)

## Functional

### Use Cases

User
- add event
- edit event
- delete event
- view event
- view calendar and events (with filter)
- edit profile (phone, email, kids...)

### UXUI Design

#### Views

- Landing
- Login
- Register
- Home
    - Calendar
        - Event List
    - Create Event
    - View Event

[Figma]()

## Technical

### Blocks

- App
- API
- DB

### Packages

- app
- api 
- doc (documentation)

### Techs

- HTML/CSS/JS
- React
- Node/Express
-...

### Data Model

User
- id (uuid)
- name (string)
- email (string)
- password (string)

Child
- id (uuid)
- parent (User.id)
- name (string)

Event
- id (uuid)
- author (User.id)
- children ([Child.id])
- title (string)
- description (string)
- date (Date)

### Coverage
![Code Coverage](http://127.0.0.1:5500/staff/andrea-rincon/project/api/coverage/logic/index.html)

## Tasks

[GitHub] (https://github.com/b00tc4mp/isdi-parttime-202410/issues/49)