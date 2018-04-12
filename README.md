# README
A responsive (phone, tablet, desktop) web application that allows the user to quick filter a list of campgrounds. I used National Park Service's open public API to pull campground-related data. The top of the page has a search input field and below that, there are a list of campgrounds in response to the filter. The campgrounds are sorted alphabetically, are unique, and I removed any names with less than 3 characters.

### For more info on the open public API.
[API Documentation](https://www.nps.gov/subjects/developer/api-documentation.htm#/campgrounds/getCampgrounds)

Limit with API key is 1000 requests/hr.

### Primary technologies and libraries used
- Ruby on Rails, jbuilder, HTTParty
- PostgreSQL,
- React w/ Redux, jquery


### Features & Implementation
- Used HTTParty to make server-side GET request to NPS's open public API.
- AJAX pulled from a Rails backend service

- quick search filter

![search_filter](images/search_filter.gif)

- pagination

![pagination](images/pagination.gif)


### To run locally:
- clone/download srepo
- bundle install
- npm install
- run rails s
- run npm start
