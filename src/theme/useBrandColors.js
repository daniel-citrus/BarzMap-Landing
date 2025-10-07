import { useMemo } from 'react';

export const brandColors = {
    primary: '#005A9C',
    primaryHover: '#004C86',
    accent: '#00C853',
    dark: '#1F2933',
    darkMuted: '#111927',
    background: '#F5F7FA',
    highlight: '#FFA726',
    light: '#FFFFFF',
    footerBottom: '#1A1A1A',
};

export function withOpacity(hex, opacity) {
    const normalizedHex = hex.replace('#', '');
    const bigint = parseInt(normalizedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function useBrandColors() {
    return useMemo(() => brandColors, []);
}
