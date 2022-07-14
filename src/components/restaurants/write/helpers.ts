export interface IRestaurantForm {
  name: string;
  naverId: string;
  point: string;
  content: string;
  link: {
    mangpl: string;
    micherin: string;
    blueribbon: string;
  };
  emoji: string;
  hashtags: string;
}

export const DEFAULT_RESTAURANT_FORM_VALUES: IRestaurantForm = {
  name: '',
  naverId: '',
  point: '',
  content: '',
  emoji: '',
  link: {
    mangpl: '',
    micherin: '',
    blueribbon: '',
  },
  hashtags: '',
};
