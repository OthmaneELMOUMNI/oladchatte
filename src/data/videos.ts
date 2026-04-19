interface BaseVideoItem {
  id: string;
  title: string;
  label: string;
}

export interface YoutubeVideoItem extends BaseVideoItem {
  kind: 'youtube';
  youtubeId: string;
}

export interface LocalVideoItem extends BaseVideoItem {
  kind: 'local';
  src: string;
}

export const publicVideos: YoutubeVideoItem[] = [
  {
    id: 'video-1',
    kind: 'youtube',
    youtubeId: 'Py72iewoxbw',
    title: 'Live Performance - Oulad Chatta',
    label: 'Featured performance',
  },
  {
    id: 'video-2',
    kind: 'youtube',
    youtubeId: '_XIS71yU8DE',
    title: 'Oulad Chatta - Traditional Ceremony',
    label: 'Traditional ceremony',
  },
  {
    id: 'video-3',
    kind: 'youtube',
    youtubeId: 'JS6pX4kqEOc',
    title: 'Sacred Rhythms of the Aissawa',
    label: 'Sacred rhythms',
  },
];

export const privateGatheringVideo: LocalVideoItem = {
  id: 'video-4',
  kind: 'local',
  src: '/videos/whatsapp-performance.mp4',
  title: 'Private Gathering - Oulad Chatta',
  label: 'Private gathering',
};
