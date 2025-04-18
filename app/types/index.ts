export type Slide = {
  id: number;
  content: React.ReactNode;
};

export type SliderProps = {
  slides: Slide[];
};

export type Movie = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  vote_count: number;
  original_language: string;
};

export type MovieSliderProps = {
  movies: Movie[];
};

export type SectionHeaderProps = {
  title: string;
  linkText: string;
  movies: MovieSliderProps | any;
};

export interface CommonModalContainerProps {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm?: () => void;
  confirmLoading?: boolean;
  children: React.ReactNode;
  footer?: any;
  className?: string;
  [key: string]: any;
}

export type NavBarProps = {
  searchQuery: string;
  setSearchQuery: any;
};

export type MovieProps = {
  searchQuery: string;
};
