export type Restaurant = {
  id: string;
  name: string;
  naverId: string;
  latLng: {
    lat: number;
    lng: number;
  };
  link: {
    mangpl?: string;
    micherin?: string;
    blueribbon?: string;
  };
  point?: number;
  content?: string;
  emoji?: string;
  hashtags?: string[];
};
