import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "HACKATHONFINISHERS",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            marketplace:
                "andr17wk3pz20tm7dxpngu5nmmnq7j3xl4fpu3zcuf9k7fn3474z5lu2srfu65t",
            cw721: "andr1tprdcqh9ru5wa700a88m9u69vmxvernl66ysy5092nh0as2ctf8q3s5kpa",
            name: "FINISHER_NFTS",
            type: ICollectionType.MARKETPLACE,
            id: "embeddables-marketplace-1",
        }
    ],
};

export default CONFIG;
