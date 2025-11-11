import FolderImage from '@/assets/images/folder.png';
import { StaticImageData } from 'next/image';
export type ContentHistoryType = {
  id: string;
  image_url: StaticImageData;
  title: string;
  keyword: string;
  difficulty: number;
  volume: number;
  date: string;
};

export const contentHistory: ContentHistoryType[] = [
  {
    id: '728ed52f',
    image_url: FolderImage,
    title: 'How can create effective blogs',
    keyword: 'effective blogs creative',
    difficulty: 48,
    volume: 124,
    date: '24 Aug 2025',
  },
  {
    id: '489e1d42',
    image_url: FolderImage,
    title: 'Main blog ideas',
    keyword: 'key blog ideas',
    difficulty: 72,
    volume: 44,
    date: '25 Aug 2025',
  },
];
