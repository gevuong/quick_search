# README
A responsive (phone, tablet, desktop) web application that allows the user to quick filter a list of campgrounds. I used National Park Service's open public API to pull campground-related data. The top of the page has a search input field and below that, there are a list of campgrounds in response to the filter. The campgrounds are sorted alphabetically, unique, and I removed any names with less than 3 characters.

### Deployed to Heroku
[Quick-Search Live](https://quick-search-filter.herokuapp.com/)

### For more info on the open public API.
[API Documentation](https://www.nps.gov/subjects/developer/api-documentation.htm#/campgrounds/getCampgrounds)

Limit with API key is 1000 requests/hr.

### Primary technologies and libraries used
- Ruby on Rails, jbuilder, HTTParty
- PostgreSQL
- React w/ Redux, Axios, React Spinner, CSS Transition Group
- Heroku

### Features & Implementation
- Ok, here's a step-by-step process of what happens when the page is loaded.
    1. When React component is mounted, a thunk action called requestAllCampgrounds() is invoked.
    2. The thunk action makes an AJAX GET request to the Rails backend API route called '/api/campgrounds'.
    3. A resource is generated, and the API route determines that the request be sent to the #index controller action.
    4. The #index controller action make a GET request using HTTParty to National Park Services open public API by communicating with the model and invoking a defined fetch() class method.
    5. Response returns an object stored in an ivar, and jbuilder is then used to parse the data to return a JSON structure of the parsed data.

    Now...back to the thunk action we mentioned in Step 2.

    6. Upon successful retrieval of data, the sync action called receiveAllCampgrounds is dispatched to the reducer.
    7. The reducer then updates the state by returning a new object because the state in reducer should never be mutated.
    8. The store receives the updated application state, and is passed as a prop to the container components using a React component called <Provider>.
    9. The state is then mapped to props in the container, and is passed to the index component, thus rendering all the fetched campground names in a list.
    10. The app no longer needs to communicate with the backend, and the quick filter and pagination feature are all implemented on the frontend by manipulating the list of campgrounds received.


### Gifs of Web App

- quick search filter

![search_filter](images/quick_search.gif)

- pagination

![pagination](images/pagination.gif)

- responsive

![responsive](images/responsive.gif)


### To run locally:
- clone repo
- bundle install
- npm install
- rails db:create, rails db:migrate
- rails s
- npm start
- localhost:3000


## Future Plans
- Include a field for user to specify limit parameter in external API call.
