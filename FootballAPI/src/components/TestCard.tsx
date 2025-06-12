import React, { useEffect } from 'react'
import { useState } from "react";

type Props = {
    text: string
}

interface comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export default function TestCard({text}: Props) {

const [comments, setComments] = React.useState<comment[]>([])
const [active, setActive] = React.useState(false)

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) =>
      res.json().then((data) => {
        setComments(data);
        console.log(data);
      })
    );
  }, []);

  return (
    <div className={`border-2 p-4 rounded-lg ${active ? "bg-green-600" : "bg-gray-600"}`}>
    <h1 className='text-2xl font-bold '>Hallo</h1>
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>

    <button onClick={() => setActive(!active)}
      className={`mt-4 px-4 py-2 ${!active ? "bg-green-600" : "bg-gray-600"}`}
      >Click me</button>
    </div>
  )
}

{/*	4. Die Komponente soll ein div zurückgeben mit:
		○ einer dynamischen CSS-Klasse: bg-green-200, wenn active true ist, sonst bg-gray-100.
		○ einer Überschrift mit dem Text Hallo.
		○ einer Liste aller comment.name aus dem commentsArray.
		○ einem Button mit dem Text „Click me“, der beim Klicken active umschaltet (true → false → true …).
*/}





