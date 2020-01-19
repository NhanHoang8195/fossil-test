This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Setup and run FOSSIL-TEST app
After clone this repo to your local machine, do following steps to run this app:   
Run following commands:   

`cd fossil-test`   
`npm install`   
`npm start`   

After finished all of the commands above, you can open any browsers and
access to http://localhost:3000/order to book a ticket of cinema.

What i have done this test:
 + Implement UI same with mockup.
 + Use [react-bootstrap-table-2](https://react-bootstrap-table.github.io/react-bootstrap-table2/) library to display table
 + Use mockdata json file to mock data display in table (static load, not silmulate api call)
 + Pagination use [react-pagination](https://www.npmjs.com/package/react-paginate) library. All page is the same data. Static load
 + The ideal for display table is each click on pagination, make a call api to  server to fetch data for each page.
 + Use [redux-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) for routing.
 + Use [react-bootstrap](https://react-bootstrap.github.io/) for convention.

You can review quickly throught these files in order:
src/index.js => src/containers/home/App.js.

Structure for this project.

src/   
  ├──components/  
  |    ├──dataTable/   
  |    |     ├──index.js   
  |    |     └──styles.scss   
  |    └──pagination/   
  |          ├──index.js   
  |          └──styles.scss   
  |
  ├──containers/   
  |    ├──homeConatainer/
  |    |     ├──index.js   
  |    |     └──styles.scss   
  |    ├──orderContainer/   
  |    |    ├──confirm/   
  |    |    |     ├──column.js   
  |    |    |     ├──index.js   
  |    |    |     └──styles.scss   
  |    |    ├──process/   
  |    |    |     ├──index.js   
  |    |    |     └──styles.scss   
  |    |    ├──index.js           
  |    |    └──styles.scss    
  |    └──App.js   
  |
  ├──image/   
  |    └──avatar.jpg   
  ├──layout/   
  |    ├──footer/
  |    |     ├──index.js   
  |    |     └──styles.scss   
  |    ├──header/
  |    |     ├──index.js   
  |    |     └──styles.scss   
  |    ├──index.js   
  |    └──styles.scss   
  ├──mockData/   
  |    └──dataTable.json   
  ├──util/   
  |    └──index.js   
  ├──styles.scss   
  ├──index.js   
  └── serviceWorker.js