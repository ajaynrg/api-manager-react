import { CollectionItem } from "./CollectionItem";
import { BiSolidCollection } from "react-icons/bi";

export interface Collection {
  id: number;
  name: string;
  urls: Url[];
}

interface Url {
  id: number;
  url: string;
  type: string;
}

export function CollectionList() {
  // This component is responsible for displaying the list of collections
  const collections: Collection[]  = [
    { id: 1, name: "Collection 1" ,
      urls:[
        { id: 1, url: "https://example.com/1", type: "GET" },
        { id: 2, url: "https://example.com/2", type: "POST" },
        { id: 3, url: "https://example.com/3", type: "PUT" },
        { id: 4, url: "https://example.com/4", type: "DELETE" },
        { id: 5, url: "https://example.com/5", type: "PATCH" },
      ]
    },
    { id: 2, name: "Collection 2" ,
      urls:[
        { id: 1, url: "https://example.com/1", type: "GET" },
        { id: 2, url: "https://example.com/2", type: "POST" },
        { id: 3, url: "https://example.com/3", type: "PUT" },
        { id: 4, url: "https://example.com/4", type: "DELETE" },
        { id: 5, url: "https://example.com/5", type: "PATCH" },
      ]
    }
  ]

  const renderCollectionList = collections.map((collection) =>{
    return (
      <CollectionItem key={collection.id} collection={collection} />
    );
  })

  return (
    <div className="ml-10">
        <div className="flex sticky top-0 w-full z-50 border border-gray-200 bg-white">
          <span className="p-2 text-sm font-bold text-gray-600">COLLECTIONS</span>
          <span className="self-center">
            <BiSolidCollection className="h-4 w-4 text-gray-500"/>
          </span>
        </div>
        <div className="overflow-auto">
          {renderCollectionList}
        </div>
      {/* Add your collection list implementation here */}
    </div>
  );
}