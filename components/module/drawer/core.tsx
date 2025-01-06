import store from "@/store";
import CDrawer from "../c-drawer";

export default function CoreDrawer() {
  const { drawer, closeDrawer } = store();
  const open = drawer?.open;
  const drawerName = drawer?.drawerName;
  const paddingContent = drawer?.paddingContent;
  const headerTitle = drawer?.headerTitle;
  const height = drawer?.height || "";

  const DrawerContent = () => {
    switch (drawerName) {
      case "SAME_ITEM":
        return <div></div>;
    }
  };
  return open ? (
    <CDrawer
      open={open}
      setIsOpen={() => closeDrawer}
      headerTitle={headerTitle}
      height={height}
      paddingContent={paddingContent}
    >
      <DrawerContent />
    </CDrawer>
  ) : null;
}
