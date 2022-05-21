export const Search=({posts, setPosts})=>{

    const searchPost = (data)=>{
        const search=input(data.text);
        let pattern = new RegExp(search, "gi") || 'No books found';
        ;(async function () {
            let responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data =  await responce.json();
        
        return(
            console.log(data)
        )
        })();
    }


    return(
        <div className="form"> <input className="form__input" type="text" placeholder="search" /> <button onClick={searchPost} className="form__btn">search</button></div>
    )
}