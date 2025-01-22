import { Link } from "react-router-dom";
import PostSearch from "../routes/PostSearch";

export default function Slidebar() {
  return (
    <div className="px-4 h-max sticty top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <PostSearch />
      <h1 className="mt-8 mb-4 text-sm font-medium">Fitter</h1>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newst"
          className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 checked:bg-blue-800 bg-white"
        />
        Newest
      </label>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="most-popular"
          className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 checked:bg-blue-800 bg-white"
        />
        Most Popular
      </label>
      <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="sort"
          value="newst"
          className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 checked:bg-blue-800 bg-white"
        />
        Trending
      </label>
      <h1 className="mb-4 mt-8 text-sm font-medium">Categories</h1>
      <div className="flex flex-col font-sans text-slate-600 gap-1 mt-2">
        <Link to="/text" className="underline text-stone-800">
          All
        </Link>
        <Link to="/text" className="underline text-stone-800">
          Web Design
        </Link>
        <Link to="/text" className="underline text-stone-800">
          Development
        </Link>
        <Link to="/text" className="underline text-stone-800">
          Search Engines
        </Link>
        <Link to="/text" className="underline text-stone-800">
          Marketing
        </Link>
        <Link to="/text" className="underline text-stone-800">
          Management
        </Link>
      </div>
    </div>
  );
}
