import { useBrandColors, withOpacity } from '../theme/useBrandColors.js';

const features = [
    {
        title: 'Interactive Map',
        description:
            'Navigate an intuitive map built with MapLibre to spot parks, equipment, and popular training zones.',
    },
    {
        title: 'Community Submissions',
        description:
            'Submit new park locations, upload photos, and keep the directory up to date with the latest spots.',
    },
    {
        title: 'Equipment Tracking',
        description:
            'See which parks have pull-up bars, dip stations, rings, or calisthenics rigs before you head out.',
    },
    {
        title: 'Profiles & Reviews',
        description:
            'Connect with local athletes, share tips, and leave reviews to help others find their perfect workout.',
    },
];

export default function FeaturesSection() {
    const colors = useBrandColors();
    const sectionStyles = {
        '--features-bg': colors.background,
        '--features-text': colors.dark,
        '--features-muted': withOpacity(colors.dark, 0.7),
        '--features-accent': colors.accent,
        '--features-primary': colors.primary,
        '--features-card-border': withOpacity(colors.dark, 0.1),
        '--features-image-border': withOpacity(colors.primary, 0.2),
    };

    return (
        <section
            className='bg-[color:var(--features-bg)] text-[color:var(--features-text)]'
            style={sectionStyles}
        >
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr,1fr] md:items-end'>
                <div className='flex flex-col gap-8'>
                    <div>
                        <p className='text-sm font-semibold uppercase tracking-widest text-[color:var(--features-accent)]'>
                            Features
                        </p>
                        <h2 className='mt-2 text-3xl font-semibold'>
                            Built for outdoor athletes
                        </h2>
                        <p className='mt-3 max-w-2xl text-base text-[color:var(--features-muted)]'>
                            Everything you need to plan your next workout,
                            connect with the community, and contribute to a
                            shared map of outdoor gyms.
                        </p>
                    </div>
                    <div className='grid gap-6 md:grid-cols-2'>
                        {features.map((feature) => (
                            <article
                                key={feature.title}
                                className='rounded-lg border bg-white p-5 shadow-sm'
                                style={{
                                    borderColor: 'var(--features-card-border)',
                                }}
                            >
                                <h3 className='text-lg font-semibold text-[color:var(--features-primary)]'>
                                    {feature.title}
                                </h3>
                                <p className='mt-2 text-sm text-[color:var(--features-muted)]'>
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
                <figure
                    className='w-full overflow-hidden rounded-2xl border bg-white'
                    style={{ borderColor: 'var(--features-image-border)' }}
                >
                    <img
                        src='https://placehold.co/520x640?text=BarzMap+Interface'
                        alt='Mockup of the BarzMap product interface'
                        className='h-full w-full object-cover'
                        loading='lazy'
                    />
                </figure>
            </div>
        </section>
    );
}
