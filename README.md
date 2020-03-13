# Ad-2019

Test repository for selection.
## Installation
Edit the `.env` file inside the `backend` folder.
Replace with your E-mail credentials and the Mongo URI (optional).

To install and run individually, enter the `backend` and  `frontend` folder and run `npm i` and `npm run start` on both.

## Run
To run the projects, it is possible to run both together by running the file `run.dev.sh` (`sh run.dev.sh` for linux).

## Frontend
The Frontend is done in React with Redux and will run at: [http://localhost:3000/](http://localhost:3000/).

#### Used libraries
formik, yup, redux, redux-thunk, axios

## Backend
The Backend is done in Node with Express and will run at: [http://localhost:3003/](http://localhost:3003/).

#### Used libraries
Cors, dotenv, express, mongoose, nodemailer, nodemon


## Pendencies
No `styled components` were applied, the backend could have had some kind of authentication with Header or `Token Baerer` but I decided not to apply any of them.