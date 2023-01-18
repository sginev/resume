---
title: 'CCG Prototype'
abstract: 'Virtual Collectible Card Game'
---
This is an entirely personal project. As it is a multiplayer game, it's being built as a single-page web app for the client-side - written in Typescript with React for rendering and GSAP handling most of the animations; the server is a node.js app, utilizing the beautiful and open-source Colyseus framework for room management and communication protocols. Currently, for database and authentication I am using Google's Firebase SDK.

Most interesting things here are the business logic - special effects of played cards need to be able to both respond to a large number of possible situations (a custom event system), including other cards' activation, as well change the current gameplay and rules of the game as effect.

I created in addition a custom card editor as another React app, which uses simple forms, the ACE Editor plugin for writing the card effects with syntax -lighting and custom autocomplete, and the Github API for load-saving the data (I chose approach for the commit history).
