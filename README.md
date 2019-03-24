# My School

My School is a digital space for school management. 
The project is divide in two parts: the backend side and the frontend side.
It contains three kinds of actors: Headmaster, Teacher, Student and resources related to the laters such as classes, classrooms, subjects. 

Please: You can check the joined documention for further details.

## Requirements
 frontend side:
- [Node.js](https://nodejs.org)
- [Angular-cli](https://cli.angular.io/)
  ```
  npm i -g @angular/cli
  ```
    Working configuration:

```
    $ ng version
    Angular CLI: 7.x.x
    ...
```
backend side:
- [Wildfly](http://wildfly.org/downloads/)
- [Netbeans](https://fr.netbeans.org/) or [Eclispe](https://www.eclipse.org/downloads/)
- [Maven](https://maven.apache.org/)
- [MySQL](https://www.mysql.com/fr/)

## Configure backend project
1) Create new MySQL database named 'schoolmanagement'

2) The transaction-type is JTA, so we need to setup the JNDI for jta-data-source.

    - If your are working on MySQL, you can copy the mysql folder in Backend directory
    - Paste the folder in your ${WILDFLY_DIRECTORY}/modules/system/layers/base/com
    - open wildfly console:
        * Create new JDBC driver
        * Create new datasource named 'schoolManagementDS'  

Note: You can customize the persistence.xml if you want to use different configuration such as database type or database credentials

2) Open Eclipse or Netbeans, clean and build the main project (schoolmanagement)

## Run Server and deploy .ear

1) Start Wildfy server

2) Drag and drop the .ear from the EAR module to Wildfly deployments interface

3) Enable the .ear

## Run client

1- Navigate with command lines into Frontend folder

2- Execute the folling command:
```
npm i
```
2- Start the client with the command below:
```
ng serve
```

You can know acces to the client's interface throught [http://localhost:4200](http://localhost:4200)

Note: If your backend server is binded to a different port but 8080, please change the port number in ${FRONTEND_FOLDER}/utils/server.conf.ts
 
## Documentation

- Wildfly : http://docs.wildfly.org/
- Angular : https://angular.io/docs
- Java EE Community : https://www.oracle.com/technetwork/java/javaee/community/index.html
- JCP : https://www.jcp.org/en/home/index
