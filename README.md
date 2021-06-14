# Senior Frontend Developer Challenge

## Project summary

The main requirement requests:

We would like to have a site to view the top 50 Cryptos based on Market Cap. In the first part of this project, we would like to see a list of the 50 best cryptos, and we want to be able to filter them by:

1. Name
2. Price
3. Market Cap
4. Circulating Supply (For example, Bitcoin Max supply is 21 Million Bitcoins, but the circulating supply is approx. 18 million)

In addition to the requested requirement, I added:

1. Change order filter "ascendant and descendant".
2. A search by name for specific cryptocurrency.
3. "Simple but beauty", i add the cryptocurrency icon to the table.

### Project structure

The project is structured in a simple way since it is a small project, the structure of the directories is: 

```
src
├── components -> Place here all compoenets
│   ├── CommonComponent -> This is a reusable component
│   └── ParentComponent -> This is a parent component       
│       │   ├── ChildComponent -> This is a child component
│       │   │   ├── index.tsx -> main file
│       │   │   └── index.test.tsx -> test file
│       │   ├── OtherChildComponent
│       │   │   ├── index.tsx
│       │   │   └── index.test.tsx
│       ├── index.tsx
│       └── index.test.tsx
├── reducers
│   └── ComponentReducer.ts
├── services
│   └── api -> Api service
├── styles
├── types
│   └── someType.ts
├── utils -> Utility functions
│   └── index.ts
└── index.js
```
### Components structure
The structure of the components directory is based the reactjs documentation, at the first level are the common components that can be used throughout the application and the parent components in which the components that are only used within a parent component should be placed here. 
### Styles
In component styles, I try to take full advantage of what tailwindcss provides, so I don't need to write my own styles.

### State management
For state management I did not use anything other than useReducer and useState, at the beginning I wanted to create a context in the application to provide the data and manage the filters with useContext although it was a good way to do it I think the best way was to concentrate the logic (simple) in a container component and pass the data to be displayed to child components, thus separating the logic from the rest of the interface.

### What else could I add?
I could add a detail page for each crypto currency so I could integrate react router and some graphs with the history of said crypto currency, also add some extra filters (I did this).

### Deployment
I must admit that I have never deployed a react application in Vercel so I usually use AWS, but after seeing how easy it is I think I have an extra option for future projects since what it offers is very good.

Thanks!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
