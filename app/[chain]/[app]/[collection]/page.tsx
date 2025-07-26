// "use client"; has been removed to make this a Server Component.

// NOTE: The data fetching has been changed from a client-side hook 
// to a server-side function to work in a Server Component.
import { getCollection } from "@/lib/database/get"; 
import CollectionRouter from "@/modules/collection/components/Router";
import { notFound } from 'next/navigation';
import React from "react";

// This function is required for static export with dynamic routes.
export async function generateStaticParams() {
  return [];
}

interface Props {
    params: {
        collection: string;
    }
}

// This is now an async Server Component.
const Page = async ({ params }: Props) => {
    const { collection: collectionId } = params;
    
    // Data is now fetched on the server before the page is rendered.
    const collection = await getCollection(collectionId);

    if (!collection) {
        return notFound();
    }

    return (
        <CollectionRouter collectionId={collectionId} />
    );
}

export default Page;
