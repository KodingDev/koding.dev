import { getArtists } from '@/lib/content'
import Image from 'next/image'
import Link from 'next/link'

export default function ArtPage() {
  const artists = getArtists()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Art Commissions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <div key={artist._meta.path} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              {artist.avatar && (
                <Image
                  src={artist.avatar}
                  alt={`${artist.name} Avatar`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <div>
                <h2 className="text-xl font-bold">{artist.name}</h2>
                {artist.link && (
                  <a href={artist.link} className="text-blue-400 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {artist.commissions.slice(0, 4).map((commission) => (
                <div key={commission.slug} className="aspect-square relative overflow-hidden rounded-lg">
                  {commission.images[0] && (
                    <Image
                      src={commission.images[0]}
                      alt={commission.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}