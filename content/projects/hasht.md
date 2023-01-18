---
title: 'Hasht'
abstract: 'Mobile 8-Ball Pool Game'
---
On this billiard game, I was responsible mainly for the game-rules module, implementing the Box2D physics SDK (with some custom modifications and prediction work), as well as the entirety of the central multiplayer server. For the last, we opted to use PlayerIO - an online multiplayer service, where we upload our room logic, written in C#.

Other than that server, perhaps the most challenging aspects were optimizing the physics engine for mobile, as well as the very low-level custom shader I had to write, for rendering the balls without having to use 3D objects.
