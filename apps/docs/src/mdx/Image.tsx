/* eslint-disable @next/next/no-img-element */
import NextImage from 'next/image';

const DOCS_URL = 'https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com';

function getImageSrc(src: string, size: '1x' | '2x') {
  const w = size === '1x' ? 1920 : 3840;

  return `https://nextjs.org/_next/image?url=${encodeURIComponent(
    `${DOCS_URL}${src}`,
  )}&w=${w}&q=75`;
}

export const Image = ({
  srcLight,
  srcDark,
  alt,
  ...props
}: {
  alt: string;
  srcLight: string;
  srcDark: string;
  width: `${number}`;
  height: `${number}`;
}) => {
  return (
    <figure>
      <img
        {...props}
        alt={alt}
        loading="lazy"
        decoding="async"
        data-nimg="1"
        className="rounded-md border border-gray-200 bg-gray-100 dark:hidden"
        srcSet={`${getImageSrc(srcLight, '1x')} 1x, ${getImageSrc(srcLight, '2x')} 2x`}
        src={getImageSrc(srcLight, '2x')}
        style={{ color: 'transparent' }}
      />
      <img
        {...props}
        alt={alt}
        loading="lazy"
        decoding="async"
        data-nimg="1"
        className="rounded-md border border-gray-200 bg-gray-100 hidden dark:block"
        srcSet={`${getImageSrc(srcDark, '1x')} 1x, ${getImageSrc(srcDark, '2x')} 2x`}
        src={getImageSrc(srcDark, '2x')}
        style={{ color: 'transparent' }}
      />
    </figure>
  );
};
