import { useEffect, useState } from "react";

export function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div>
        Here
        <Notes />
      </div>
    </main>
  );
}

const Notes = () => {
  let [notes, setNotes] = useState([])
  useEffect(() => {
      getNotes()
    }, [])
  let getNotes = async () => {
      let response = await fetch('http://127.0.0.1:8000/')
      let data = await response.json()  
      setNotes(data)
    }

  return (
    <div>Notes: {JSON.stringify(notes)}</div>
  )
}
