"use client";

export default function Button() {
  return (
    <div className="mt-5">
        <button
            className="bg-green-700 px-5 py-2 rounded-lg"
            onClick={() => console.log("I clicked here!")}>Button</button>
    </div>
  )
}
