import outdoor from '../assets/1_Upt1DIo3TjnbENn39qkywQ.jpg';
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
    return (
        <section className='bg-brand-background text-brand-dark'>
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr,1fr] lg:items-start'>
                <div className='flex flex-col gap-8'>
                    <div>
                        <p className='text-sm font-semibold uppercase tracking-widest text-brand-accent'>
                            Features
                        </p>
                        <h2 className='mt-2 text-3xl font-semibold'>
                            Built for outdoor athletes
                        </h2>
                        <p className='mt-3 max-w-2xl text-base text-brand-dark/70'>
                            Everything you need to plan your next workout,
                            connect with the community, and contribute to a
                            shared map of outdoor gyms.
                        </p>
                    </div>
                    <div className='grid gap-6 md:grid-cols-2'>
                        {features.map((feature) => (
                            <article
                                key={feature.title}
                                className='rounded-xl border border-brand-dark/10 bg-white p-6 shadow-sm'
                            >
                                <h3 className='text-lg font-semibold text-brand-primary'>
                                    {feature.title}
                                </h3>
                                <p className='mt-2 text-sm text-brand-dark/70'>
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
                <figure className='w-full overflow-hidden rounded-2xl border border-brand-primary/20 bg-white shadow-lg'>
                    <img
                        src={outdoor}
                        alt='Mockup of the BarzMap product interface'
                        className='h-full w-full object-cover'
                        loading='lazy'
                    />
                </figure>
            </div>
        </section>
    );
}
