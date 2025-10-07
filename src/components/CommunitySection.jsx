const communityHighlights = [
    'Stories from athletes in over 40 cities',
    'Global map with live park submissions',
    'Weekly spotlights on new training locations',
];

export default function CommunitySection() {
    return (
        <section className='bg-white text-brand-dark'>
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr,1fr] lg:items-start'>
                <figure className='order-first w-full overflow-hidden rounded-2xl border border-brand-primary/20 bg-brand-background shadow-lg lg:order-none'>
                    <img
                        src='https://placehold.co/600x720?text=Global+Community'
                        alt='Collage of athletes training outdoors around the world'
                        className='h-full w-full object-cover'
                        loading='lazy'
                    />
                </figure>
                <div className='flex flex-col gap-8'>
                    <div className='space-y-4 text-center lg:text-left'>
                        <p className='text-sm font-semibold uppercase tracking-widest text-brand-accent'>
                            Community
                        </p>
                        <h2 className='text-3xl font-semibold'>
                            A movement built outdoors
                        </h2>
                        <p className='mx-auto max-w-2xl text-base text-brand-dark/70 lg:mx-0'>
                            From neighbourhood parks to international hotspots,
                            athletes everywhere are contributing to BarzMap.
                            Share your favourite spots and find training
                            partners on your next trip.
                        </p>
                    </div>
                    <div className='grid gap-4 text-sm text-brand-dark/65 md:grid-cols-3'>
                        {communityHighlights.map((item) => (
                            <div
                                key={item}
                                className='rounded-lg border border-brand-dark/10 bg-brand-background p-4'
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <blockquote className='rounded-lg border border-brand-dark/10 bg-white p-6 text-left shadow-sm'>
                        <p className='text-base text-brand-dark'>
                            “BarzMap helped our crew find hidden gems across the
                            Bay Area. We can&apos;t wait for the official launch
                            to start sharing even more spots.”
                        </p>
                        <cite className='mt-3 block text-sm text-brand-dark/60'>
                            — Jibao, Calisthenics Coach
                        </cite>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
