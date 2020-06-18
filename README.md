# Opportunity-Management
MS AU 2020
An opportunity management tool using springboot and angular

Project Structure:
1) Spring Boot:

Project structure:
```
src
├───main
│   ├───java
│   │   └───com
│   │       └───opportunities
│   │           ├───controller
│   │           ├───dao
│   │           ├───daoImpl
│   │           ├───exceptions
│   │           ├───model
│   │           └───service
│   └───resources
│       ├───static
│       └───templates
└───test
    └───java
        └───com
            └───opportunities
```
Tested with Junit and Mockito. Global Exception handling added.

2)Angular

Project structure:
```
src
├───app
│   ├───components
│   │   ├───employees
│   │   │   ├───employee
│   │   │   └───opportunity-list
│   │   ├───material
│   │   ├───trends
│   │   └───view-opportunity
│   ├───Models
│   └───shared
├───assets
└───environments
```
