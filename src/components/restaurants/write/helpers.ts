export interface IRestaurantForm {
  name: string;
  latLng: {
    lat: string;
    lng: string;
  };
  point: string;
  content: string;
  link: {
    mangpl: string;
    naver: string;
    micherin: string;
    blueribbon: string;
  };
  emoji: string;
  hashtags: string;
}

export const DEFAULT_RESTAURANT_FORM_VALUES: IRestaurantForm = {
  name: '',
  point: '',
  content: '',
  emoji: '',
  latLng: {
    lat: '',
    lng: '',
  },
  link: {
    mangpl: '',
    naver: '',
    micherin: '',
    blueribbon: '',
  },
  hashtags: '',
};
