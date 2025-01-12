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

declare interface CInput {
  name: string;
  form?: any;
  label?: string;
  placeholder: string;
  ref?: React.RefObject<HTMLInputElement>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  classNameParent?: string;
  type?: string;
  checked?: boolean;
  iconSvg?: any;
  iconImg?: any;
  iconSize?: number;
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

declare interface IModal {
  open?: boolean;
  headerTitle?: string;
  headerClassName?: string;
  footerTitle?: string;
  data?: any;
  modalName: string;
  height?: string;
  width?: string;
  paddingContent?: boolean;
  headerTitleClassName?: string;
  showHeader?: boolean;
  messaging?: boolean;
}

declare interface CModal {
  shadowFooter?: boolean;
  showFooter?: boolean;
  showHeader?: boolean;
  paddingContent?: boolean;
  headerTitle?: string;
  footerTitle?: string;
  headerClassName?: string;
  onClickFooter?: () => void;
  open: booleheaderTitlean;
  height: string;
  width: string;
  children: React.ReactNode;
  setIsOpen: (open: boolean) => void;
}

declare interface IDrawer {
  open?: boolean;
  headerTitle?: string;
  drawerName: string;
  data?: null | any;
  height: string;
  paddingContent?: boolean;
}

declare interface CDrawer {
  open: boolean;
  children: React.ReactNode;
  height?: string;
  setIsOpen: () => void;
  headerTitle?: string;
  paddingContent?: boolean;
}

declare interface IRootStore {
  loading: boolean;
  setLoading: () => void;
  clearLoading: () => void;
  dialog: IModal | null;
  setOpenDialog: (modal: IModal) => void;
  closeDialog: () => void;
  drawer: IDrawer | null;
  setOpenDrawer: (drawer: IDrawer) => void;
  closeDrawer: () => void;
}

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
