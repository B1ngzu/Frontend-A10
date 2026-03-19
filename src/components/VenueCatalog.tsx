import Link from "next/link";
import { VenueItem, VenueJson } from "../../interface";

const venueImageMap: Record<string, string> = {
  "The Bloom Pavilion": "/img/bloom.jpg",
  "Spark Space": "/img/sparkspace.jpg",
  "The Grand Table": "/img/grandtable.jpg",
};

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson> | VenueJson;
}) {
  const resolved = await venuesJson;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {resolved.data.map((venue: VenueItem) => (
        <Link
          key={venue.id}
          href={`/venue/${venue.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ width: "300px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <img
              src={venueImageMap[venue.name] || venue.picture}
              alt={venue.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "16px" }}>
              <h3>{venue.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
