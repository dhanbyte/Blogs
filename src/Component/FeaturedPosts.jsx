import { Link } from "react-router-dom";
import Image from "./Imagekit";

export default function FeaturedPosts() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Frist Part */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}

        <Image src="featured1.jpeg" w="895" className="rounded-3xl object-cover" />
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Desing</Link>

          <span className="text-gray-500">2 days ago</span>
        </div>
        <Link
          to={"/test"}
          className=" sm:text-lg md:text-2xl lg:text-3xl xl:text:text-2xlfont-bold font-bold   lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Link>
      </div>


      
      {/* Second Part */}
      
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* first card */}
        <div className="flex lg:h-1/3 justify-between gap-4">
          <Image
            src="featured3.jpeg"
            className="rounded-3xl  w-[15rem] h-[10rem]  aspect-video"
          />
          {/* details and tilte */}
          <div className="w-2/3">
            {/* <details></details> */}
            <div className="flex items-center text-sm lg:text-base gap-4 mb-4">
              <h1 className="font-semibold">04.</h1>

              <Link to={"/test"} className="text-blue-800"> Web Design</Link>
              <span className="text-gray-500 text-sm" >2 days ago</span>
            </div>
            {/* title and description */}
            <Link to={"/test"} className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Link>
          </div>
        </div>   
        {/* second card */}
        <div className="flex lg:h-1/3 justify-between gap-4">
          <Image
            src="featured3.jpeg"
            className="rounded-3xl  w-[15rem] h-[10rem]  aspect-video"
          />
          {/* details and tilte */}
          <div className="w-2/3">
            {/* <details></details> */}
            <div className="flex items-center text-sm lg:text-base gap-4 mb-4">
              <h1 className="font-semibold">04.</h1>

              <Link to={"/test"} className="text-blue-800"> Web Design</Link>
              <span className="text-gray-500 text-sm" >2 days ago</span>
            </div>
            {/* title and description */}
            <Link to={"/test"} className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Link>
          </div>
        </div>   
                {/* third card */}
                <div className="flex lg:h-1/3 justify-between gap-4">
          <Image
            src="featured3.jpeg"
            className="rounded-3xl  w-[15rem] h-[10rem]  aspect-video"
          />
          {/* details and tilte */}
          <div className="w-2/3">
            {/* <details></details> */}
            <div className="flex items-center text-sm lg:text-base gap-4 mb-4">
              <h1 className="font-semibold">04.</h1>

              <Link to={"/test"} className="text-blue-800"> Web Design</Link>
              <span className="text-gray-500 text-sm" >2 days ago</span>
            </div>
            {/* title and description */}
            <Link to={"/test"} className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Link>
          </div>
        </div>     
         </div>
    </div>
  );
}
