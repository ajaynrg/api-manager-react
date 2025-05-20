import type { Collection } from "./CollectionList";
import { Menu } from "./Menu";

export function CollectionItem({ collection }: { collection: Collection }) {

  const typeColor = (type: string): string => {
    switch (type) {
      case "GET":
        return "text-green-500";
      case "POST":
        return "text-blue-500";
      case "PUT":
        return "text-yellow-500";
      case "DELETE":
        return "text-red-500";
      case "PATCH":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  }

  const renderUrls = collection.urls.map((url) => {
    return (
      <div key={url.id} className="flex gap-x-2 text-xs">
        <span className={`font-bold ${typeColor(url.type)}`}>{url.type}</span>
        <span className="text-gray-500">{url.url}</span>
      </div>
    )
  })
  return (
    <div>
      <Menu name={collection.name} items={renderUrls} />
    </div>
  );
}
