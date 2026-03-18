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
    <div className="flex justify-center">
      <figure>
        <img
          {...props}
          alt={alt}
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="rounded-md border border-gray-200 bg-gray-100 dark:hidden"
          src={srcLight}
          style={{ color: 'transparent' }}
        />
        <img
          {...props}
          alt={alt}
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="rounded-md border border-gray-200 bg-gray-100 hidden dark:block"
          src={srcDark}
          style={{ color: 'transparent' }}
        />
      </figure>
    </div>
  );
};
