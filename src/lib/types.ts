export type Restaurant = {
  name: string;
  latLng: {
    lat: number;
    lng: number;
  };
  point?: number;
  content?: string;
  link?: {
    mangpl?: string;
    naver?: string;
    micherin?: string;
    blueribbon?: string;
  };
  emoji?: string;
  hashtags?: string[];
};
