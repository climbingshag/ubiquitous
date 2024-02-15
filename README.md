# ubiquitous

Ubiquitous is a generic todo app. I'm not interested in creating the next killer app here, its meant for practicing with different frameworks.

This repo was generated with create-react-app for the frontend, but I'll be searching for alternatives to that.

There is a front-end directory for the front-end SPA, and a backend repo for the API(s).  

Planned:

1) Deploy to AWS as a SPA (cloudfront) and an API (ECS).
2) Break out Users into another service, just so I can:
    * Add proper Auth
    * Add a grpahql stitching gateway, likely in another repo
    * Add a messaging bus
    * Add some sort of lambda as an event subscriber and have it do something
  Thus, a mini-model of a potential microservices framework, that could be expanded upon for nearly any use case.


