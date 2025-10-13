import { type Artists, artists, clients } from "@content";
import type { StaticImageData } from "next/image";
import { filter, pipe, sortBy } from "remeda";
import { type ClientDate, parseDate } from "@/lib/data/clients";

export const allArtists = sortBy(artists, (client) => client.name);
export const allClients = pipe(
  clients,
  filter((client) => !client.hidden),
  // Sort the clients by their end date descending (if any), and leave "current" clients at the top.
  sortBy((client) => (client.end ? -parseDate(client.end as ClientDate).getTime() : -Infinity))
);

type ArtRef = {
  artist: Artists;
  commissionIdx: number;
  imageIdx?: number;
};

const artistAmber = artists.find((v) => v.name === "Amber")!;
const artistPeachy = artists.find((v) => v.name === "Peachy")!;

// TODO: Change up how we do this
export const FEATURED_ARTIST: ArtRef = {
  artist: artistAmber,
  commissionIdx: 2,
};

export const BANNER_ARTIST: ArtRef = {
  artist: artistPeachy,
  commissionIdx: 0,
  imageIdx: 1,
};

export const REF_SHEET: ArtRef = {
  artist: artistAmber,
  commissionIdx: 1,
};

export const getCommissionImage = (artist: Artists, commissionIdx: number, imageIdx: number): StaticImageData => {
  const image = artist.commissions?.[commissionIdx]?.images?.[imageIdx];
  if (!image) {
    throw new Error(`Image not found for artist ${artist.name} commission ${commissionIdx} image ${imageIdx}`);
  }
  return image;
};

export const getArtRefImage = (ref: ArtRef): StaticImageData =>
  getCommissionImage(ref.artist, ref.commissionIdx, ref.imageIdx ?? 0);
