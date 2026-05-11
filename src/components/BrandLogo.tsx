type BrandLogoProps = {
  size?: 'nav' | 'footer';
  className?: string;
};

export default function BrandLogo({ size = 'nav', className = '' }: BrandLogoProps) {
  const imgClass =
    size === 'footer'
      ? 'h-16 md:h-[4.5rem] w-auto max-w-[240px] object-contain object-left'
      : 'h-11 md:h-[3.35rem] w-auto max-w-[200px] object-contain object-left';

  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      <img
        src="/logo.png"
        alt="NN Europe Consultant — circular gold and navy logo with NN monogram, EU stars, globe, and motto: Your Trust Partner to Europe"
        className={`${imgClass} shrink-0 transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]`}
        decoding="async"
        fetchPriority={size === 'nav' ? 'high' : 'auto'}
      />
    </a>
  );
}
