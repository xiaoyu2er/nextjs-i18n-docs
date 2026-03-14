export const Video = ({
  src,
  caption,
  width,
  height,
}: {
  src: string;
  caption?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <figure>
      {/* biome-ignore lint/a11y/useMediaCaption: caption is shown below */}
      <video
        src={src}
        width={width}
        height={height}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      {caption && (
        <figcaption style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
