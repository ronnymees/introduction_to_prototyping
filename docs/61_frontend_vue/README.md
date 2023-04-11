# Frontend development with Vue

## Introduction

A Vue application is made up of independent and reusable components. For example, if we want to build a storefront module like what we see on Amazon, we can devide it into three components. The search bar component, sidebar componenent and products components.

Components can also contain other components. For example, in product component where we display a list of products, we do so using multple product components. Also, in each product component, we can have a rating component.

<!-- TODO : fig 3 pg 9 invoegen -->

The benefit of such an architecture helps us to break up a large application into smaller managable components. Plus, we can reuse components within the application or even in a different application.

A Vue component self-contains **template** (HTML-markup), **logic** (Javascript) and **styling** (CSS) in a `.vue` file. It is also called a *Single-File-Component* since it encapsulates all three in a single file.

Below is an example of a product component that display's a single string containing the product name;

``` vue
// Template section
<template>
    <h1>The product name is {{name}}</h1>
</template>
    
//Logic section
<script>
    export default{
        data(){
            return{
                name = 'bag';
            }
        }
    }
</script>

//Styling section
<style scoped>
    h1 {
        color: blue;
    }
</style>
``` 

We have the *template section* containing markup to output HTML. In the curly braces, you can put any Javascript code, e.g. variables, expressions, conditionals, loops. In the template, Vue uses declarative rendering where we can declaratively describe HTML output based on Javascript state.

In the *logic section*, using Javascript, you can set values for variables, define props, create custom/life-cycle methods etc. 

By using CSS we apply the style we want for our output in the *styling section*.

## Setup your Vue application

First, if not already installed, we need to install `Node.js`. See [Chapter Development Tools](../01_developmenttools/#node-js).

The easiest way to start a Vue project is to run the following command in the terminal:

```bash
npm init vue@latest
```

*create-vue*, the official Vue project scaffolding tool will be installed and executed.

You will be asked some questions:
* Project name: ... `<your-project-name>` 👉 **use lower case and no spaces !**
* Add TypeScript? No/Yes
* Add JSX Support? ... No/Yes
* Add Vue Router for Single Page Application development? ... No/Yes
* Add Pinia for state management? ... No/Yes
* Add Vitest for Unit testing? ... No/Yes
* Add Cypress for both Unit and End-to-End testing? ... No/Yes
* Add ESLint for code quality? ... No/Yes
* Add Prettier for code formating? ... No/Yes

If you are unsure about an option, just choose 'No' by hitting *enter* for now.

This will create a project in a newly created `<your-project-name>` folder.

In the terminal enter:

```bash
cd <your-project-name>
npm install
npm run dev
```

This creates a new project in the `<your-project-name>` folder, installs its dependencies (see later) and starts a *dev server* on `http://localhost:5173`.

<!-- TODO : fig 4 & 5 pg 13 invoegen -->

When you open the project folder in VSCode editor, you will find a couple of files:

<!-- TODO : fig 7 pg 14 invoegen -->

Our app lives in the *src* folder. Any other files outside this folder are meant to support building your app.

In the *src* folder we find:

**main.js**

*main.js* is the entry point for our app where we initialize and bring in the main App component:

<!-- TODO : code importeren zie pg 15 -->
``` vue
To be added
```

A Vue application starts by creating a new application instance with the *createApp* function. We import and use the root component App from ./App.vue (see later). 

We call *mount()* to render *App* in *#app* selector of index.html (see later).

**App.vue**

In *App.vue* the App component is defined, it is the root component that contains other components i.e. HelloWorld and TheWelcome as its childeren.

Outside the *src* folder we find:

**package.json**

*package.json* is the node package configuration which lists the packages our project uses (dependencies) and how to build our App (scripts). 

**index.html**

Our Single Page Application loaded in the browser. Our *App.vue* component will be injected into this page.

## Creating and using components

Most likely you don't want to stick with the "hello world" Vue application we nog have. Let's remove the default existing components *HelloWorld.vue*, *TheWelcome.vue*, *WelcomeItem.vue* as well as the *icons* folder.

### Creating our First Component

In the *components* folder create a new file *Products.vue*.

:::tip 💡Tip
We use the UpperCamelCase naming comvention.
:::

We start with the basic sections in our component:

``` vue
//Logic section
<script>
    
</script>

// Template section
<template>
    <h1>Products</h1>
</template>
``` 

So, basicly our component outputs the text "Products".

### Importing and Using our Created Component

As we already know, a component can be used by other components. Let's import and add `<Products />` to `/src/App.vue` by replacing the existing code with:

``` vue
<script>
    import Products from './components/Products.vue';

    export default{
        components:{
            Products
        }
    }
</script>

<template>
    <Products />
</template>
```

We import our *Products.vue* component by there **relative path**, register it under the *components* option to make it available to App and then render the *Products component* in template.

### Options API

With Options API, we define a component's logic using options e.g. *data*, *methods* and *mounted*.

For now we will be looking at *data()*.

Suppose we have a product with a *username* and *category*, we can use *data()* to define this.
*data()* returns an object containing all data we want Vue to work with.

``` vue
<script>
    export default{
        data(){
            return{
                username: 'John',
                catergory: 'Books'
            }
        }
    }
</script>
```

In our template we can use this data with our curly brackets.

``` vue
<template>
    <h1>Products: {{category}} by {{username}}</h1>
</template>
```

### Displaying a List with Loops

In most cases we will have a list of data to be displayed, let's change our data option as follows:

``` vue
<script>
    export default{
        data(){
            return{
                products:[
                    {
                        id: "1",
                        name: "Books"
                    },
                    {
                        id: "2",
                        name: "Pencils"
                    },
                    {
                        id: "3",
                        name: "Paper"
                    }
                ]                
            }
        }
    }
</script>
```

Now we want to loop true this data and display it:

``` vue
<template>
    <div v-for='product in products' :key='product.id'>
        <h3>{{product.id}}: {{product.name}}</h3>
    </div>
</template>
```

:::tip 💡Note
Note that we have provided a *key* attribute (*product.id*) for our product items. The key (product.id) tells Vue how to figure out wich DOM node to change when *products* update. Thus, when dynamically editing the list, and removing/adding elements, you should always pass an identifier in list to prevent issues.
:::

## BootStrap, V-bind, Props, Data and Events


<!-- TODO : Nog te leren en uit te werken -->