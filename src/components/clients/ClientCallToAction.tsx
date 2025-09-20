import type { Client } from "content-collections";
import Image from "next/image";
import type React from "react";
import { CallToAction } from "@/components/interactive/CallToAction";
import { getClientBanner } from "@/lib/content";

type ClientCallToActionProps = {
  client: Client;
};

export const ClientCallToAction: React.FC<ClientCallToActionProps> = async ({ client }) => {
  const banner = await getClientBanner(client);

  return (
    <CallToAction
      href={`/clients/${client._meta.path}`}
      picture={banner ? { src: banner } : undefined}
      picMaxWidth="40vw"
    >
      <div className="flex flex-col gap-3 p-6 md:p-10">
        <div className="flex flex-row items-center">
          <div className={`h-2 w-2 rounded-full ${client.end ? "bg-red-500" : "bg-green-500"}`} />
          <span className="pl-2 opacity-75">
            {client.start ?? "Unknown"} - {client.end ?? "Now"}
          </span>
        </div>

        <div className="flex flex-row items-center gap-4">
          {client.avatar && (
            <Image
              src={client.avatar}
              alt={`${client.name} Avatar`}
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg"
            />
          )}

          <span className="font-bold text-2xl">{client.name}</span>
          <span className="icon-[material-symbols--arrow-outward] h-7 w-7" />
        </div>

        {client.description && <span className="opacity-50">{client.description}</span>}
      </div>
    </CallToAction>
  );
};
