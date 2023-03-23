# Backend databases

To be able to store, retrieve, edit or delete data we will use a database.
To be able to do that we need a database service, in this course we will focus on **MySQL** and **MongoDB**.

<!-- TODO : In de plaats van MongoDB werken met MariaDB -->

**MySQL database**

MySQL is a free, open-source, **relational database** management system that stores data in the form of tables containing rows and columns. It ensures referential integrity between the rows of a table and interprets queries to fetch information from the database.

A database can contain several tables each existing of rows and columns (fixed structure).

**MongoDB database**

MongoDB is a NoSQL (Not only SQL) database that stores large volumes of data in the form of documents. MongoDB removes the concept of "rows" of conventional and relational data models by introducing "documents." This offers the developers the flexibility to work with **evolving data models**. 

A database can contain serveral documents with a flexibel structure of columns and rows.


**Which one do I choose?**

Applications, like an accounting system that requires multi-row transactions, would be better suited for a relational database. MySQL is an excellent choice if you have structured data and need a traditional relational database.

MongoDB is well-suited for real-time analytics, content management, the Internet of Things, mobile, and other types of applications. It is an ideal choice if you have unstructured and/or structured data with rapid growth potential.

## Setup MySQL database

First we will need to install our MySQL server from Oracle. [MySQL Community Downloads](https://dev.mysql.com/downloads/installer/)

* Choose the **Full** type and let it install.

![image](./images/image1.png)

* In the configuration set the config type to **Development Machine** port to **3306**.

![image](./images/image2.png)

* Next choose a Root password 

:::warning 🔥Warning
Write your root pasword down somewhere so you don't forget!
:::

Once your MySQL server is up and running you can login to it with your **MySQL Workbench** by using your root acces.

![image](./images/image3.png)

### Creating a database with an application user

Because we don't want web applications using the root acces to logon to our database, we will create a new database with a dedicated user to acces only that database.

Now let's use our database admin tool with root acces and create a new database called `VIVES` for school purposes with a specific user called `webuser`to acces this database.

```sql
CREATE DATABASE vives;
USE vives;
CREATE USER 'webuser'@'localhost' IDENTIFIED BY "secretpassword";
GRANT ALL PRIVILEGES ON vives.* TO 'webuser'@'localhost';
```

## Setup MongoDB database

First we will need to install our [MongoDB Community Edition](https://www.mongodb.com/try/download/community).

<!-- TODO : Aan te leren en uit te werken -->

### Creating a database with an application user

<!--te bekijken, is in commandline denk ik...
Bestaat er een GUI?

```mongodb
use <name of database>
db.createUser(
   {
     user: "<username>",
     pwd: "<secretpassword>",
     roles: [ "dbOwner" ]
   }
)
```-->


<!-- TODO : install and configure phpmyadmin op NgInx server -->


## CRUD interactions with a database

<!-- TODO : uit te werken , crud uitleggen en dan van elks een voorbeeld geven -->

