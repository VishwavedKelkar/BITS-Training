import React, { ChangeEvent, useEffect, useState } from 'react'

type itemType = {
    userId:number;
    id:number;
    title:string;
    body:string;
}

const FetchAPI = () => {

    const [fetchedData,setFetchedData] = useState<itemType | null>(null);
    const [inputUserId,setInputUserId] = useState<string | null>(null);
    const [inputTitle , setInputTitle] = useState<string | null>(null);
    const [inputBody,setInputBody] = useState<string | null>(null);
    const [postId,setPostId] = useState<string | null>('');
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);


const fetchPost  = async() =>{
    if(!postId) return;
    
    setLoading(true);
    setFetchedData(null);
    setError(null);

    try{
        console.log('fetchPost is called');
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if(!res.ok){
            throw new Error(`Post with Id ${postId} not found`);
        }
        const data = await res.json();
        setFetchedData(data);
    }
    catch(error){
        setError((error as Error).message);
    }
    finally{
        setLoading(false);
    }
};

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            fetchPost();
        },2000);

        return ()=>clearTimeout(timeout);
    },[postId]);

    const handleInput = async (e:ChangeEvent<HTMLInputElement>) => {
        setPostId(e.target.value);
        setFetchedData(null);
    }


    const postData = async(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        console.log('postData is called')
        if(!inputTitle && !inputUserId && !inputBody) return;
        setLoading(true);
        setError(null);
        setInputTitle(null);
        setInputBody(null);
        setInputUserId(null);

        try{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
                method:'POST',
                body:JSON.stringify({
                                        title:inputTitle,
                                        body:inputBody,
                                        userId:inputUserId,
                                   }),
                }
             );
        const data = await res.json();
        setInputUserId(data.userId);
        setInputTitle(data.title);
        setInputBody(data.body);

        console.log(`UserId: ${inputUserId}\nTitle: ${inputTitle}\nBody: ${inputBody}`);
        window.alert(`Post Method Exeuted\nStatus : ${res.status}\nUserId : ${inputUserId}\nTitle : ${inputTitle}\nBody : ${inputBody}`);

        }catch(error){
            setError((error as Error).message);
        }
        finally{
            setLoading(false);
        }
    }

    const handleTitle = async(e:ChangeEvent<HTMLInputElement>)=>{
        setInputTitle(e.target.value);
    }

    const handleuserId = async(e:ChangeEvent<HTMLInputElement>)=>{
        setInputUserId(e.target.value);
    }

    const handleBody = async(e:ChangeEvent<HTMLInputElement>)=>{
        setInputBody(e.target.value);
    }

  return (
    <>
        <h2>Fetch API</h2>
            <label>
                Enter Post ID: <input type='number' placeholder='Enter the post ID' value={postId || ''} onChange={handleInput}/>

                {loading && <p>Loading</p>}
                {error && <p>{error}</p>
                }
                {fetchedData && (
                    <div>
                        <p>{fetchedData.title}</p>
                        <p>{fetchedData.body}</p>
                    </div>
                )}
                <div>
                {/* <   button onClick={fetchPost}>Fetch</button> */}
                </div>
            </label>
            <form className='userInput'>
                <br/>
                <h2>Enter the details</h2>
                <br/>
                    userId: <input type='number' placeholder='Enter the userId' value={inputUserId || ''} onChange={handleuserId}/>
                    <br/>
                    <br/>
                    Title: <input type='text' placeholder='Enter the title' value={inputTitle || ''} onChange={handleTitle}/>
                    <br/>
                    <br/>
                    Body: <input type='text' placeholder='Enter the Body' value={inputBody || ''} onChange={handleBody}/>
                    <br/>

                    {inputUserId && <p>UserId : {inputUserId}</p>}
                    {inputTitle && <p>Title : {inputTitle}</p>}
                    {inputBody && <p>Body : {inputBody}</p>}

                <br/>
                    <button onClick={postData}>Post</button>

            </form>
    </>
  )
}

export default FetchAPI