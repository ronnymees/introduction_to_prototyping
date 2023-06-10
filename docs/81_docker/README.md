# Deploy your project on a Docker container

For the installation of docker I will be refering to the install procedure "[Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)"

## Making the directory structure in docker

1. Add `docker` folder to `/opt/`

```bash
cd /opt
mkdir docker
cd docker
```

2. Make docker the owner

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
mkdir compose
mkdir data
mkdir apps
```

6. Add user ronny to docker

```bash
sudo add user ronny docker
```

7. Changer rights to write for the new folders

```bash
sudo chmod -R g+w docker
```

## Prepairing your project to deploy on docker

Before you can deploy your project to docker we need to make some changes to our project.
I would recommend to make a new branch `docker` of your repo.

Let's say you have a project called `FieldMonitor` with a *Express.js* backend in the folder `field-api` and a *Vue* frontend in the folder `vue-monitor`.

Without Docker Compose you would start the project as follows:

```bash
// Start backend-api
cd field-api
npm install
npm run dev

// Start frontend
cd vue-monitor
npm install
npm run dev
```

### Backend Dockerfile

With Docker Compose installed, you need two seperate docker files for each environment. 
Let's name these Dockerfiles as `Dockerfile-dev`.

```dockerfile
FROM node:10
WORKDIR /usr/src/app/field-api
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

1. We are starting from the base image `node:10`.
2. Set the working directory as `/usr/src/app/field-api`.
3. Copy the `package.json` to install all the dependencies.
4. Install all the dependencies
5. We need to put this expose command for the documentation purpose so that other developers know this service runs on port `3000`.
6. Finally, we run the command `npm run dev`

### Frontend Dockerfile

```dockerfile
FROM node:10
WORKDIR /usr/src/app/vue-monitor
COPY package*.json ./
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "dev"]
```

1. We are starting from the base image `node:10`.
2. Set the working directory as `/usr/src/app/vue-monitor`
3. Copy the `package.json` to install all the dependencies
4. Install all the dependencies
5. Exposing the port `8080`
6. Finally, we run the command `npm run dev`

### Start commands in Package.json

In the above Dockerfiles, we are running commands with npm on instantiating the containers. Let’s see what are those commands in each `package.json` files.

For the backend, we are running this command `npm run dev` which in turn runs this command `nodemon src/server.js`. Since it’s a development environment we are using nodemon which listens for the changes in files and restart the server automatically.

![image](./images/image3.png)

For the frontend, we are running this command `npm run dev` which in turn runs this command `vite` We are using Vite here to serve the application on port 8080.

![image](./images/image4.png)

### Docker Compose file

Finally, let’s look at the docker-compose file here. Since we need to run Vue on port **8080** and express API on port **3000** we need to define two services: nodejs-server and vue-ui.

```yml
version: '3'
services:
  mysqldb:
    image: mysql:5.7
    restart: unless-stopped
    env_file: ./.env
    environment:
      - MYSQL_ROOT_PASSWORD=$MYSQLDB_ROOT_PASSWORD
      - MYSQL_DATABASE=$MYSQLDB_DATABASE
    ports:
      - $MYSQLDB_LOCAL_PORT:$MYSQLDB_DOCKER_PORT
    volumes:
      - db:/var/lib/mysql
  field-api:
    depends_on:
      - mysqldb
    build:
      context: ./field-api
      dockerfile: Dockerfile-dev
    restart: unless-stopped
    env_file: ./.env  
    ports:
      - $NODE_LOCAL_PORT:$NODE_DOCKER_PORT
    environment:
      - DB_HOST=mysqldb
      - DB_USER=$MYSQLDB_USER
      - DB_PASSWORD=$MYSQLDB_USER_PASSWORD
      - DB_NAME=$MYSQLDB_DATABASE
      - DB_PORT=$MYSQLDB_DOCKER_PORT
    stdin_open: true
    tty: true  
    container_name: field-api
    volumes:
       - ./field-api:/usr/src/app/field-api
       - /usr/src/app/field-api/node_modules
  vue-monitor:
    build:
      context: ./vue-monitor
      dockerfile: Dockerfile-dev
    ports:
      - $VUE_LOCAL_PORT:$VUE_DOCKER_PORT      
    container_name: vue-monitor
    volumes:
       - ./vue-monitor:/usr/src/app/vue-monitor
       - /usr/src/app/vue-monitor/node_modules
```

If you look at the above file we defined three services each has its own docker file. The most important thing here is the volumes part we need to mount the whole part of the application and node_modules folder as well. We need to mount the node_modules folder because the volume is not mounted during the build.

**mysqldb**:

* image: official Docker image
* restart: configure the restart policy
* env_file: specify our .env path that we will create later
* environment: provide setting using environment variables
* ports: specify ports will be used
* volumes: map volume folders

**field-api**:

* depends_on: dependency order, mysqldb is started before app
* build: configuration options that are applied at build time that we defined in the Dockerfile with relative path
* environment: environmental variables that Node application uses
* stdin_open and tty: keep open the terminal after building container

**vue-monitor**:

Same as previous.

### Docker Compose Environment variables with mySQL

In the service configuration, we used environmental variables defined inside the .env file:

```env
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=<your root password>
MYSQLDB_DATABASE=vives
MYSQLDB_USER=webuser
MYSQLDB_USER_PASSWORD=secretpassword
MYSQLDB_LOCAL_PORT=3307
MYSQLDB_DOCKER_PORT=3306

NODE_LOCAL_PORT=3000
NODE_DOCKER_PORT=3000

VUE_LOCAL_PORT=8080
VUE_DOCKER_PORT=8080
```

## Deploying your project on Docker

### cloning your docker repo branch

1. go to your docker repo and copy the https link in `code`

2. Clone repo in `apps`

```bash
cd apps
git clone <https link repo>
```

### Running your project

First go the the docker app you want to run

```bash
cd <folder>
```

To start docker in development

```bash
docker compose up 
```

Docker will start and close if terminal is exited.

To start docker in background

```bash
docker compose up -d
```

To stop docker

```bash
docker compose down
```

## Create the tables in your database

Every project we make has a `restore.sql` file to do just that.
Run that query in the Workbench on docker.

## Making changes to your project in docker

You can edit the files with nano. After the changes you can rebuild with

```bash
docker compose down
docker compuse up --build -d
```

