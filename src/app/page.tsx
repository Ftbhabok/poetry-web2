import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import {
  BookOpen,
  Paintbrush,
  Users,
} from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: "Reader's Corner",
    Icon: BookOpen, 
    description:
    'Immerse yourself in a diverse library of literature. Discover new voices and timelines.',
  },
  {
    name: 'Creative Studio',
    Icon: Paintbrush, 
    description:
    'Publish your content  and connect with fellow writers for collaboration and feedback.',
  },
  {
    name: 'Poetry Workshop',
    Icon: Users, // Icon representing writing or poetry
    description:
      'Learn the art of poetry with lessons and tools to shape your thoughts into compelling literature.',
      // past me here from future 
      // that website of ai poetry 
      // connect that with here and
      // give teaching and stuffs 
  },
];



export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Your platform for literary-expression{' '}
            <span className='text-green-600'>
              {/* change color to primary */}
               discovery
            </span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome to Uperhaps, your literary legacy platform that turns readers into writers and dreams into digital ink.
          </p>
          {/* From verses to epic sagas, craft your literary
           legacy on a platform 
          that turns readers into writers 
          and dreams into digital ink. */}
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
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

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
