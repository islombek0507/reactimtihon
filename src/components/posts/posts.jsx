// import {useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {Loader} from '../Loader/Loader';
import './postsStyle.scss';

export const Posts = () =>{
    
    const lemit = 11;
    const [page, setPage] = useState(1)
  const [posts, setPosts] =useState({
      isLoading: true,
      isError: false,
      data: []
  });
   const  prevRef = useRef()
   const  nextRef = useRef()

   useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        setPosts({
            isError: false,
            isLoading: false,
            data: data,
        });
    })
    .catch((err)=>{
        setPosts({
            isLoading: false,
            isError: true,
            
        })
    })
   }, []);


   useEffect(()=>{
       const lastPage = Math.ceil(posts.length/lemit);
       if(page===1){
           prevRef.current.disabled=true;
       }  else{
        prevRef.current.disabled = false;
       }
       if(page===lastPage){
           nextRef.current.disabled = true;
       } else {
        nextRef.current.disabled = false;
       }
       // eslint-disable-next-line
   }, [page]);

   const handlePrev=()=>{
      if(page>1){
        setPage(page-1);
      }
   }
   const handleNext=()=>{
      setPage(page+1);
   }
    return (
        <>
        <h2 className="post__name">Recent Posts</h2>
         {posts.isLoading && <Loader />}
         {posts.isError && <p>Error..</p>}
         { posts.data.length > 0 && (
             <ul className='post__list' >
                 {
                     posts.data.slice((page-1)*lemit, page*lemit).map((post) =>(
                         <li className='post__item' key={post.id}>
                             <p className='post__top-text'><span className='post__span'>September 24.2020</span> <span  className='post__span'>Design theory</span></p>
                             <Link className='post__link'  to={`/posts/` + post.id} >{post.title}</Link>
                             <p className='post__span'>3 minutes read</p>
                         </li>
                     ))
                 }
             </ul>
         ) }
      <div className='btns'>
       <button className='paginetions' ref={prevRef} onClick={handlePrev} >prev</button>
       <button className='paginetion'>1</button>
       <button className='paginetion'>2</button>
       <button className='paginetion'>3</button>
       <button className='paginetion'>4</button>
       <button className='paginetion'>5</button>
       <button className='paginetions' ref={nextRef} onClick={handleNext}>next</button>
       </div>
        </>
    )
}