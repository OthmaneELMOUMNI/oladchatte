import React, { useState } from 'react';
import { publicVideos, type YoutubeVideoItem } from '../../data/videos';
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback';
import styles from './VideoSection.module.css';

const getVideoEmbedUrl = (youtubeId: string) =>
  `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&color=white`;

const getVideoPosterUrl = (youtubeId: string) => `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

export const VideoSection: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const getLayoutClassName = (index: number) => {
    switch (index) {
      case 0:
        return styles.featuredCard;
      case 1:
        return styles.secondaryTopCard;
      default:
        return styles.secondaryBottomCard;
    }
  };

  const renderVideoCard = (video: YoutubeVideoItem, layoutClassName: string) => {
    const isActive = activeVideoId === video.id;

    return (
      <article key={video.id} className={`${styles.videoCard} ${layoutClassName}`}>
        <div className={styles.embedShell}>
          {isActive ? (
            <div className={styles.embedWrapper}>
              <iframe
                className={styles.iframe}
                src={getVideoEmbedUrl(video.youtubeId)}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <button
              type="button"
              className={styles.posterButton}
              onClick={() => setActiveVideoId(video.id)}
              aria-label={`Play ${video.title}`}
            >
              <ImageWithFallback
                src={getVideoPosterUrl(video.youtubeId)}
                alt={video.title}
                className={styles.posterImage}
                fallbackLabel="Performance"
                fallbackClassName={styles.posterFallback}
                loading="lazy"
                decoding="async"
              />
              <span className={styles.posterShade} aria-hidden="true" />
              <span className={styles.posterBadge}>
                <span className={styles.playButton} aria-hidden="true">
                  <span className={styles.playTriangle} />
                </span>
                <span className={styles.posterText}>
                  <span className={styles.posterLabel}>{video.label}</span>
                  <span className={styles.posterTitle}>{video.title}</span>
                </span>
              </span>
            </button>
          )}
        </div>

        <div className={styles.videoMeta}>
          <div className={styles.captionLine} />
          <p className={styles.videoTitle}>{video.title}</p>
        </div>
      </article>
    );
  };

  return (
    <section id="performances" className={`container ${styles.section}`} aria-labelledby="performances-title">
      <div className={styles.grid}>
        <div className={styles.textContent}>
          <div className={styles.header}>
            <p className={styles.subtitle}>In the Spotlight</p>
            <h2 id="performances-title" className={styles.title}>
              Watch Us
              <br />
              Perform
            </h2>
          </div>

          <p className={styles.description}>
            From sacred ceremonies to international stages, witness the living tradition of Oulad Chatta
            through performances shaped by trance, devotion, and fire.
          </p>
        </div>

        <div className={styles.mediaLayout}>
          {publicVideos.map((video: YoutubeVideoItem, index: number) =>
            renderVideoCard(video, getLayoutClassName(index))
          )}
        </div>
      </div>
    </section>
  );
};
