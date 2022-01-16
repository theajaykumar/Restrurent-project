import React from 'react'
import Card from './container/Card'
import Filter from './container/Filter'
import Header from './container/Header'
import Table from './container/Table'

const Home = () => {
    return (
        <div>
      <Header />
      <Table />
      <Filter />
      <Card />
        </div>
    )
}

export default Home
