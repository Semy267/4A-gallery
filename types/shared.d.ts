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
  font?: "default" | "normal" | "medium" | "semibold" | "bold";
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
  validators?: any;
  form: any; // NOTE if u know the type of form, please let me know or just open pr
}

declare type CFormBase = {
  name: string;
  validators?: any;
  label?: string;
  form: any;
  field?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

declare type CFormWithOpt = CFormBase & {
  opt: IOpt[];
  value?: string;
};

declare type CFormSingle = CFormBase & {
  value: string;
  opt?: undefined;
};

declare type CRadioFormProps = CFormSingle | CFormWithOpt;
declare type CCheckboxFormProps = CFormSingle | CFormWithOpt;

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
  showDots?: true;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

declare type CCarouselWithoutDots = ICarousel & {
  showDots?: false;
  current?: never;
  setCurrent?: never;
};

declare type CCarousel = CCarouselWithDots | CCarouselWithoutDots;

declare interface BaseDialogDrawer {
  title?: string | React.ReactNode;
  classNameTitle?: string;
  titleAlign?: React.CSSProperties["textAlign"];
  isPadding?: boolean;
  disableOutsideInteraction?: boolean;
  children: React.ReactNode;
}

declare interface ControlledDialogDrawer extends BaseDialogDrawer {
  open: boolean;
  onClose: () => void;
  isClose?: boolean;
  trigger?: never;
}

declare interface UncontrolledDialogDrawer extends BaseDialogDrawer {
  open?: undefined;
  onClose?: () => void;
  isClose?: never;
  trigger: React.ReactNode;
}

declare type IDialogDrawer = ControlledDialogDrawer | UncontrolledDialogDrawer;
