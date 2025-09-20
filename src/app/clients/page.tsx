import { allClients } from "content-collections";
import { Header } from "@/components/base/Header";
import { ClientCallToAction } from "@/components/clients/ClientCallToAction";

export default function ClientsPage() {
  return (
    <div className="layout-container pt-40 pb-36">
      <Header emoji="📊" title="Clients">
        Some of the amazing people I've had the pleasure of working with.
      </Header>
      <div className="grid grid-cols-1 gap-8 pt-32 lg:grid-cols-2">
        {allClients.map((client) => (
          <ClientCallToAction key={client._meta.path} client={client} />
        ))}
      </div>
    </div>
  );
}
