declare interface IRootStore {
  loading: boolean;
  setLoading: () => void;
  clearLoading: () => void;
  overlay: IOverlay | null;
  setOpenOverlay: (overlay: IOverlay) => void;
  closeOverlay: () => void;
}

declare interface IOverlayCommon {
  title?: string;
  classNameTitle?: string;
  titleAlign?: "start" | "center" | "end";
  isPadding?: boolean;
  isClose?: boolean;
  disableOutsideInteraction?: boolean;
}

declare interface IOverlay extends IOverlayCommon {
  open?: boolean;
  data?: any;
  id: string;
}

declare interface CDialog extends IOverlayCommon {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
}
