export type Restaurant = {
  id: string;
  name: string;
  latLng: {
    lat: number;
    lng: number;
  };
  link: {
    mangpl?: string;
    naver?: string;
    micherin?: string;
    blueribbon?: string;
  };
  point?: number;
  content?: string;
  emoji?: string;
  hashtags?: string[];
};
