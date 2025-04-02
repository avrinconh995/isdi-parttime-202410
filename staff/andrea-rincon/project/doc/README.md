# Calendario Familiar App

## Intro

Calendario - MiLittleCal was born out of the need to efficiently organize all the activities and events for my daughters. This tool allows you to create, edit, and delete events easily, ensuring that no doctor’s appointment, school activity, or special moment is ever missed. With an intuitive and practical design, MiLittleCal makes managing family life simple and efficient, even on the busiest days.

![Overwhelmed Mom Juggling Family Chaos](https://sdmntprwestus.oaiusercontent.com/files/00000000-47b4-5230-a2d4-e9b954e0764d/raw?se=2025-04-02T18%3A44%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=01f3d022-a8c8-5f76-b7d3-80e98e51c7a4&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-02T16%3A06%3A57Z&ske=2025-04-03T16%3A06%3A57Z&sks=b&skv=2024-08-04&sig=VXVAYFejQdukVNT6hPP9L%2BXygU/c46iduxWUEK0vD1Q%3D)

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
    - Edit Event

[Figma](https://www.figma.com/design/xGP5aGUHmWJpdDuCZcgSCQ/Untitled?node-id=1-2&p=f&t=MKfVtxfkh91OW6ML-0)

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
![Code Coverage]![alt text](image.png)
## Tasks

[GitHub] (https://github.com/b00tc4mp/isdi-parttime-202410/issues/49)