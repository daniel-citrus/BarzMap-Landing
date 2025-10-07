const highlights = [
    'Discover parks near you',
    'Join a growing outdoor community',
    'Share your favorite workout spots',
];

export default function HeroSection() {
    return (
        <section className='bg-brand-background text-brand-dark'>
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-20'>
                <div className='flex flex-col gap-6'>
                    <p className='text-sm font-semibold uppercase tracking-widest text-brand-accent'>
                        BarzMap
                    </p>
                    <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
                        The World&apos;s Outdoor Gym Map
                    </h1>
                    <p className='max-w-2xl text-lg text-brand-dark/80'>
                        Find outdoor calisthenics parks, meet athletes nearby,
                        and stay in the loop for the BarzMap launch. Join the
                        mailing list for early access and updates.
                    </p>
                    <ul className='grid gap-2 text-sm text-brand-dark/70 sm:max-w-md'>
                        {highlights.map((item) => (
                            <li key={item} className='flex items-start gap-2'>
                                <span
                                    aria-hidden='true'
                                    className='mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary'
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <form className='flex flex-col gap-3 rounded-lg border border-brand-primary/30 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center'>
                        <label htmlFor='hero-email' className='sr-only'>
                            Email address
                        </label>
                        <input
                            id='hero-email'
                            type='email'
                            required
                            placeholder='you@example.com'
                            className='w-full rounded-md border border-brand-dark/20 bg-white px-3 py-2 text-base text-brand-dark placeholder:text-brand-dark/60 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30'
                        />
                        <button
                            type='submit'
                            className='rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover'
                        >
                            Notify Me at Launch
                        </button>
                    </form>
                    <p className='text-xs text-brand-dark/60'>
                        No spam. Just launch updates and community news.
                    </p>
                </div>
                <figure className='w-full overflow-hidden rounded-2xl border border-brand-primary/20 bg-white shadow-brand-xl'>
                    <img
                        src='https://placehold.co/680x520?text=Outdoor+Training'
                        alt='Athletes training outdoors at a calisthenics park'
                        className='h-full w-full object-cover'
                        loading='lazy'
                    />
                </figure>
            </div>
        </section>
    );
}
