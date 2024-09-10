import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ProductReel from '@/components/ProductReel';
import { Button, buttonVariants } from '@/components/ui/button';
import { BookOpen, Paintbrush, Users } from 'lucide-react';
import Link from 'next/link';

const perks = [
  {
    name: "Reader's Corner",
    Icon: BookOpen,
    description: 'Immerse yourself in a diverse library of literature. Discover new voices and timelines.',
    gradient: 'from-purple-400 via-pink-500 to-red-500'
  },
  {
    name: 'Creative Studio',
    Icon: Paintbrush,
    description: 'Publish your content and connect with fellow writers for collaboration and feedback.',
    gradient: 'from-green-400 via-blue-500 to-purple-600'
  },
  {
    name: 'Poetry Workshop',
    Icon: Users,
    description: 'Learn the art of poetry with lessons and tools to shape your thoughts into compelling literature.',
    gradient: 'from-yellow-400 via-orange-500 to-red-500'
  },
];

const PerkCard: React.FC<{ perk: { name: string; Icon: React.ElementType; description: string; gradient: string } }> = ({ perk }) => (
  <div className="flex flex-col items-center p-8 bg-white bg-opacity-10 rounded-2xl shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:bg-opacity-20" 
       style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}>
    <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${perk.gradient} shadow-lg`}>
      <perk.Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{perk.name}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{perk.description}</p>
  </div>
);

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Your platform for literary-expression{' '}
            <span className='text-green-600'>discovery</span>.
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to Uperhaps, your literary legacy platform that turns readers into writers and dreams into digital ink.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/products' className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products?sort=recent'
          title='Brand new'
        />
      </MaxWidthWrapper>

      <section className='border-t border-transparent py-28' style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}>
        <MaxWidthWrapper>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Explore Our Literary World</h2>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
            {perks.map((perk) => (
              <PerkCard key={perk.name} perk={perk} />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}