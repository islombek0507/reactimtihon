
import { Posts } from "../posts";
import {Route, Routes} from "react-router-dom";
import { PostSingle } from "../postsSingle/postsSingle";
import './homeStyle.scss';
import { MainLeftPost } from "../mainLeftPosts";
import { MainOne } from "../mainLeftOne";
import { Header } from "../header";
import {Disign} from '../disign/disign'
import { Ui } from "../ui/ui";
import { Ux } from "../ux/ux";
import { Typhography } from "../typography/typhography";
import { Footer } from "../footer/footer";

export const Home=()=>{
    return (
<><Routes>
                <Route path="/" element = { < Header />} />
                <Route path="/posts/:postId" element ={<Header />} />
                <Route path="/disign" element ={<Disign />} />
                
                <Route path="/ui" element ={<Ui />} />
            
                <Route path="/ux" element ={<Ux />} />
                <Route path="/typography" element ={<Typhography />} />
                <Route path="*" element = { < Error />} />
               
            </Routes>

        <main className="main">
            <Routes>
               
                <Route path="/" element = { < MainLeftPost />} />
                <Route path="/posts/:postId" element ={<MainOne />} />
              
               
            </Routes>
        
         <div className="main__right">
             
             <Routes>
                
                
                 <Route path = "/"  element = {<Posts />} />
                 <Route path="/posts/:postId" element ={<PostSingle />} />
               
            

                 </Routes>
                  
         </div>
        </main>

        <Routes>
               
               <Route path="/" element = { < Footer />} />
               <Route path="/posts/:postId" element ={<Footer />} />
             
              
              
           </Routes>
</>
    )
}
function Error() {
    return(
        <p>404 error</p>
    )
    
}