---
title: 'Hasht'
abstract: '8-Ball Pool Mobile Game'
priority: 5
position: 1
tags:
  - game
  - mobile
links:
  - id: '4938068'
    label: View on App Store
    linkType: demo
    url: https://apps.apple.com/us/app/hasht/id1314853116
  - id: '4938062'
    label: View on Google Play Store
    linkType: landing
    url: https://play.google.com/store/apps/details?id=air.hasht.game
seoTags:
---

Mobile game for iOS and Android. Play 8-Ball pool with friends and strangers.
Features realtime multiplayer, rank based match-making, scheduled tournaments, in-app purchases, push notifications.
Uses deterministic physics engine for fair gameplay.
Balls rendered within a 2D environment using custom shader with spherical projection to simulate realistic 3D balls with perfect rotation.

For this billiards game, I was responsible mainly for the game-rules module, implementing the Box2D physics SDK (with some custom modifications and prediction work), as well as the entirety of the central multiplayer server. For the last, we opted to use PlayerIO - an online multiplayer service, where we upload our room logic, written in C#. Other than that same server code and the synchronization troubles that comes with it, the most challenging aspects were optimizing the physics engine for mobile devices, as well as the very low-level custom shader I engineered to handle drawing convincing ball projections without having to use actual 3D geometry.
