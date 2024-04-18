# Lighthouse Labs | React Developer Workflow

* [X] Creating React Applications
* [X] Limitations of React
* [X] Planning a Project
* [ ] Working Through an Example!

## React

* A front-end library to help us develop interactive web pages
* We want to breathe life into our User Interface
* React gives us an easier way to develop our front-end in more isolated and job-specific building blocks—"components"!

## Potential Limitations

* SPA - Single Page Applications
    * When we use front-end logic and/or Ajax to populate new "screens" without a full new page request, it often leads to:
        * A faster/snappier experience (because loading small JSON is faster than a full page load)
        * Replacing/changing UI in-browser is faster than asking for a full new page
        * A superior user experience
    * Potential downside is it often requires a bit of extra dev elbow grease (React helps with this a bit via Components!)
    * Aren't super SEO-friendly out-of-the-box...
        * Search Engine bots love MPA, because they can easily build a sitemap
        * In SPA, if we're not very careful, we lose the ability to be scanned like this (aka the sitemap might not not be communicated or even possible)
        * Almost no, if any, Search Engine bots will run JavaScript to understand your page fully
        * Some users/browsers may not want to/be able to run JavaScript in the browser

## React Tools for Full-Stack Development

These tools solve our above concerns, as they can server-side render our components and send a fully HTML set of content to the browser. This is fantastic for search engines or JS-disabled devices/browsers. React-concious alternatives to Express:

* NextJS -> Write React components in a back-end
* Remix
* Astro
* Fresh

## `create-react-app` (CRA)

"Create React App" is falling out of favour.

* [Vite](https://vitejs.dev/)

## Tools of the Trade

* [Chrome React Dev Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Edge React Dev Tools](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)
* [Firefox React Dev Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Build Tools

* WebPack -> minifies and combines our scripts for production
* Babel -> transpiles; converts JSX into normal JS
* (Sass -> transpiles; converts SCSS into CSS)

## To-Do List App

A front-end only to-do list app; what features do we want to support?

### User Stories

* A user should be able to add a new to-do to keep track of what they're up to.
    * A user should be able to set a deadline on their to-do, so they have an idea of when it should be completed.
    * A user should be able to set a priority to influence the order of their to-dos; this will help them address the most important first.
* A user should be able to "complete" an existing to-do to keep track of what they've already done.
* A user should be able to view all of their to-dos so they know what they have to work on.

### Data

Mock data object/array.

```
const todos = {
    'dfsfsd908fsd90f8sd0': {
        id: 'dfsfsd908fsd90f8sd0',
        title: 'Buy milk',
        description: 'Go to Wal-Mart™ and buy some 2%!',
        priority: 2, // lower number = higher priority
        deadline: '2024-04-25',
        createdOn: '2024-04-18',
        completed: true, // or false
    }
};
```

### What Components do we Need for the Above?

How might we represent this to the user?

* `<ToDoList />`
* `<ToDoItem />`
* `<NewToDoForm />`
* `Stretch: <EditToDoForm />`

## What are props?

* Properties passed down to a component from a parent
* We can pass these down, but not back up

## What is state?

* Represents current values within our component(s)
* Can trigger a re-render if the value changes
