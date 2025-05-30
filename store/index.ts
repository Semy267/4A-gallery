import { create } from "zustand";

const initialDialog: IDialog = {
  id: "",
};

const store = create<IRootStore>((set) => ({
  loading: false,
  setLoading: () => set({ loading: true }),
  clearLoading: () => set({ loading: false }),
  dialog: null,
  setOpenDialog: (dialog: IDialog) =>
    set({ dialog: { ...dialog, open: true } }),
  closeDialog: () => set({ dialog: initialDialog }),
}));

export default store;
