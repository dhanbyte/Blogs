import { useState } from "react";
import PostList from "./PostList";
import Slidebar from "../Component/Slidebar";

export default function PostListPage() {
  const [open ,setopen] = useState(false)
  return (
    <div>
      <h1 >Development Blog</h1>
      <button onClick={()=> setopen((prev)=> !prev)}  className= "text-sm mb-4 md:hidden rounded-2xl px-4 py-2 mt-4  bg-blue-800 text-white">

        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex  flex-col-reverse md:3/5 gap-4 md:flex-row">
        <div >
        <PostList/>
        </div>
        <div className={`${open ? "block" : "hidden" } md:block md:w-2/5`}>
            <Slidebar/>
        </div>
      </div>
    </div>
  )
}
