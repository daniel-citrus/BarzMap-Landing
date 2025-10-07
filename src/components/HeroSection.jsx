import { useBrandColors, withOpacity } from '../theme/useBrandColors.js';

const highlights = [
    'Discover parks near you',
    'Join a growing outdoor community',
    'Share your favorite workout spots',
];

export default function HeroSection() {
    const colors = useBrandColors();
    const sectionStyles = {
        '--hero-bg': colors.background,
        '--hero-text': colors.dark,
        '--hero-text-muted': withOpacity(colors.dark, 0.8),
        '--hero-text-subtle': withOpacity(colors.dark, 0.6),
        '--hero-accent': colors.accent,
        '--hero-primary': colors.primary,
        '--hero-primary-hover': colors.primaryHover,
        '--hero-border-primary': withOpacity(colors.primary, 0.3),
        '--hero-border-soft': withOpacity(colors.dark, 0.2),
        '--hero-ring': withOpacity(colors.primary, 0.3),
        '--hero-image-border': withOpacity(colors.primary, 0.15),
        '--hero-image-shadow': `0 25px 50px -12px ${withOpacity(
            colors.dark,
            0.25
        )}`,
    };

    return (
        <section
            className='bg-[color:var(--hero-bg)] text-[color:var(--hero-text)]'
            style={sectionStyles}
        >
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-20'>
                <div className='flex flex-col gap-6'>
                    <p className='text-sm font-semibold uppercase tracking-widest text-[color:var(--hero-accent)]'>
                        BarzMap
                    </p>
                    <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
                        The World&apos;s Outdoor Gym Map
                    </h1>
                    <p className='max-w-2xl text-lg text-[color:var(--hero-text-muted)]'>
                        Find outdoor calisthenics parks, meet athletes nearby,
                        and stay in the loop for the BarzMap launch. Join the
                        mailing list for early access and updates.
                    </p>
                    <ul className='grid gap-2 text-sm text-[color:var(--hero-text-subtle)] sm:max-w-md'>
                        {highlights.map((item) => (
                            <li key={item} className='flex items-start gap-2'>
                                <span
                                    aria-hidden='true'
                                    className='mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--hero-primary)]'
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <form
                        className='flex flex-col gap-3 rounded-lg border bg-white p-4 shadow-sm sm:flex-row sm:items-center'
                        style={{ borderColor: 'var(--hero-border-primary)' }}
                    >
                        <label htmlFor='hero-email' className='sr-only'>
                            Email address
                        </label>
                        <input
                            id='hero-email'
                            type='email'
                            required
                            placeholder='you@example.com'
                            className='w-full rounded-md border px-3 py-2 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[color:var(--hero-ring)]'
                            style={{ borderColor: 'var(--hero-border-soft)' }}
                        />
                        <button
                            type='submit'
                            className='rounded-md bg-[color:var(--hero-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--hero-primary-hover)]'
                        >
                            Notify Me at Launch
                        </button>
                    </form>
                    <p className='text-xs text-[color:var(--hero-text-subtle)]'>
                        No spam. Just launch updates and community news.
                    </p>
                </div>
                <figure
                    className='w-full overflow-hidden rounded-2xl border bg-white'
                    style={{
                        borderColor: 'var(--hero-image-border)',
                        boxShadow: 'var(--hero-image-shadow)',
                    }}
                >
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
