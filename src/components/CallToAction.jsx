import { useBrandColors, withOpacity } from '../theme/useBrandColors.js';

export default function CallToAction() {
    const colors = useBrandColors();
    const sectionStyles = {
        '--cta-bg': colors.primary,
        '--cta-hover': colors.primaryHover,
        '--cta-text': colors.light,
        '--cta-muted': withOpacity(colors.light, 0.8),
        '--cta-border': withOpacity(colors.light, 0.3),
        '--cta-input-text': colors.dark,
        '--cta-input-border': withOpacity(colors.light, 0.3),
        '--cta-ring': withOpacity(colors.light, 0.4),
        '--cta-button-bg': colors.dark,
        '--cta-button-hover': colors.darkMuted,
        '--cta-form-bg': withOpacity(colors.light, 0.1),
        '--cta-input-bg': withOpacity(colors.light, 0.9),
        '--cta-image-border': withOpacity(colors.light, 0.4),
    };

    return (
        <section
            className='bg-[color:var(--cta-bg)] text-[color:var(--cta-text)]'
            style={sectionStyles}
        >
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 text-center sm:px-6 md:grid-cols-[1.1fr,0.9fr] md:items-center md:text-left'>
                <div className='flex flex-col items-center gap-4 md:items-end'>
                    <p className='text-sm font-semibold uppercase tracking-widest'>
                        Get notified
                    </p>
                    <h2 className='text-3xl font-semibold leading-tight md:text-4xl'>
                        Get notified when BarzMap launches
                    </h2>
                    <p className='max-w-2xl text-base text-[color:var(--cta-muted)]'>
                        Join thousands of athletes waiting for early access.
                        We&apos;ll send one email when the map is ready.
                    </p>
                    <form
                        className='flex w-full flex-col gap-3 rounded-lg p-4 shadow-sm sm:max-w-xl md:flex-row'
                        style={{ backgroundColor: 'var(--cta-form-bg)' }}
                    >
                        <label htmlFor='cta-email' className='sr-only'>
                            Email address
                        </label>
                        <input
                            id='cta-email'
                            type='email'
                            required
                            placeholder='you@example.com'
                            className='w-full rounded-md border px-3 py-2 text-base text-[color:var(--cta-input-text)] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[color:var(--cta-ring)]'
                            style={{
                                borderColor: 'var(--cta-input-border)',
                                backgroundColor: 'var(--cta-input-bg)',
                            }}
                        />
                        <button
                            type='submit'
                            className='rounded-md bg-[color:var(--cta-button-bg)] px-4 py-2 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[color:var(--cta-button-hover)]'
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className='text-xs text-[color:var(--cta-muted)]'>
                        Unsubscribe anytime. We respect your inbox.
                    </p>
                </div>
                <figure
                    className='w-full overflow-hidden rounded-2xl border'
                    style={{ borderColor: 'var(--cta-image-border)' }}
                >
                    <img
                        src='https://placehold.co/640x480?text=Join+the+Movement'
                        alt='Abstract silhouette of athletes training at sunset'
                        className='h-full w-full object-cover'
                        loading='lazy'
                    />
                </figure>
            </div>
        </section>
    );
}
