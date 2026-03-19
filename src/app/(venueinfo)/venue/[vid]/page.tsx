import getVenue from "@/libs/getVenue";
import { VenueItem } from "../../../../../interface";

const venueImageMap: Record<string, string> = {
  "The Bloom Pavilion": "/img/bloom.jpg",
  "Spark Space": "/img/sparkspace.jpg",
  "The Grand Table": "/img/grandtable.jpg",
};

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueJson = await getVenue(vid);
  const venue: VenueItem = venueJson.data;

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>{venue.name}</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "20px" }}>
        <img
          src={venueImageMap[venue.name] || venue.picture}
          alt={venue.name}
          style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
        />
        <div>
          <p>Name: {venue.name}</p>
          <p>Address: {venue.address}</p>
          <p>District: {venue.district}</p>
          <p>Postal Code: {venue.postalcode}</p>
          <p>Tel: {venue.tel}</p>
          <p>Daily Rate: {venue.dailyrate}</p>
        </div>
      </div>
    </main>
  );
}
