import { Link } from "react-router-dom";
import Image from "../Component/Imagekit";

export default function PostListPage() {
  return (
    
           <div className="flex flex-col xl:flex-row gap-12">
   {/* imgae */}
    <div className="md:hidden gap-8 my-2 xl:block xl:w-1/3">

    <Image src="postImg.jpeg" w="735" className="rounded-2xl object-cover"  />
    </div>
    {/* deteils */}
    <div className="w-full xl:w-2/3  flex-col  gap-4">
    <Link className="text-5xl font-semibold" >Lorem ipsum dolor sit amet consectetur adipisicing elit.  
    </Link>
    <div className="gap-8 mt-5">
      <span>Written by </span>
      <Link to="/text" className="text-blue-800">John Doe </Link>
      <span >on </span>
      <Link to="/text" className="text-blue-800">Web Design</Link>
      <span> 2 days ago</span>

      
    </div>
    <div className="flex gap-4 mt-4">
      <p  className="font-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis, esse sed nam voluptatibus ea atque ratione recusandae reprehenderit perspiciatis, eum aspernatur, amet temporibus. Distinctio quibusdam laboriosam facere ipsam ab.</p>
    </div>
     <div className="flex gap-4 mt-4">
      <Link to="/text" className="text-blue-800 underline mt-4">Read More</Link>
     </div>
    </div>
    {/* title */}


    {/* description */}
    </div> 
  )
}
