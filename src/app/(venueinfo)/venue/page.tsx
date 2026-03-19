import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export const dynamic = "force-dynamic";

export default async function VenuePage() {
  const venues = await getVenues();
  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>Select your venue</h1>
      <p>Explore 3 fabulous venues in our venue catalog</p>
      <VenueCatalog venuesJson={venues} />
    </main>
  );
}
