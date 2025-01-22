/* eslint-disable no-unused-vars */
import React from "react";

export default function Write() {
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6 ">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1" >
        <button className="bg-white text-gray-500 p-2 font-semibold  w-max shadow-md  rounded-xl"> Add a cover image</button>
        <input type="text" className="bg-transparent text-3xl border-none outline-none w-full" placeholder="My Awesome Story" />
        <div className="flex gap-4 items-center">
          <label htmlFor="Choose a category" className="text-sm   " >Choose a category</label>
          <select name="category" className="rounded-xl p-2 shadow-md  bg-white m-1" id="category">
            <option value="web Design">Web Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="SEO">SEO</option>
            <option value="Other">Other</option>
            <option value="marketing">Marketing</option>

          </select>

        </div>
        <textarea className="p-4 rounded-xl bg-white shadow-md" name="desc" placeholder="Write a brief description about your story"></textarea>
        {/* <ReactQuill className="flex-1 p-2 rounded-xl  bg-white shadow-md" theme="snow"   /> */}
        <button className="rounded-xl bg-blue-800 text-white text-xl shadow-md  w-max p-2 m-4 ">Publish</button>
      </form>
    </div>
  );
}
