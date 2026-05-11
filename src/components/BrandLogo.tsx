type BrandLogoProps = {
  size?: 'nav' | 'footer';
  className?: string;
};

export default function BrandLogo({ size = 'nav', className = '' }: BrandLogoProps) {
  const imgClass =
    size === 'footer'
      ? 'h-[4.5rem] w-[4.5rem] md:h-20 md:w-20 shrink-0 object-contain'
      : 'h-14 w-14 sm:h-[3.75rem] sm:w-[3.75rem] md:h-16 md:w-16 shrink-0 object-contain';

  return (
    <a href="#" className={`flex items-center gap-3 group ${className}`}>
      <img
        src="/logo.png"
        alt="NN Europe Consultant — circular gold and navy logo with NN monogram, EU stars, globe, and motto: Your Trust Partner to Europe"
        className={`${imgClass} transition-transform duration-300 group-hover:scale-[1.03] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]`}
        decoding="async"
        fetchPriority={size === 'nav' ? 'high' : 'auto'}
      />
    </a>
  );
}
