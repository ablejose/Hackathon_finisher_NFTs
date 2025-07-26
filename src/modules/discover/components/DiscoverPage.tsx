import { useAppUtils } from "@/lib/app/hooks";
import { Box, Text } from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import CollectionRow from "./CollectionRow";
import Featured from "./Featured";

interface DiscoverPageProps {}
const DiscoverPage: FC<DiscoverPageProps> = (props) => {
  const {} = props;
  const { getCollections } = useAppUtils();

  const collections = useMemo(() => {
    return getCollections();
  }, [getCollections]);

  return (
    <Box>
      <Box mt="4">
        <Featured />
      </Box>
      <Text 
        fontSize="xl" 
        fontWeight="bold" 
        color="primary.400"
        textAlign="center"
        mt="8"
        mb="4"
        textShadow="0 0 8px rgba(158, 119, 237, 0.5)"
      >
        Perfectly crafted NFTs for the Andromeda Bootcamp Finishers, GRAB YOUR NFTS RIGHT AWAY!!
      </Text>
      <Text fontSize="xl" fontWeight="bold" mt="4">
        Explore Collections
      </Text>
      {collections.map((col) => (
        <Box mt="10" key={col.id}>
          <CollectionRow collectionId={col.id} />
        </Box>
      ))}
    </Box>
  );
};
export default DiscoverPage;