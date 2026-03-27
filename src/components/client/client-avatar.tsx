import { Clients } from "@content";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ClientAvatarProps = {
  client: Clients;
} & Omit<React.ComponentPropsWithoutRef<typeof Image>, "src">;

export const ClientAvatar: React.FC<ClientAvatarProps> = ({ client, className, ...props }) => {
  if (!client.avatar) return null;

  if (client.brand?.background) {
    return (
      <div
        className={cn("flex items-center justify-center bg-(--client-background)", className)}
        style={{ "--client-background": client.brand.background } as React.CSSProperties}
      >
        <Image src={client.avatar} className="p-[20%]" {...props} />
      </div>
    );
  }

  return <Image src={client.avatar} className={className} {...props} />;
};
