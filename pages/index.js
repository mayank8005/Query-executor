import Prism from "prismjs";
import Header from '../components/Header'
import QueryInput from '../components/QueryInput'
import QueryResult from '../components/QueryResult'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <header>
        <Header></Header>
      </header>

      <main className='flex flex-col items-center grow bg-gradient-to-r from-cyan-500 to-blue-500'>
        <QueryInput></QueryInput>
        <QueryResult></QueryResult>
      </main>
    </div>
  )
}
