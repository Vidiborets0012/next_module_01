import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSingleNote } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  // console.log("note id:", id);
  // const note = await getSingleNote(id);
  // console.log(note);

  // const formattedDate = note.updatedAt
  //   ? `Updated at: ${note.updatedAt}`
  //   : `Created at: ${note.createdAt}`;

  // // return <div>NoteDetails</div>;
  // return (
  //   <div>
  //     <h2>{note.title}</h2>
  //     <p>{note.content}</p>
  //     <button>Edit</button>
  //     <p>{formattedDate}</p>
  //   </div>
  // );
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
  });

  // return <NoteDetailsClient />;
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
};

export default NoteDetails;
