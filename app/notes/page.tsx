// клієнтський компонент:
// "use client";

// import NoteList from "@/components/NoteList/NoteList";
// import { getNotes, Note } from "@/lib/api";
// import { useState } from "react";

// const Notes = () => {
//   // const notes = await getNotes();
//   // console.log("notes:", notes);

//   const [notes, setNotes] = useState<Note[]>([]);

//   const handleClick = async () => {
//     const response = await getNotes();

//     if (response?.notes) {
//       setNotes(response.notes);
//     }
//   };

//   // return <div>Notes</div>;
//   return (
//     <section>
//       <h1>Notes List</h1>
//       {/* {response?.notes?.length > 0 && <NoteList notes={response.notes} />} */}
//       <button onClick={handleClick}>Get my notes</button>
//       {notes.length > 0 && <NoteList notes={notes} />}
//     </section>
//   );
// };

// export default Notes;

// серверний компонент:
import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

const Notes = async () => {
  const response = await getNotes();

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
};

export default Notes;
