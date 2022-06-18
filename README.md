# SQL Query Executor (Dummy Application)

This is a dummy application to execute SQL query. It's not linked with any backend server or any query execution engine. As of now it can only execute 3 queries.
1. `select * from small-table`   
2. `select * from large-table`
3. `select * from xl-table`

We can also execute query using example query dropdown menu. 
I have also hosted this application on Azure static web app with github actions

#### Page URL: https://purple-bush-0c6798d0f.1.azurestaticapps.net/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Framework 

1. Next-js: Used next-js to opt for SSG
2. Material UI: Component library
3. Tailwind CSS: CSS utility library
4. React Virtualized: Used for virtualizing very large tables
5. Prismjs: Used for SQL code highlighting 

## Page performance matrix


1. First Contentful Paint: 0.4s
2. Time to Interactive: 0.7s
3. Largest Contentful Paint: 0.4s

Used lighthouse to measure page performance

## Optimization

1. Used static site generation to pre-build webpage in build phase itself as most of the page is static in nature 
2. Used react virtualized to virtualize large tables and load only rows which are visible to the user
3. Used useMemo to memoize complex transformations to avoid doing same transformations again