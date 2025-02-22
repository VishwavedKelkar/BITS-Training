import React, { useState } from 'react'
import { useSearchParams } from "react-router-dom";

const Queryparams = () => {
    const [state,setState] = useState<string>('');
    const [searchParams , setSearchParams] = useSearchParams();

    const handleInput = () => {
        if (state.trim() === '') {
            setSearchParams({});
        } else {
            setSearchParams({ query: state });
        }
    }
  return (
    <>
        <div>
        <h2>Query Params </h2>
        <input type='text' placeholder='Enter the text' value={state} onChange={(e)=>setState(e.target.value)}/>
        <button onClick={handleInput}>Search</button>
        <p>Current query : {searchParams.get("query") || "None"}</p>
        </div>
    </>
  )
}

export default Queryparams