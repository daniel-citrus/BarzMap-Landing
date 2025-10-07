export default function CallToAction() {
    return (
        <section className='bg-brand-primary text-white'>
            <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 py-16 text-center sm:px-6 md:grid-cols-[1.1fr,0.9fr] md:items-center md:text-left'>
                <div className='flex flex-col items-center gap-4 md:items-start'>
                    <p className='text-sm font-semibold uppercase tracking-widest'>
                        Get notified
                    </p>
                    <h2 className='text-3xl font-semibold leading-tight md:text-4xl'>
                        Get notified when BarzMap launches
                    </h2>
                    <p className='max-w-2xl text-base text-white/80'>
                        Join thousands of athletes waiting for early access.
                        We&apos;ll send one email when the map is ready.
                    </p>
                    <form className='flex w-full flex-col gap-3 rounded-lg bg-white/10 p-4 shadow-sm backdrop-blur-sm sm:max-w-xl md:flex-row'>
                        <label htmlFor='cta-email' className='sr-only'>
                            Email address
                        </label>
                        <input
                            id='cta-email'
                            type='email'
                            required
                            placeholder='you@example.com'
                            className='w-full rounded-md border border-white/30 bg-white/90 px-3 py-2 text-base text-brand-dark placeholder:text-brand-dark/60 focus:outline-none focus:ring-2 focus:ring-white/50'
                        />
                        <button
                            type='submit'
                            className='rounded-md bg-brand-dark px-4 py-2 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-dark-muted'
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className='text-xs text-white/70'>
                        Unsubscribe anytime. We respect your inbox.
                    </p>
                </div>
                <figure className='w-full overflow-hidden rounded-2xl border border-white/40 shadow-lg'>
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
