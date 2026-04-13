import { useState, type ImgHTMLAttributes } from 'react';
import styles from './ImageWithFallback.module.css';

interface ImageWithFallbackProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'> {
  src?: string;
  alt: string;
  fallbackLabel?: string;
  fallbackClassName?: string;
}

export const ImageWithFallback = ({
  src = '',
  alt,
  className = '',
  fallbackClassName = '',
  fallbackLabel,
  onError,
  ...props
}: ImageWithFallbackProps) => {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const shouldShowFallback = !src || failedSrc === src;

  if (shouldShowFallback) {
    return (
      <div
        className={`${styles.fallback} ${className} ${fallbackClassName}`.trim()}
        role="img"
        aria-label={alt}
      >
        {fallbackLabel ? <span className={styles.label}>{fallbackLabel}</span> : null}
      </div>
    );
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        onError?.(event);
        setFailedSrc(src);
      }}
    />
  );
};
