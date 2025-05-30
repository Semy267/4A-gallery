declare interface IDialogDrawer {
  title?: string;
  classNameTitle?: string;
  height?: string;
  width?: string;
  isPadding?: boolean;
  isClose?: boolean;
}

declare interface IDialog extends IDialogDrawer {
  open?: boolean;
  data?: any;
  id: string;
}

declare interface CDialog extends IDialogDrawer {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
}

declare interface IRootStore {
  loading: boolean;
  setLoading: () => void;
  clearLoading: () => void;
  dialog: IDialog | null;
  setOpenDialog: (modal: IDialog) => void;
  closeDialog: () => void;
}
