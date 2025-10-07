const links = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Terms', href: '#' },
];

const socials = [
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'TikTok', href: '#' },
    { label: 'Email', href: 'mailto:hello@barzmap.app' },
];

export default function Footer() {
    return (
        <footer className='text-white'>
            <div className='bg-brand-dark'>
                <div className='mx-auto flex w-full flex-col gap-6 px-4 py-10 sm:px-6 md:max-w-5xl md:flex-row md:items-start md:justify-between'>
                    <div className='space-y-3'>
                        <p className='text-lg font-semibold'>BarzMap</p>
                        <p className='max-w-sm text-sm text-white/70'>
                            Outdoor athletes, connected through a shared map of
                            parks, equipment, and community stories.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6 text-sm md:flex-row md:gap-10'>
                        <div className='space-y-2'>
                            <p className='font-semibold uppercase tracking-widest text-white/60'>
                                Follow
                            </p>
                            <ul className='space-y-1'>
                                {socials.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className='transition-colors hover:text-brand-primary'
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <p className='font-semibold uppercase tracking-widest text-white/60'>
                                Links
                            </p>
                            <ul className='space-y-1'>
                                {links.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className='transition-colors hover:text-brand-primary'
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-white/10 bg-brand-footer py-4 text-center text-xs text-white/60'>
                © {new Date().getFullYear()} BarzMap. All rights reserved.
            </div>
        </footer>
    );
}
