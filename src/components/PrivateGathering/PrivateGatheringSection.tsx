import React, { useState } from 'react';
import { privateGatheringVideo } from '../../data/videos';
import styles from './PrivateGatheringSection.module.css';

const gatheringQuote = 'Every appearance keeps the rite alive - intimate in ceremony, expansive on stage.';

export const PrivateGatheringSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="private-gathering"
      className={styles.section}
      aria-labelledby="private-gathering-title"
    >
      <div className={`container ${styles.shell}`}>
        <div className={styles.copy}>
          <div className={styles.header}>
            <p className={styles.subtitle}>{privateGatheringVideo.label}</p>
            <h2 id="private-gathering-title" className={styles.title}>
              {privateGatheringVideo.title}
            </h2>
          </div>

          <p className={styles.description}>
            A closer moment of Oulad Chatta, where rhythm, devotion, and gathering feel immediate and lived-in.
          </p>

          <div className={styles.quoteBlock}>
            <div className={styles.quoteLine} />
            <p className={styles.quote}>{gatheringQuote}</p>
          </div>
        </div>

        <div className={styles.mediaColumn}>
          <div className={styles.videoFrame}>
            {isPlaying ? (
              <video
                className={styles.activeVideo}
                src={privateGatheringVideo.src}
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <button
                type="button"
                className={styles.posterButton}
                onClick={() => setIsPlaying(true)}
                aria-label={`Play ${privateGatheringVideo.title}`}
              >
                <video
                  className={styles.posterVideo}
                  src={privateGatheringVideo.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <span className={styles.posterShade} aria-hidden="true" />
                <span className={styles.posterBadge}>
                  <span className={styles.playButton} aria-hidden="true">
                    <span className={styles.playTriangle} />
                  </span>
                  <span className={styles.posterText}>
                    <span className={styles.posterLabel}>Live moment</span>
                    <span className={styles.posterTitle}>Watch the private gathering unfold</span>
                  </span>
                </span>
              </button>
            )}
          </div>

          <p className={styles.note}>
            A quieter performance setting, presented with the same stagecraft and rhythm that define the ensemble.
          </p>
        </div>
      </div>
    </section>
  );
};
