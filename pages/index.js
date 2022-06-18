import Prism from "prismjs";
import { useState } from "react";
import Header from '../components/Header'
import QueryInput from '../components/QueryInput'
import QueryResult from '../components/QueryResult'
import config from "../config";
import styles from '../styles/Home.module.css'

export default function Home() {

  const [queryResult, setQueryResult] = useState(null)
  const [executingQuery, setExecutingQuery] = useState(false);

  const execute = async (query) => {
    setExecutingQuery(true)
    const url = config.queryMap[query]
    if(!url) {
      setQueryResult([])
      setExecutingQuery(false)
      return;
    }
    try{
      const response = await fetch(url);
      const data = await response.json();
      setQueryResult(data);
    } catch {
      setQueryResult([])
    } 
    setExecutingQuery(false)
  }

  return (
    <div className='h-screen flex flex-col'>
      <header>
        <Header></Header>
      </header>

      <main className='flex flex-col items-center grow bg-gradient-to-r from-cyan-500 to-blue-500'>
        <QueryInput execute={execute}></QueryInput>
        <QueryResult executingQuery={executingQuery} queryResult={queryResult}></QueryResult>
      </main>
    </div>
  )
}
