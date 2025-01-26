# Postitos App

## Intro

Lorem ipsum ...

![Tomatoes Gif](https://media.giphy.com/media/A1oBMukTqFfkoY1HiH/giphy.gif?cid=790b7611bdsv8i6m43jhxw5m3xgw3wf5yayy3gjz9eeahdbi&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional

### Use Cases

Regular (User)
- view posts
- add Post
- remove Post

### UXUI Design

[Figma](https://www.figma.com/design/I9HlbeOUk1G0cm6StSCdTU/App?node-id=0-1&t=AIY0t61BGUuQYJQi-1)


## Technical

### Blocks

- App
- API
- DB

### Packages

- app
- api
- com
- doc (documentation)


### Techs

- HTML/CSS/JS
- React
- Node/Express
- ...

### Data Model

User
- id (uuid)
- name (string)
- email (string)
- username (string)
- password (string)
- role (string, regular|provider)

Post
- id (uuid)
- author (User.id)
- image (string)
- text (string)
- date (date)

### UI Components

```sh
App
 |- Landing
 |- Register
 |- Login
 |- Home

Home
 |- Posts
 |- CreatePost

Posts
 |- [Post]

```

### Coverage

![Code Coverage](https://wac-cdn.atlassian.com/dam/jcr:f29e7890-4a7a-4590-bc8b-c4c775ec301d/CDmicro-600x338-retina2x-A_11-58-7.png?cdnVersion=2491)

## Tasks

[GitHub](https://github.com/b00tc4mp/isdi-parttime-202410/issues/37)
