# Ashkaan Jaberi - Dragon Chain Assignment

To run locally:
-clone the respository.
-run `npm install`
-run `npm start`
The webpack dev server will serve the site on `localhost:3000`


To run the unit test suite (using Jest): for docs see: https://facebook.github.io/jest/
-in your console run `npm test`;
The full report will display in your console.


### Solution Explanation
My parent component that maintains state is the `KeyValueContainer` component.  The state of the component contains one key named `keyValArray` which is an array of objects.  Each object has 3 keys:

 1. `id` - which is an uuid generated for that specific object
 2. `key` - which contains the input given for the Key Input
 3. `value` - which contains the input given for the Value Input

The values of each of these objects are received via the `KeyValue` component, which is a simple React form.  Updates to the form's inputs are immediately sent back to the `KeyValueContainer` component which keeps every form's information in its' state. 

The last component that I created is the `KeyValueDisplay` component, which is a stateless component that is solely responsible for rendering a `KeyValue` component/form for each index item in our parent container's state. 

Finally - the `KeyValueContainer` also has a button which will log each Key/Value pair to the browser's console in JSON format. 
