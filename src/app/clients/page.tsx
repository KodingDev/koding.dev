import { Header } from "@/components/base/header";
import { ClientCallToAction } from "@/components/clients/client-call-to-action";
import { allClients } from "@/lib/content";

// biome-ignore lint/style/noDefaultExport: NextJS
export default function ClientsPage() {
  return (
    <div className="pt-40 pb-36">
      <Header emoji="📊" title="Clients">
        Some of the amazing people I've had the pleasure of working with.
      </Header>
      <div className="grid grid-cols-1 gap-8 pt-32 lg:grid-cols-2">
        {allClients.map((client) => (
          <ClientCallToAction key={client.slug} client={client} />
        ))}
      </div>
    </div>
  );
}
