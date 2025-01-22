
export default function PostSearch() {
  return (
    <div>
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
  )
}
