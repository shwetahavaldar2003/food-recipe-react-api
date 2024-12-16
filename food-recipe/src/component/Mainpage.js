import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("")
  const handleInput = (event) => {
    setSearch(event.target.value)
  }
  const myFun = async () => {
    if (search === "") {
      setMsg("please enter something")
    } else {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsondata = await get.json()
      // console.log(jsondata.meals);
      setData(jsondata.meals)
      setMsg("")
    }
  }
  // console.log(data);
  return (
    <>
      <h1 className='head'>Food Recipe App</h1>
      <h3>"Great recipes tell stories, and great meals create memories"</h3>
      <div className='container'>
        <div className='searchBar'>
          <input type='text' placeholder='Enter Dishes' onChange={handleInput} />
          <button onClick={myFun}>Search</button>
        </div>
        <h4 className='msg'>{msg}</h4>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  )
}
export default Mainpage;