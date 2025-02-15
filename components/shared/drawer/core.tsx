import store from "@/store";
import CDrawer from "@/shared/custome/c-drawer";
import DConfirmation from "../dialog/d-confirmation";

export default function CoreDrawer() {
  const { drawer, closeDrawer } = store();
  const open = drawer?.open;
  const id = drawer?.id;
  const paddingContent = drawer?.paddingContent;
  const headerTitle = drawer?.headerTitle;
  const height = drawer?.height || "";

  const DrawerContent = () => {
    switch (id) {
      case "CONFRIMATION":
        return <DConfirmation />;
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
