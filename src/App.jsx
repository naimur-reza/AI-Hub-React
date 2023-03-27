import './App.css'
import Button from './Components/Button/Button'
import Card from './Components/Card/Card'
import Nav from './Components/Nav/Nav'
import React, { useEffect, useState } from 'react';


function App() {
  const [data , setData] = useState([]);
  const [showAll , setShowAll] = useState(false);
  const handleSort = () => {
    const sortedData = data.sort((a,b) => {
      return new Date(a.published_in) - new Date (b.published_in);
    })
    setData([...data, sortedData])
  }
  useEffect(()=> {
      const loadData = async () => {
          const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
          const data = await res.json();
          setData(data.data.tools)
      };
      loadData();
  },[])

  return (
    <div className="App">
      <Nav></Nav>
      <span onClick={handleSort}><Button>Sort By Date</Button></span>
      <Card data={data}></Card>
      
    </div>
  )
}

export default App
