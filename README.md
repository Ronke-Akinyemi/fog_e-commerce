# ALX Foundation stage portfolio project

![MasterHead](https://www.alxafrica.com/wp-content/uploads/2023/01/7_Do-hard-things-100.jpg)
<br><br>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Merriweather&size=25&duration=4000&pause=1000&color=FF0000&background=00FFE400&center=true&width=1000&lines=ALX+Portfoliio+Website+Project;This+is+the+hard+thing+we+built😊;By+Akinola+Samson+and+Adebayo+Fredrick)](https://git.io/typing-svg)
## Description:

This project will serve as our final portfolio website for our alx Software engineering foundation phase

## Architecture:

This project uses a microservice architecture with the microservices divided base on business line to notification, user, product, payment and UI. with individual microservice independent of others

### User Interface
The User interface is built with react javascript framework with the following third party libraries installed with it
* react-pdf/renderer
* react-bootstrap
* react-bootstrap-icons
* react-multi-carousel
* react-router-dom
* react-switch
* react-toastify
The specific version for each third party library can be found in the package.json file


### User Microservice
This microservice serves as the API gateway which directs all requests to the appropriate microservice in charge of such request. It is a python project built on Django and djangorestframeork (drf) with the list of all dependencies listed in the requirements.txt file found in the server/user directory

### Product Microservice
This microservice is responsible for creating, reading, updating and deleting of products, it contains different endpoints responsible for this tasks. It allows unauthenticated users read product but permits only authenticated users(Admin) the ability to create, update and delete items. It is a python project bulilt on django and djangorestframework and it uses simple JWT for authentication. The list of all its dependencies are listed in the requirements.txt file found in the server/product directory

### Payment microservice
This microservice is reesponsible for all payment related activities such as initializing and confirmation of payment with Paystack and getting the list of all payments history. It is a python project using flask framework. The list of all its dependencies are listed in the requirements.txt file found in the server/payment directory

### Notification microservice
This microservice handles all forms of email notification to users, it handles the contact form and generate auto response for all contact us message received, and also responsible for sending bulk mails to all newsletters subscribers. It is a python project using flask framework. The list of all its dependencies are listed in the requirements.txt file found in the server/payment directory

## Deployment
Each independent section of the project were containerized using docker with the Dockerfile located at the root of each microservice directory.
At the root of the project, a docker-compose.yml file is used to run the whole building which creates a network for all microservices to interact with.

## Testing
Each microservices will have set of test cases writen to test the authnticity of the codes and also used to test the codes before being deployed for production
## To-do
1. Build a CI/CD pipeline with Jenkins to automate the deploment to a linux server
1. Improve the frontend to include search functionality and filter functionality for users for better user experience
1. Add more backend microservices as need arises
## Authors
1. Akinola Samson Oluwasegun <akinolasamson1234@gmail.com>
1. Fedrick Adedayo <alfredfredrick41@gmail.com>
