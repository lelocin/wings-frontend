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
npm install
```
3. Add CORS middleware so API requests from frontend can be processed
```
   app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```
4. Run frontend and backend server simultaneously 
```
npm start
```
## AI Usage
After establishing the basic structure for our frontend, we used Claude to refine and improve the design elements.
