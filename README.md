# GDG Setif Web App
Standard Web App for GDG Setif. <br>
[Demo](https://www.gdgsetif.club) <br>
Version: 1.0.0

## Overview

GDG Setif Web App is the website template that helps you to set conference website with registration, speakers and schedule management in a few minutes.

The template is created by [GDG Jalandhar](https://meetup.com/GDG-Jalandhar/) and customized by [GDG Setif](https://meetup.com/GDG-Setif/).

## Features
| Feature | Description |
|---|---|
| **Fast and optimized** | 100/100 PWA on Lighthouse |
| **Works offline** | Can works offline |
| **Mobile first** | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized** | index all content and get to the top in search results |



## Getting Started
1. Fork repository and clone it locally
1. Setup Environment
   * Install Firebase CLI: `npm i -g firebase-tools` or `yarn global add firebase-tools`
1. Create [Firebase account](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/): `firebase login`
1. Update [Firebase Web Setup & Basic Info](/index.html), [manifest.json](/manifest.json) and [Resources](/data)
1. Update Firebase.json file
  ```js 
  {
  "hosting": {
    "public": "public",
    "rewrites": [ {
      "source": "**",
      "destination": "/index.html"
    } ],
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```
6. Update the Firebase Real-Time Database Rules
  ```js
    {
      "rules": {
        "data": {
          "$uid": {
            ".write":"$uid === auth.uid",
            ".read": "$uid === auth.uid"
          },

        }
      }
    }
  ```
7. Enable the `Google SignIn` provider in `Firebase Auth`.
8. Run locally
   * `firebase serve` or 
9. Build and deploy
   * `firebase deploy`


## Technology Stack

* AngularJS
* Bootstrap
* Firebase
* Service Worker
* Material Design Bootstrap


Project is published under the MIT license.  
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
