import { getSingleNote } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  // console.log("note id:", id);
  const note = await getSingleNote(id);
  // console.log(note);

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  // return <div>NoteDetails</div>;
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button>Edit</button>
      <p>{formattedDate}</p>
    </div>
  );
};

export default NoteDetails;
