# Wings of Sound Full Stack (updated)
Wings of Sound is a venue-finding application for artists to discover venue spaces in New York to host performances. Through our frontend app, users can search venues based on filters like venue capacity, venue location and venue style to find their ideal venue. 

## Figma Wireframe 
Here is the link to our Figma wireframe! Page 1 is our frontend wireframe and Page 2 is our fullstack wireframe. 
https://www.figma.com/design/xgFNCmWGeZXxc80xNeJXGm/Wings-of-Sound-Wireframe?node-id=0-1&t=yQhcsqv2YvsrCwyr-1

## Design decisions & technical choices 
We consolidated all components onto a single page for simplicity. To give the landing page a professional look, we used a full page image. Overall, our frontend design prioritizes a smooth and user-friendly experience, with dropdown menus and search bars that enable quick and easy access to information.

## Components 
Our react app has three components, which are header, filter and results. 
1. Header: the header section provides space to explain what Wings of Sound is 
2. Filter: the filter section allows users to search using filters (dropdown menus and search bars)
3. Results: the results section displays results from the filter section and provides users with basic information of the venue
4. VenueItem: this component is used by both Results and VenueList for formatting purposes

## API Documentation
The base URL is http://localhost:8000. And the currently available endpoints are as follows: 
1. GET (this endpoint is available on React App): Get all venue details
     ```
     URL: /venues/
     ```
2. POST: CREATE non-existing venue(s) in the venues table
     ```
     URL : /venues/
     ```
3. READ: READ a specific venue in the venues table by passing venue_id
     ```
     URL : /venues/{venue_id}
     ```
4. PUT: UPDATE a venue in the venues table based on venue_id
     ```
     URL : /venues/{venue_id}
     ```
5. DELETE: DELETE a venue in the venues table
     ```
     URL : /venues/{venue_id}
     ```

## Setup - Connecting Frontend & Backend 
Make sure to download the following two softwares: 
- Node.js 
- Git

1. Clone the git repository for frontend and backend 
```
git clone https://github.com/lelocin/wings-frontend.git
cd wings-frontend

git clone https://github.com/apb9717/wings-of-sound.git
cd wings-of-sound
```
2. Install dependencies
```
cd wings-frontend
npm install
```
```
cd wings-of-sound
pip install -r requirements.txt
```
3. Run frontend and backend server simultaneously 
```
cd wings-frontend
npm start
```
```
cd wings-of-sound
uvicorn main:app --reload
```
## AI Usage
After establishing the basic structure for our frontend, we used Claude to refine and improve the design elements.
