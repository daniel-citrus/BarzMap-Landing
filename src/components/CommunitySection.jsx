import { useBrandColors, withOpacity } from '../theme/useBrandColors.js';

const communityHighlights = [
    'Stories from athletes in over 40 cities',
    'Global map with live park submissions',
    'Weekly spotlights on new training locations',
];

export default function CommunitySection() {
    const colors = useBrandColors();
    const sectionStyles = {
        '--community-text': colors.dark,
        '--community-muted': withOpacity(colors.dark, 0.7),
        '--community-subtle': withOpacity(colors.dark, 0.6),
        '--community-accent': colors.accent,
        '--community-card-bg': colors.background,
        '--community-card-border': withOpacity(colors.dark, 0.1),
        '--community-image-border': withOpacity(colors.primary, 0.15),
    };

    return (
        <section
            className='bg-white text-[color:var(--community-text)]'
            style={sectionStyles}
        >
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr,1fr] md:items-start'>
                <figure
                    className='w-full overflow-hidden rounded-2xl border bg-[color:var(--community-card-bg)] md:order-1'
                    style={{ borderColor: 'var(--community-image-border)' }}
                >
                    <img
                        src='https://placehold.co/600x720?text=Global+Community'
                        alt='Collage of athletes training outdoors around the world'
                        className='h-full w-full object-cover'
                        loading='lazy'
                    />
                </figure>
                <div className='flex flex-col gap-8 md:order-2'>
                    <div className='space-y-4 text-center md:text-left'>
                        <p className='text-sm font-semibold uppercase tracking-widest text-[color:var(--community-accent)]'>
                            Community
                        </p>
                        <h2 className='text-3xl font-semibold'>
                            A movement built outdoors
                        </h2>
                        <p className='mx-auto max-w-2xl text-base text-[color:var(--community-muted)]'>
                            From neighbourhood parks to international hotspots,
                            athletes everywhere are contributing to BarzMap.
                            Share your favourite spots and find training
                            partners on your next trip.
                        </p>
                    </div>
                    <div className='grid gap-4 text-sm text-[color:var(--community-subtle)] md:grid-cols-3'>
                        {communityHighlights.map((item) => (
                            <div
                                key={item}
                                className='rounded-lg border bg-[color:var(--community-card-bg)] p-4'
                                style={{
                                    borderColor: 'var(--community-card-border)',
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <blockquote
                        className='rounded-lg border bg-white p-6 text-left shadow-sm'
                        style={{ borderColor: 'var(--community-card-border)' }}
                    >
                        <p className='text-base text-[color:var(--community-text)]'>
                            “BarzMap helped our crew find hidden gems across
                            Europe. We can&apos;t wait for the official launch
                            to start sharing even more spots.”
                        </p>
                        <cite className='mt-3 block text-sm text-[color:var(--community-subtle)]'>
                            — Lina, Calisthenics Coach
                        </cite>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
