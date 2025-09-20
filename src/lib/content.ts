import { type Artist, allArtists, type Client } from "content-collections";
import type { StaticImageData } from "next/image";

type ArtRef = {
  artist: Artist;
  commissionIdx: number;
  imageIdx?: number;
};

const artistAmber = allArtists.find((v) => v.name === "Amber")!;
const artistPeachy = allArtists.find((v) => v.name === "Peachy")!;

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

export const getCommissionImage = async (
  artist: Artist,
  commissionIdx: number,
  imageIdx: number
): Promise<StaticImageData> => {
  const image = artist.commissions?.[commissionIdx]?.images?.[imageIdx];
  if (!image) {
    throw new Error(`Image not found for artist ${artist.name} commission ${commissionIdx} image ${imageIdx}`);
  }

  const data = await import(`../../content/commissions/${artist._meta.directory}/${image}`);
  return data.default as StaticImageData;
};

export const getArtRefImage = async (ref: ArtRef): Promise<StaticImageData> =>
  getCommissionImage(ref.artist, ref.commissionIdx, ref.imageIdx ?? 0);

export const getClientBanner = async (client: Client): Promise<StaticImageData | undefined> => {
  if (!client.banner) return undefined;
  const data = await import(`../../content/clients/${client.banner}`);
  return data.default as StaticImageData;
};
