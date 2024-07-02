### `Setup Instructions`

After downloading or cloning the code, follow these steps:

1. Open Visual Studio Code.
2. Navigate to the root folder of the project.
3. Run `npm install` in the terminal to install the necessary

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `API Information`

The application uses the following API endpoint to fetch transactions:

`https://6682e2164102471fa4c88fcb.mockapi.io/all/transactions`

This endpoint returns an array of transaction objects. Each object has the following structure:

```json
[
  {
    "customerId": 1,
    "amount": 120,
    "date": "01-15-2023"
  },
  {
    "customerId": 1,
    "amount": 170,
    "date": "01-16-2023"
  },
  {
    "customerId": 1,
    "amount": 75,
    "date": "02-13-2023"
  },
  {
    "customerId": 1,
    "amount": 200,
    "date": "03-11-2023"
  },
  {
    "customerId": 2,
    "amount": 120,
    "date": "01-15-2023"
  },
  {
    "customerId": 2,
    "amount": 50,
    "date": "02-13-2023"
  },
  {
    "customerId": 2,
    "amount": 150,
    "date": "03-11-2023"
  }
]