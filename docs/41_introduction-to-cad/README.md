# Introduction to CAD in Fusion 360

Every product that is mass produced is at some stage of its development drawn in a Computer Aided Design (CAD) software. Once drawn in CAD changes can be made fairly quickly, with assembly's one can see how the parts fit and interact without having to make them first and several tests like strength, vibration, electrical, ... simulations can be done.

![IMAGE](./images/afbeelding1.png)

We have chosen Fusion 360 ([install info](../51_fusion360/README.md)) as CAD software because it's free for education, you can do the mechanical as electrical design in the same software and it's largely supported by communities and companies.

:::warning 📎Note
In this course I won't go over all the details you need to do to create what you need. In stead we will make a few examples so you understand the methodology of CAD. Once you have mastered that it becomes easy to create whatever part you need in whatever CAD software you want.
:::

## The workspace

![IMAGE](./images/afbeelding2.png)

1. Application Bar
    
    Within the application bar, there are 4 key areas.
   * **Data panel** – houses your design files.
   * **File menu** – create, export, or share your designs.
   * **Save** – Save your designs along with version descriptions.
   * **Undo and Redo buttons** – to revert your most recent actions.

    Across the top, you’ll see tabs that represent each design file. The file name and version number will be displayed on the tab. However, if you have a large number of files open, then you’ll only be able to see the name on hover. This works in a similar manner to the tabs in your web browser.

2. Data Panel
   
   The Data Panel houses all of your design files. Within the data panel, you can create new projects and folders, to further organize your files.

    The data panel also allows you to manage other users who are collaborating on your projects, but note that there are restrictions based on which license type you’re using.

    Any time that you’re coming back to open a project, you’ll simply need to double-click on the file or right-click and select the “open” option.

3. Profile and Help
   
   * **Notification Center** – Notifications will appear (a few times a year) with important notices, such as planned maintenance.
   * **Job Status** – View job status, Fusion 360 update status, and online/offline status.
   * **Profile** – Click your name to:
     * Access your Autodesk Account
     * Adjust your Fusion 360 preferences
     * Switch between teams
     * View or edit your profile
     * Sign out
  
4. Toolbar
   
    The toolbar allows you to select what type of workspace you would like to work in. It’s important to note that the tools on the toolbar will differ in each workspace.

    Within each toolbar, there are also tabs, which further organize the tools into logical groupings.

    As you start to discover your own common workflows you can customize and rearrange your toolbar features.

5. Browser
   
    The browser lists objects in your design, including planes, sketches, parts, assemblies, and so on. You can think of the Browser as your file structure.

    Within the browser, you can change the visibility of objects as well as change your document units.

6. ViewCube
   
    The viewcube allows you to orbit your design or view the design from standard view positions. You can either select faces, corners, or the arrows, or you can simply click and drag the viewcube around.

    You can also hit the home icon, which is next to the viewcube, to view the model in the default home position.

7. Canvas and Marking Menu
   
    The middle section of Fusion 360 is where you’ll be doing sketching and doing all of your design work. Therefore, this section is referred to as the canvas.

    Within the canvas, you can access the “marking menu,” which is also referred to as the right-click menu.

    If you right-click you’ll see frequently used commands, along with the ability to change workspaces, without having to go to the upper left corner.

    To fully utilize the marking-menu, you’ll want to memorize the position of the available features. The marking-menu gives users the ability to right-click and drag (at the same time) toward the feature they want to quickly access.

    For example, right-click and drag towards two-o-clock to activate the press pull command.

8. Navigation Bar and Display Settings
   
    The navigation bar contains commands used to zoom, pan, and orbit your design. These options will give you a little bit more control over the use of the viewcube.

    The display settings control the appearance of the interface. You can change the environment style (color), you can turn on and off ground shadows and other effects, turn grids on or off, or view your design from multiple views at once.

9. Timeline
    
    The timeline lists the order of operations performed on your design. Double-click on timeline features to quickly edit their properties. You can also right-click operations to make additional changes. 

    Because Fusion 360 is a parametric modeling program, you can also drag the operations around to change the order they are calculated. However, you’ll want to be very careful as changing the order can also cause errors or problems with your model.

## Sketching

Many features that you create in Fusion 360 start with a 2D sketch. In order to create intelligent and predictable designs, a good understanding of how to create sketches and how to apply dimensions and geometric constraints.

### The basics

Sketching is like drawing on a piece of paper, in CAD that paper is a plane or a surface that already exists. The lines and curves you draw are made by using drawing tools and if you want something to be perpendicular, parallel,... we will be using constraints for this. And we even have a gum to remove parts of a drawing.

:::tip 💡Tip
It is considered a good practice to create parts symectricaly around the origin. This is advantageous when you use the parts in an assembly 
:::

#### Excercise 1

We will draw this sketch on the XZ plane.

<!-- TODO: de schets mooi tekenen en inscannen en hier plaatsen -->

#### Excercise 2

We will draw this sketch on a plane with an offset of 50 from the XY plane.

<!-- TODO: de schets op pg 33 van de cursus OP hier plaatsen -->




