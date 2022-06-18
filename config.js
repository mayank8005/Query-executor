const config = {
    headerText: 'Query Executor',
    queryMap: {
        'select * from small-table': 'public/mockQueriesData/small-table.json',
        'select * from large-table': 'public/mockQueriesData/large-table.json',
        'select * from xl-table': 'public/mockQueriesData/xl-table.json'
    }
}

export default config;