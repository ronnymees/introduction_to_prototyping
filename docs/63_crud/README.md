# Perform CRUD actions with our backend 

We will be learning these CRUD actions by building a app for ToDo's.

## Create new project

First we will create a new project;

```bash
npm init vue@latest
```
* Projectname = **VueToDo**
* Add Vue Router for Single Page Application development: **No**
* All the rest: **No**

Next install the dependencies:

```bash
cd VueToDo
npm install
```

## Fake data

For now, we will have some fake data in our App.vue to define our inital *to-dos*. Later, we will implement getting data from a REST API.

```vue
<script>
    export default{
        data(){
            return{
                todos:[]
            }
        },
        created(){
            this.todos = [
                {
                    id:1,
                    text: "finishing writing Full Stack Development course",
                    complete: false,
                    date: new Date().toDateString(),
                    dateCompleted: null
                },
                {
                    id:2,
                    text: "Attend to the garden",
                    complete: false,
                    date: new Date().toDateString(),
                    dateCompleted: null
                },
                {
                    id:3,
                    text: "Buy present for daughters birthday",
                    complete: false,
                    date: new Date().toDateString(),
                    dateCompleted: null
                }
            ]
        }
    }
</script>

<template>
</template>
```

## ToDoList component

In `src/components` remove all the folders and files, then create a new file *ToDoList.vue* to list our todo's with the following code:

```vue
<script>
    export default{
        props: {
            todos: Array
        }
    }
</script>
    
<template>
    <div>
        <li v-for="todo in todos" :key="todo.id">{{todo.text}}</li>
    </div>
</template>
```

Before we can render our app we still need to import our ToDoList component into App.vue:

```vue
<script>
    import ToDoList from './components/ToDoList.vue'

    export default{
        components:{
            ToDoList
        },
        ...
    }
</script>

<template>
    <div>
        <ToDoList : todos="todos" />
    </div>
</template>
```

## Styling our ToDoList

Our list of todos currently looks rather plain. Let's apply some styling from Bootstrap. We will use the Table component again to list our todos in a table. (Remember to include the Bootstrap CDN in index.html)

In our *ToDoList* component add the following code:

```vue
<script>
    ...
</script>
    
<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">To Do</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Complete</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <th scope="row">{{todo.text}}</th>
                    <td>{{todo.date}}</td>
                    <td>Mark Complete</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
```

## Removing a Todo

Let's see how to remove a todo. We want to remove a todo upon clicking on 'Delete'. In the delete *td*, add a Button with it's *on:click* handler:

```vue{6,12,13,14}
<script>
    export default{
        props: {
            todos: Array
        },
        emits:['delete-todo']
    }
</script>

<template>
                    ...
                    <td>
                        <button @click="$emit('delete-todo', todo.id)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
```

*@click* emits the 'delete-todo' custom event with the build in *$emit* method. This will later be listened by the parent, App.vue.

*$emit* takes an event name as its first argument, which is what the parent component will listen for. We can also provide additional arguments that will be passed as parameters to any listening callback functions. In our case, we provide *todo.id* to be emitted.

Next we handle the 'delete-todo' event in App.vue:

```vue{14,15,16,17,18,19,20,27}
<script>
    import ToDoList from './components/ToDoList.vue'

    export default{
        components:{
            ToDoList
        },
        data(){
            ...
        },
        created(){
            ...
        },
        methods:{
            deleteToDo(todoId){
                if(confirm('Are you sure?')){
                    this.todos = this.todos.filter((todo)) => todo.id !== todoId)
                }
            }
        }
        
    }
</script>

<template>
    <div>
        <ToDoList : todos="todos" @delete-todo="deleteToDo" />
    </div>
</template>
```

We listen to the 'delete-todo' event  in the parent and specify a listener method, *deleteToDo* to handle the event.
We implement the delete logic in *deleteToDo*. *todos.filter* checks for each element and filters for only *todo* objects whose id is not equal to the id of the todo te be deleted.

## Adding a Todo

To let users create a todo, we will have a form on the top of our *ToDoList* component.

Add a new *AddTodo.vue* component with the following code:

```vue
    <script>
        export default{
            data(){
                return{
                    text:''
                }
            },
            methods:{
                onSubmit(e){
                    // to be added later
                }
            }
        }
    </script>

    <template>
        <form @submit.prevent="onSubmit">
            <input v-model="text" type="text">
            <button type="submit" class="btn btn-primary">Add Todo</button>
        </form>
    </template>
```

We store the user-entered todo text in *text* and declare a *onSubmit* and bind it to the Form's *submit* event.

Next we implement the *onSubmit* method:

```vue
    <script>
        ...
                onSubmit(e){
                    if(!this.text){
                        alert("Please enter todo text");
                        return
                    }
                    else{
                        const newToDo = {
                            id: Math.floor(Math.random() * 100000),
                            text: this.text,
                            complete: false,
                            date: new Date().toDateString(),
                            dateCompleted: null
                        }

                        this.$emit('add-todo',newTodo);
                        this.text='';
                    }
                }           
        ...
    </script>
...
```

In *onSubmit*, we first check if *text* has a value, if so, we create a *newTodo* object. We generate an id, this will later be replaced with a truly unique id generator when we connect it with our backend API. We emit the 'add-todo' event with *newTodo* as argument.

Next we need to handle the 'add-todo' event in App.vue:

```vue{3,8,22,23,24,32}
<script>
    import ToDoList from './components/ToDoList.vue'
    import AddTodo from './components/AddTodo.vue'

    export default{
        components:{
            ToDoList,
            AddTodo
        },
        data(){
            ...
        },
        created(){
            ...
        },
        methods:{
            deleteTodo(todoId){
                if(confirm('Are you sure?')){
                    this.todos = this.todos.filter((todo)) => todo.id !== todoId)
                }
            },
            AddTodo(todo){
                this.todos = [...this.todos,todo]
            }
        }
        
    }
</script>

<template>
    <div>
        <AddTodo @add-todo="addTodo" />
        <ToDoList : todos="todos" @delete-todo="deleteToDo" />
    </div>
</template>
```

## Editing a Todo

Next, we want to implement editing our to-dos. A user will click on the 'Edit' of the todo row she wishes to edit. That todo text will then appear in the form field for her to edit.

To do so, we add an *editMode* and *editTodo* to *App.vue's data()*:

```vue{10,11}
<script>
    ...
    export default{
        components:{
            ...
        },
        data(){
            return{
                todos:[],
                editMode: false,
                editTodo: null
            }
        },
        created(){
            ...
        },
        methods:{
            ...
        }
        
    }
</script>
...
```

*editMode* will be set to true when a user clicks on an 'Edit'. *editTodo* will contain the specific todo object to be edited.

Next, we import and render a seperate EditToDo component that when editMode is true, will be rendered instead of AddTodo. We pass in editTodo into EditTodo as props. When editMode is false, we render AddTodo. 

```vue{4,10,18,19}
<script>
    import ToDoList from './components/ToDoList.vue'
    import AddTodo from './components/AddTodo.vue'
    import EditTodo from './components/EditTodo.vue'

    export default{
        components:{
            ToDoList,
            AddTodo,
            EditTodo
        },
        ...
    }
</script>

<template>
    <div>
        <EditTodo v-if="editMode" :editTodo="editTodo" :key="editTodo.id" />
        <AddTodo v-else @add-todo="addTodo" />
        <ToDoList : todos="todos" @delete-todo="deleteToDo" />
    </div>
</template>
```

Note that we need to include *:key="editTodo.id"* in EditTodo. This is to ensure that EditTodo knows which *editTodo* object to render for editing.
But where do we get *editTodo* from? We will need to get it from ToDoList. Add an Edit button in each row of ToDoList with the following code:

```vue{6,12,13,14}
<script>
    export default{
        props: {
            todos: Array
        },
        emits:['delete-todo' , 'edit-todo']
    }
</script>

<template>
                    ...
                    <td>
                        <button @click="$emit('edit-todo', todo)" class="btn btn-warning">Edit</button>
                    </td>
                    <td>
                        <button @click="$emit('delete-todo', todo.id)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
```

Again, we handle the 'edit-todo' event in App.vue:

```vue{22,23,24,25,34}
<script>
    ...
    export default{
        components:{
            ...
        },
        data(){
            ...
        },
        created(){
            ...
        },
        methods:{
            deleteTodo(todoId){
                if(confirm('Are you sure?')){
                    this.todos = this.todos.filter((todo)) => todo.id !== todoId)
                }
            },
            AddTodo(todo){
                this.todos = [...this.todos,todo]
            },
            handleEdit(todo){
                this.editMode = true;
                this.editTodo = todo;
            }
        }
    }
</script>

<template>
    <div>
        <EditTodo v-if="editMode" :editTodo="editTodo" :key="editTodo.id" />
        <AddTodo v-else @add-todo="addTodo" />
        <ToDoList : todos="todos" @delete-todo="deleteToDo" @edit-todo="handleEdit" />
    </div>
</template>
```

Let's now create the EditTodo component. EditTodo will be quite similar to AddTodo. We can in fact combine them, but for simplicity's sake in learning, we create a separate component EditTodo.vue:

```vue
   <script>
        export default{
            props: {
                editTodo: null
            },
            data(){
                return{
                    text:''
                }
            },
            methods:{
                onSubmit(e){
                    // to be added later
                }
            },
            created(){
                this.text = this.editTodo.text
            }
        }
    </script>

    <template>
        <form @submit.prevent="onSubmit">
            <input v-model="text" type="text">
            <button type="submit" class="btn btn-primary">Edit Todo</button>
        </form>
    </template>
```

We create the *editTodo* prop to receive it from App.vue. We use *editTodo* to populate our Edit Form in the *created* lifecycle method.

Next we implement the *onSubmit* method:

```vue{5,6,7,8,9,10,11,12,13,14,15,16,22}
   <script>
        ...
            methods:{
                onSubmit(e){
                    if(!this.text){
                        alert("Please enter todo text");
                    }
                    else {
                        const editedTodo = {
                            ...this.editTodo,
                            text: this.text,
                        }

                        this.$emit('submit-edit',editedTodo)
                        this.text = ''
                    }
                }
            },
            created(){
                ...
            },
            emits:['submit-edit']
        }
    </script>

    <template>
        <form @submit.prevent="onSubmit">
            <input v-model="text" type="text">
            <button type="submit" class="btn btn-primary">Edit Todo</button>
        </form>
    </template>
```

We next handle the event in App.vue:

```vue{15,16,17,18,19,20,21,28}
<script>
    ...
    export default{
        ...
        methods:{
            deleteTodo(todoId){
                ...
            },
            AddTodo(todo){
                ...
            },
            handleEdit(todo){
                ...
            },
            submitEdit(editedTodo){
                this.todos = this.todos.map(
                    (todo) => todo.id === editedTodo.id ? {...todo, text: editedTodo.text} : todo
                )
                this.editMode = false;
                this.editTodo = null;
            }
        }
    }
</script>

<template>
    <div>
        <EditTodo v-if="editMode" :editTodo="editTodo" @submit-edit="submitEdit" :key="editTodo.id" />
        <AddTodo v-else @add-todo="addTodo" />
        <ToDoList : todos="todos" @delete-todo="deleteToDo" @edit-todo="handleEdit" />
    </div>
</template>

```

