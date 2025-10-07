import { useBrandColors, withOpacity } from '../theme/useBrandColors.js';

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
    const colors = useBrandColors();
    const sectionStyles = {
        '--footer-bg': colors.dark,
        '--footer-bottom': colors.footerBottom,
        '--footer-text': colors.light,
        '--footer-muted': withOpacity(colors.light, 0.7),
        '--footer-subtle': withOpacity(colors.light, 0.6),
        '--footer-hover': colors.primary,
    };

    return (
        <footer
            className='text-[color:var(--footer-text)]'
            style={sectionStyles}
        >
            <div className='bg-[color:var(--footer-bg)]'>
                <div className='mx-auto flex w-full flex-col gap-6 px-4 py-10 sm:px-6 md:max-w-5xl md:flex-row md:items-start md:justify-between'>
                    <div className='space-y-3'>
                        <p className='text-lg font-semibold'>BarzMap</p>
                        <p className='max-w-sm text-sm text-[color:var(--footer-muted)]'>
                            Outdoor athletes, connected through a shared map of
                            parks, equipment, and community stories.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6 text-sm md:flex-row md:gap-10'>
                        <div className='space-y-2'>
                            <p className='font-semibold uppercase tracking-widest text-[color:var(--footer-subtle)]'>
                                Follow
                            </p>
                            <ul className='space-y-1'>
                                {socials.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className='transition-colors hover:text-[color:var(--footer-hover)]'
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <p className='font-semibold uppercase tracking-widest text-[color:var(--footer-subtle)]'>
                                Links
                            </p>
                            <ul className='space-y-1'>
                                {links.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className='transition-colors hover:text-[color:var(--footer-hover)]'
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
            <div className='border-t border-white/10 bg-[color:var(--footer-bottom)] py-4 text-center text-xs text-[color:var(--footer-subtle)]'>
                © {new Date().getFullYear()} BarzMap. All rights reserved.
            </div>
        </footer>
    );
}
