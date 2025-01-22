import { Link } from "react-router-dom";
import Image from "../Component/Imagekit";
import Actions from "./Actions";
import PostSearch from "./PostSearch";
import Comments from "./Comments";

export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Title */}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full   flex lg:w-3/5 flex-col gap-4">
          <div>
            <h1 className="text-xl md:text-2xl xl:text-4xl lg:text-7xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className="gap-8 mt-1 lg:mt-6 lg:font-medium font-sans">
              <span className="text-gray-500 ">Written by </span>
              <span className="text-blue-800">John Doe </span>
              <span>on </span>
              <Link to="/text" className="text-blue-800">
                Web Design
              </Link>
              <span> 2 days ago</span>
            </div>
            <p className="mt-4  lg:text-2xl lg:mt-8 text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eum ex quasi. Explicabo debitis vitae quod nesciunt sapiente neque
              nihil impedit itaque sapiente neque nihil impedit itaque
            </p>
          </div>
        </div>
        {/* Description */}
        {/* Image */}
        <div className=" hidden md:block  w-full  lg:w-2/5  flex-col gap-4">
          <Image
            src="postImg.jpeg"
            w="735"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* DETAILS */}
      <div className="flex flex-col  md:flex-row  gap-8">
        <div className=" gap-6 flex  md:w-9/12  flex-col text-justify lg:text-lg ">
          <p className="font-2xl  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            sunt saepe. Aspernatur commodi nihil facilis itaque quia hic
            architecto sequi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis adipisci amet ea veniam repudiandae labore
            necessitatibus deleniti praesentium nobis, doloremque ex! Commodi
            labore sint recusandae incidunt quam blanditiis velit sed?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repudiandae explicabo similique consequuntur nemo adipisci ab
            officiis, provident quis sapiente consequatur repellendus ut at
            corporis rerum aliquam harum vel sit? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Officia, maxime. Quod commodi corporis
            quos optio laudantium, numquam quas accusantium quae recusandae ipsa
            nam quisquam inventore at excepturi consequuntur quasi odit!
          </p>

          <p className="font-2xl  gap-5 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            sunt saepe. Aspernatur commodi nihil facilis itaque quia hic
            architecto sequi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis adipisci amet ea veniam repudiandae labore
            necessitatibus deleniti praesentium nobis, doloremque ex! Commodi
            labore sint recusandae incidunt quam blanditiis velit sed?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repudiandae explicabo similique consequuntur nemo adipisci ab
            officiis, provident quis sapiente consequatur repellendus ut at
            corporis rerum aliquam harum vel sit?
          </p>
          <p className="font-2xl  gap-5 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            sunt saepe. Aspernatur commodi nihil facilis itaque quia hic
            architecto sequi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis adipisci amet ea veniam repudiandae labore
            necessitatibus deleniti praesentium nobis, doloremque ex! Commodi
            labore sint recusandae incidunt quam blanditiis velit sed?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repudiandae explicabo similique consequuntur nemo adipisci ab
            officiis, provident quis sapiente consequatur repellendus ut at
            corporis rerum aliquam harum vel sit?
          </p>
          <p className="font-2xl  gap-5 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            sunt saepe. Aspernatur commodi nihil facilis itaque quia hic
            architecto sequi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis adipisci amet ea veniam repudiandae labore
            necessitatibus deleniti praesentium nobis, doloremque ex! Commodi
            labore sint recusandae incidunt quam blanditiis velit sed?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repudiandae explicabo similique consequuntur nemo adipisci ab
            officiis, provident quis sapiente consequatur repellendus ut at
            corporis rerum aliquam harum vel sit?
          </p>
          <p className="font-2xl  gap-5 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            sunt saepe. Aspernatur commodi nihil facilis itaque quia hic
            architecto sequi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis adipisci amet ea veniam repudiandae labore
            necessitatibus deleniti praesentium nobis, doloremque ex! Commodi
            labore sint recusandae incidunt quam blanditiis velit sed?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repudiandae explicabo similique consequuntur nemo adipisci ab
            officiis, provident quis sapiente consequatur repellendus ut at
            corporis rerum aliquam harum vel sit?
          </p>
          <p className="font-2xl  gap-5 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            sunt saepe. Aspernatur commodi nihil facilis itaque quia hic
            architecto sequi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis adipisci amet ea veniam repudiandae labore
            necessitatibus deleniti praesentium nobis, doloremque ex! Commodi
            labore sint recusandae incidunt quam blanditiis velit sed?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repudiandae explicabo similique consequuntur nemo adipisci ab
            officiis, provident quis sapiente consequatur repellendus ut at
            corporis rerum aliquam harum vel sit?
          </p>
          <p className="font-2xl  gap-5 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            sunt saepe. Aspernatur commodi nihil facilis itaque quia hic
            architecto sequi?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis adipisci amet ea veniam repudiandae labore
            necessitatibus deleniti praesentium nobis, doloremque ex! Commodi
            labore sint recusandae incidunt quam blanditiis velit sed?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repudiandae explicabo similique consequuntur nemo adipisci ab
            officiis, provident quis sapiente consequatur repellendus ut at
            corporis rerum aliquam harum vel sit?
          </p>

        </div>
        {/* menu */}
        <div className=" hidden md:block h-max px-4 w-3/12 sticky top-8">
          <h1 className=" mb-4 text-sm  font-medium">Author</h1>
          <div className="flex items-center gap-8 ">
            <div className="flex  items-center gap-8">

            <Image
              className="w-12 h-12  rounded-full object-cover"
              src="userImg.jpeg"
              w="48"
              h="48"
            />
          <Link to="/text" className="text-blue-800">John Doe</Link>
          </div>
          </div>

          <p className="gap-2 text-stone-600 font-sans mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p> 

          <div className="flex gap-2">
            <Link>
              <Image
                src="facebook.svg"
                w="24"
                h="24"
                className=" rounded-full"
              />
            </Link>
            <Link>
              <Image
                src="instagram.svg"
                w="24"
                h="24"
                className="rounded-full"
              />
            </Link>
          </div>

              <h1 className=" mb-4 mt-4 text-sm  font-medium">Actions</h1>
            <Actions />
          <h1 className="mt-5 mb-4 text-sm font-medium">Categories</h1>
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
          <h1 className=" mb-4 text-sm  mt-4 font-medium">Search</h1>
          <PostSearch />
        </div>
        
      </div>
      <Comments/>
    </div>
  );
}
