---
title: 'CCG Prototype'
abstract: 'Virtual Collectible Card Game'
priority: 5
position: 1
tags:
  - game
  - editor
  - prototype
links:
  - id: '4878326'
    label: Administration and content management tool
    linkType: demo
    url: https://ccgw-editor.stefanginev.dev/
seoTitle: virtual-collectible-card-game
seoTags:
---
A multiplayer game, built as a single-page web app. This is an entirely personal project, written almost entirely in Typescript. Client-side it is rendered via React, with GSAP and regular CSS handling most of the animations. The server is a node.js app, utilizing the beautiful and open-source Colyseus framework for room management and communication protocols. Google's Firebase SDK is currently used for database and authentication. Most complex parts of this project are the business logic - special effects of played cards need to be able to both respond to a large number of possible situations, which is solved via an entirely custom event system.

Also in the form of a React application, I constructed a custom data editor to aid development as the project scales. This uses simple forms, the ACE Editor plugin for scripting the effects directly, with syntax hight-lighting and custom autocomplete. Instead of a managed database, I opted to use the Github API for load-saving the data. Apart from providing a mkae-shift human-readable change history, this approach afforded me creative freedom, by using git branches to easily test and compare design directions.
