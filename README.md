# RESTy
### LAB26 - Component Based UI

### Phase 1 Requirements

- The following user/developer stories detail the major functionality for this phase of the project.

   - As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
   - As a user, I want to enter the URL to a REST API and select the REST method to use to access it
   - As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested
- And as developers, here are the high level development tasks that address the above end user requirements

  - Create a visually appealing site with a Header, Footer, and a large content area
Create a form that asks for a URL
   - Create buttons that let the user choose from the REST methods (get, post, put, delete)
   - When the form is filled out, and the button is clicked, display the URL and the method chosen.

### Create React App

- npx create-react-app my-app
- cd my-app
- npm start

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### LAB27 - Component Based UI

- in this phase we will be connecting RESTy to live APAs, fetching and displaying remote data (pokemon api) with GET method.

#### Phase 2 Requirements
- The following user stories detail the major functionality for this phase of the project.

  - As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
   - As a user, I want to see the results returned from an API request in my browser in a readable format
- Application Flow:

   - User enters an API URL
   - Chooses a REST Method
   - Clicks the “Go” button
    - Application fetches data from the URL given, with the method specified
   - Displays the response headers and results separately
   - Both headers and results should be “pretty printed” JSON

- App.js serves as a container for all subcomponents
     - holds state: Count and Results Array
     - has a class method that can update state
     - renders 4 Child Components
- Form.js

    - updateResults function sent to it as a prop
    - renders a URL entry form
    - supplies a selection of REST methods to choose from
       - GET is the default
    - on submit:

      - sends API results back to App.js using the method sent down in props
-  Results.js 
    - receives props including headers and results
   - renders the result headers as "pretty" JSON
    - renders the result body as "pretty" JSON

