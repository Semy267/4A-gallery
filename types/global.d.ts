declare interface CButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  disable?: boolean;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon" | "none";
  font?: "nrl" | "mdm" | "sbd" | "bd";
}

declare interface ICTable {
  column: any[];
  colConfig: {
    header: string;
    render: (item: any, id: number) => React.ReactNode;
  }[];
  classNameHeader?: string;
  styleTextCol?: string;
  styleTextHead?: string;
  className?: string;
  onClick?: (item: any) => void;
  ref?: any;
  isLoading?: boolean;
  select?: string[];
  setSelect?: React.Dispatch<React.SetStateAction<string[]>>;
}

declare interface IFieldInput
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  field?: any;
  label?: string;
  className?: string;
  classNameParent?: string;
  iconSvg?: any;
  iconImg?: any;
  iconSize?: number;
}

interface ICinput extends IFieldInput {
  name: string;
  label?: string;
  validators?: any;
  form: any; // NOTE if u know the type of form, please let me know or just open pr
}

declare interface ITextArea {
  value: string;
  placeholder?: string;
  className?: string;
  isError?: boolean;
}

declare interface IOpt {
  label: string;
  value: string;
}
declare interface ISelectCommon {
  value: string | undefined;
  onChange: (value: string) => void;
  options: IOpt[];
}

declare interface ICSelect extends ISelectCommon {
  trigger?: React.ReactNode;
  label?: string;
  placeholder?: string;
  className?: string;
  classNameParent?: string;
  classNameContent?: string;
}

declare type CImage = {
  src: any;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: any;
  fill?: boolean;
  rounded?: string;
  additional?: string;
};

declare interface IDynamicList {
  isLoading: boolean;
  item: any[];
  classNameLoading?: string;
  classNameEmpty?: string;
  className?: string;
  render: (item: any, id: number) => React.ReactNode;
  id?: string;
  titleEmpty?: string;
  descriptionEmpty?: string;
  length?: number;
}

declare interface ICarousel {
  arrowPosition?:
    | "inside"
    | "inside-right"
    | "inside-left"
    | "outside-top"
    | "outside-bottom";
  dotPosition?: "inside" | "outside";
  dotAlign?: "start" | "center" | "end";
  showArrow?: boolean;
  children: React.ReactNode;
}

declare type CCarouselWithDots = ICarousel & {
  showDots: true;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

declare type CCarouselWithoutDots = ICarousel & {
  showDots?: false;
  current?: never;
  setCurrent?: never;
};

declare type CCarousel = CCarouselWithDots | CCarouselWithoutDots;
