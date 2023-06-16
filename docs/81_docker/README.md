# Deploy your project on a Docker container

First you need to have a server or virtual machine to work on. In our case we then have setup a VPN tunnel to that server and use the extension `ssh remote` to connect to the server through Visual Code.

## Installation of Docker and Docker-compose

For the installation of docker I will be refering to the install procedure "[Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)"

## Making the directory structure in docker

1. Add `docker` folder to `/opt/`

```bash
cd /opt
sudo mkdir docker

```

2. Make the docker-group the owner

```bash
sudo chown root:docker docker
```

3. Change rights to write

```bash
sudo chmod g+w docker
```

4. Change rights to make sure that new folder enherite the same rights

```bash
sudo chmod g+s docker
```

5. Add `compose`, `data` and `apps` folder 

```bash
cd docker
sudo mkdir compose
sudo mkdir data
sudo mkdir apps
```

We will be using the folder `compose` to run Docker Containers from third party images like mySQL.
The folder `apps` will be used to run Docker Containers from a complete GitHub repository.
And the `data` folder will contain the data from our running containers. That makes it easier to manage Backup systems.

6. Add user `<user>` to the docker-group

```bash
sudo adduser <user> docker
```

7. Changer rights to write for the new folders

```bash
cd ..
sudo chmod -R g+w docker
```

## Deploying a mySQL server on Docker

Because we are only building a mySQL server container that is stand-alone we will be building our project in the folder `compose`.

### Docker-compose file

In a newly created folder for our project we need to start building a `docker-compose.yml` file.

```bash
cd compose
sudo mkdir mysql-server
nano docker-compose.yml
```

::: tip **Tip**
You can also open the `/opt/docker/` folder in Visual Code and then use that UI for adding/editing folders and files.
:::

```yml
version: '3'
services:
  db:
    image: mysql
    restart: unless-stopped
    ports:
      - ${MYSQLDB_LOCAL_PORT}:${MYSQLDB_DOCKER_PORT}
    env_file: ./.env
    environment:
      - MYSQL_ROOT_PASSWORD=${MYSQLDB_ROOT_PASSWORD}
      - MYSQL_DATABASE=${MYSQLDB_DATABASE}
    volumes:
      - /opt/docker/data/mysql-server:
      /var/lib/mysql
    container_name: mysql-server
```

* `version: '3'` :  This instructs Docker Compose that we’re using version 3 of the tool.
* `services:` : This will instruct Docker Compose that what follows will be the services to deploy. 
* `db:` : This is the db service that will be defined.
* `image: mysql` : We instruct Docker Compose to use the mysql image for the database.
* `restart: unless-stopped` : We instruct Docker to always retry to start this service unless it was stopped by the admin.
* `ports:` : We define both the external and internal ports to use for the database. Normaly this is `- "3306:3306"` but in our example we use Environmental variables to define those ports".
* `env_file: ./.env` : To be able to use those Environmental variables we need to define in which file they are defined.
* `environment:` : We configure the database environment. The environment will be the configuration options for the database (passwords, users, database name).
* `volumes:` : This is optional, but in our case we want the data to be writen in our data folder we made. Therefore we define both the internal and external path.
* `container_name: ` : If you want your container to have a specific name you can define it like this.

### Environmental variables

Once our Docker-compose file is ready, we need to make our file with the Environmental variables named `.env`.

```env
MYSQLDB_ROOT_PASSWORD=<your root password>
MYSQLDB_DATABASE=vives
MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306
```

### Deploy on docker

Once we have done that, we are ready to build and run our service.

* use `docker-compose up` to deploy your container in attached mode, so you won't get your bash prompt returned.
* use `docker-compose up -d` to deploy your container, now you get your bash prompt returned.
* use `docker-compose up --force-recreate --build` to deploy your container and rebuild them after adjustments have been made.
* use `docker-compose ps` to see the name of the containers and status.
* use `docker-compose down` to stop and remove the docker containers.
* use `docker-compose down -v` to stop and remove the docker containers and volumes.

Once our service is running we can connect to it with WorkBench and create our webuser like we did [before](../45_create_db_user).

:::tip Tip
Now you will need to change the 'webuser'@'localhost' to 'webuser'@'%'.
:::

## Deploying a Express.js Backend-API on Docker

Now let's dockerize a backend API made in Express.js that provides the CRUD actions to a database.

In stead of creating a new project folder in `compose` we will be editing our project repository (if you want you can make a new 'docker' branch for this).

### Docker-compose file

Again in the root folder of the project we create a `docker-compose.yml` file starting form our previous one:

```yml
version: '3'
services:
  db:
    image: mysql
    restart: unless-stopped
    ports:
      - ${MYSQLDB_LOCAL_PORT}:${MYSQLDB_DOCKER_PORT}
    env_file: ./.env
    environment:
      - MYSQL_ROOT_PASSWORD=${MYSQLDB_ROOT_PASSWORD}
      - MYSQL_DATABASE=${MYSQLDB_DATABASE}
    volumes:
      - /opt/docker/data/mysql-server:/var/lib/mysql
    container_name: mysql-server
  api:
    depends_on:
      - db
    build:
      context: ./<backend directory>
      dockerfile: Dockerfile
    restart: unless-stopped
    env_file: ./.env
    ports:
      - ${API_LOCAL_PORT}:${API_DOCKER_PORT}
    environment:
      - DB_HOST=db
      - DB_USER=${MYSQLDB_USER}
      - DB_USER_PASSWORD=${MYSQLDB_USER_PASSWORD}
      - DB_NAME=${MYSQLDB_DATABASE}
      - DB_PORT=${MYSQLDB_DOCKER_PORT}
    container_name: backend-api
```

* `depends_on:` : Dependency order, db is started before api.
* `build:` : Configuration options that are applied at build time that we will define in the Dockerfile with relative path

### Environmental variables

Now we need to complete our `.env` file as follows:

```env
# SQL
MYSQLDB_ROOT_PASSWORD=<your root password>
MYSQLDB_DATABASE=vives
MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306

# API
MYSQLDB_USER=webuser
MYSQLDB_USER_PASS=secretpassword
API_LOCAL_PORT=3000
API_DOCKER_PORT=3000
```

### Docker file for the backend API

Next, in the folder of your backend API you need to create a Docker file.

```docker
FROM node:18
WORKDIR /usr/src/app/field-api
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]
```

* `FROM` : start the image from node.js version 18.
* `WORKDIR` : setup a working directory
* `COPY` : copy all files to the image
* `RUN` : install all dependencies
* `EXPOSE` : expose the backend api on port 3000
* `CMD` : start the backend.

### Change hostname in your backend

Next we need to change the localhost to the Environmental variable `DB_HOST` that has the name of the mySQL service, and this in all our file's where we make a database connection.

```js
const DB_HOST = process.env.DB_HOST;
```

### Deploy on docker

Now you need to clone your docker repo, by using the https link in `code`, in your `apps` folder.

```bash
cd apps
git clone <https link repo>
```

then go to your project and deploy it like we did with the mySQL server.

Once your project is deployed on Docker you will again need to add our webuser and run the `restore.sql` script from the project to create the necessary tables.

## Deploying a full project with Vue Ui, Express Api and mySQL database on docker

Now let's add a Vue frontend to the project.

### Docker-compose file

We add a new service `` to our `docker-compose.yml` file:

```yml
version: '3'
services:
  db:
    ...
  api:
    ...
  ui:
    depends_on: 
       - field-api
    build:
      context: ./<frontend directory>
      dockerfile: Dockerfile
    restart: unless-stopped
    ports:
      - ${VUE_LOCAL_PORT}:${VUE_DOCKER_PORT}
    environment:
      - API_HOST=api
    container_name: frontend-ui    
```

### Environmental variables

Now we need to complete our .env file as follows:

```env
# SQL
MYSQLDB_ROOT_PASSWORD=<your root password>
MYSQLDB_DATABASE=vives
MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306

# API
MYSQLDB_USER=webuser
MYSQLDB_USER_PASS=secretpassword
API_LOCAL_PORT=3000
API_DOCKER_PORT=3000

# UI
VUE_LOCAL_PORT=8080
VUE_DOCKER_PORT=8080
```

### Docker file for the frontend UI

In the folder of your frontend UI you need to create a Docker file:

**Frontend-UI**
```dockerfile
# The image to start from
FROM node:18
# Setup a working directory for our app
WORKDIR /usr/src/app/vue-monitor
# Copy the package.json to install all the dependencies
COPY . .
# Install all the dependencies
RUN npm install
# Expose port 8080 for our app
EXPOSE 8080
# Start the frontend
CMD ["npm", "run", "build"]
```

### Change hostname and port in your frontend

In your frontend you need to change all the `localhost` to the Evironmental variable `process.env.API_HOST` and the port `3000` to `process.env.API_DOCKER_PORT`

```js
const url = `http://${process.env.API_HOST}:${process.env.API_DOCKER_PORT}/weerinfo`;               
```

### Deploy on docker

For the deployment the same steps must be taken as previous with the backend.

