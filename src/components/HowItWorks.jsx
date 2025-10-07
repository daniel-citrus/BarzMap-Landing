import { useBrandColors, withOpacity } from '../theme/useBrandColors.js';

const steps = [
    {
        title: 'Explore the Map',
        description:
            'Search for calisthenics parks nearby and discover new outdoor gyms wherever you travel.',
    },
    {
        title: 'Save & Review Spots',
        description:
            'Bookmark your favourite parks, keep track of equipment, and share honest feedback.',
    },
    {
        title: 'Contribute to the Community',
        description:
            'Add new locations, upload photos, and help athletes around the world train together.',
    },
];

export default function HowItWorks() {
    const colors = useBrandColors();
    const sectionStyles = {
        '--hiw-text': colors.dark,
        '--hiw-text-muted': withOpacity(colors.dark, 0.7),
        '--hiw-accent': colors.accent,
        '--hiw-primary': colors.primary,
        '--hiw-card-bg': colors.background,
        '--hiw-border': withOpacity(colors.primary, 0.25),
        '--hiw-dot': colors.primary,
        '--hiw-dot-ring': withOpacity(colors.primary, 0.2),
        '--hiw-image-border': withOpacity(colors.primary, 0.15),
    };

    return (
        <section
            className='bg-white text-[color:var(--hiw-text)]'
            style={sectionStyles}
        >
            <div className='mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-start'>
                <figure
                    className='w-full overflow-hidden rounded-2xl border bg-[color:var(--hiw-card-bg)] lg:max-w-sm'
                    style={{ borderColor: 'var(--hiw-image-border)' }}
                >
                    <img
                        src='https://placehold.co/520x620?text=Step+By+Step'
                        alt='Steps to start using BarzMap illustrated on a map'
                        className='h-full w-full object-cover'
                        loading='lazy'
                    />
                </figure>
                <div className='flex-1 space-y-8'>
                    <div className='space-y-4'>
                        <p className='text-sm font-semibold uppercase tracking-widest text-[color:var(--hiw-accent)]'>
                            How it works
                        </p>
                        <h2 className='text-3xl font-semibold'>
                            Three simple steps to get moving
                        </h2>
                        <p className='max-w-2xl text-base text-[color:var(--hiw-text-muted)]'>
                            BarzMap keeps things simple: find the perfect spot,
                            stay organised, and give back to the community that
                            motivates you.
                        </p>
                    </div>
                    <ol
                        className='relative flex flex-col gap-10 border-l pl-6'
                        style={{ borderColor: 'var(--hiw-border)' }}
                    >
                        {steps.map((step, index) => (
                            <li
                                key={step.title}
                                className='ml-2 flex flex-col gap-3'
                            >
                                <div className='flex items-center gap-3'>
                                    <span
                                        className='flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white'
                                        style={{
                                            backgroundColor: 'var(--hiw-dot)',
                                            boxShadow: `0 0 0 10px var(--hiw-dot-ring)`,
                                        }}
                                    >
                                        {index + 1}
                                    </span>
                                    <h3 className='text-lg font-semibold text-[color:var(--hiw-primary)]'>
                                        {step.title}
                                    </h3>
                                </div>
                                <p className='text-sm leading-relaxed text-[color:var(--hiw-text-muted)]'>
                                    {step.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
