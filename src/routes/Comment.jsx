import Image from "../Component/Imagekit";
export default function Comment() {
  return (
    <div className="w-full bg-slate-50 gap-4  rounded-xl p-4">
        <div className="flex gap-5 items-center">

      <Image
        className="w-8 h-8  rounded-full object-cover"
        src="userImg.jpeg"
        w="48"
        h="48"
        />
     
      <h1  className=" ">Johe Doe</h1>
      <span className="text-zinc-500 font-sans">2 days ago</span>
        </div>
        <p className="font-sans gap-1 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus architecto cum laudantium delectus aperiam cupiditate velit sequi pariatur, quos dolorem dolor mollitia similique voluptas cumque quas suscipit, enim at impedit.</p>

    </div>
  );
}
