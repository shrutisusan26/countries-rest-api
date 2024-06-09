
import '../App.css'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import { useContext, useEffect, useState } from 'react'
import CountriesContainer from './CountriesContainer'
import { useTheme } from '../hooks/useTheme'


function Home() {
  
    const [result , setResult] = useState('');
    const [isDark,setIsDark] = useTheme();
    // const windowSize = useWindowSize();
    // console.log(a)
    // const [isDark, setIsDark] = useOutletContext();

  return (
    <main className={`${isDark ? 'dark':'' }`}>
        <div className='search-filter-container'> 
            <SearchBar setResult={setResult}/>
            <SelectMenu  setResult={setResult} />
        
        </div>
        {/* <h1 style={{textAlign:'center'}}>{windowSize.width} x {windowSize.heigth}</h1> */}
        <CountriesContainer result={result} />
  </main>
  )
}

export default Home
