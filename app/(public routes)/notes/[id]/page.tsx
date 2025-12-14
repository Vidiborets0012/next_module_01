import { Metadata } from "next";
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const note = await getSingleNote(id);
  return {
    title: `Note: ${note.title}`,
    description: note.content.slice(0, 30),
    openGraph: {
      title: `Note: ${note.title}`,
      description: note.content.slice(0, 100),
      url: `https://notehub.com/notes/${id}`,
      siteName: "NoteHub",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${note.title}`,
      description: note.content.slice(0, 3),
      images: ["https://ac.goit.global/fullstack/react/og-meta.jpg"],
    },
  };
}

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
