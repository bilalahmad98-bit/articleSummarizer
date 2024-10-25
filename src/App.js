
import { useState } from 'react';
import './App.css';

function App() {

const [link,setLink]=useState("");
const [Summary,setSummary]=useState("");
const[loading,setLoading]=useState(false);

const fetchSummary=async()=>{
  setLoading(true);
  const summary=await fetch(`https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${link}&lang=en&engine=2`,{
    method: 'GET',
    headers: {
      'x-rapidapi-key': '24783ec466msh3a954ec6f5b83abp16a6c7jsnf4eb425c84de',
      'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  });
  const data=await summary.json();
  console.log(data);
  setSummary(data);
  setLoading(false);
  return data;

}

  return (
    <div className="App">  
    <h2>Article Summarizer Application</h2>
  <input type='url' placeholder="Enter article URL"  onChange={(e)=>{setLink(e.target.value)}}></input>
  <button onClick={fetchSummary}>Click</button>
  {loading? <p>Loading summary..... </p> : (
  Summary.summary && <p className='summary'>{Summary.summary}</p> 
)}
  {/* short cicuiting of logical operator */}
    </div>
  );
}

export default App;
