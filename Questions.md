# Questions

### 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

When using React, A Component will update whenever something changes, while S PureComponent would updates only if theres a change in the state or provided prop date. A PureComponent could break your app if there was any complex changes (e.g. props containing nested objects) to determine if it should update as it may not catch the changes.

### 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

It can trigger unnecessary re-renders where the values haven't changed.

### 3. Describe 3 ways to pass information from a component to its PARENT.

-   Pass a function prop from the parent to the child and then call that function with arguments from the child.
-   Using Context with a setState
-   Using state plugin (eg. Redux or Jotai) with the set function on the child.

### 4. Give 2 ways to prevent components from re-rendering.

-   Using the memo function to prevent rendering unless specified props change.
-   Using a useCallback or useMemo hook, which watch and only update if specifed props have updated.

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment `<>...</>` or `<Fragment>...</Fragment>` can be used to group multiple elements, as a component can return only one element.
When used in a map function, `<Fragment key="...">` can be used to render multiple elements within the loop return as it can take the `key` prop.
Fragments could break styling, as they don't insert DOM nodes so styles could be inherited from the parent (e.g. flex gap, flex-direction).

### 6. Give 3 examples of the HOC pattern.

Higher Order Components are a pattern that allow components to reuse logic.

Examples:

-   Authentication - Used to check if a user can access a component.
-   Data Fetching - Used to request data and pass reponse to children before rendering.
-   Error Handling - Used to catch errors thrown from child components and handle appropriatly.

### 7. What's the difference in handling exceptions in promises, callbacks and async…await?

-   Promises have their own `.catch()` method thats called when a promise is rejected.
-   Callback exceptions can be handled in function, using a check to see if the value is what the function expects and then be handle appropriately.
-   Async/Await exceptions can be handled using a try/catch block to caputure exceptions.

### 8. How many arguments does setState take and why is it async.

setState can take in one argument.Either an object or a callback. It is async as React can batch several setState calls into one for performance.

### 9. List the steps needed to migrate a Class to Function Component.

-   Use a function instead of a class, removing the class constructor.
-   Replace class component life cycle methods with the appropriate hook. (e.g. A `useEffect` hook to watch prop changes).
-   Replace class component state with a `useState` hook.
-   Remove references to `this.`.
-   Convert class methods to functions.
-   Amend the class render function to return the JSX.

### 10. List a few ways styles can be used with components.

-   Regular CSS - Create a .css stylesheet and import within another .css file or component, making use of classNames to attach styles.
-   CSS Modules - Import a css module into your component to use as a className reference.
-   Inline styles - attach css to an element using the styles attribute.
-   CSS in JS - Using something like [emotion](https://emotion.sh/docs/introduction) to create styles or styled-components, making use of component props to customise the styling.

### 11. How to render an HTML string coming from the server.

-   Using the `dangerouslySetInnerHTML` prop. Be careful to use only trusted data as you could introduce an XXS issue.

```
<div dangerouslySetInnerHTML={{__html: '<p>HTML String</p>'}}></div>

```
