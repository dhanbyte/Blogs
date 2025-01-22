import { Link } from "react-router-dom";
import FeaturedPosts from "./FeaturedPosts";

export default function MainCategories() {
  return (
    <div>
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-4xl p-4 shadow-lg items-center gap-8 justify-between">
      {/* {Links} */}
      <div className="flex-1 items-center justify-center flex-wrap">
        <Link
          to="posts"
          className="bg-blue-800 text-white rounded-full p-4 py-2"
        >
          All Posts{" "}
        </Link>
        <Link
          to="posts?cat=web-desingn"
          className="hover:bg-blue-50  rounded-full p-4 py-2"
        >
         Web Design
        </Link>
        <Link to="posts?cat=web-desingn" className="hover:bg-blue-50  rounded-full p-4 py-2">
          Development
        </Link>
        <Link to="posts?cat=development" className="hover:bg-blue-50  rounded-full p-4 py-2">
        Detabases
        </Link>
        <Link to="posts?cat=search-engines" className="hover:bg-blue-50  rounded-full p-4 py-2">
        Search Engines
        </Link>
        <Link to="posts?cat=marketing" className="hover:bg-blue-50  rounded-full p-4 py-2">
       Maekting
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* SEARCH */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2" >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        width="20"
        height="20"
        stroke="gray"
        >
        <circle cx="10.5" cy="10.5" r="7.5"></circle>
        <line x1="16.5" y1="16.5" x2="22" y2="22"></line>
      </svg>
      <input type="text" placeholder="Search a post..." className="bg-transparent text-gray-800 w-full "/>
       
        </div>
    </div>
        <FeaturedPosts/>


    
        </div>
  );
}
