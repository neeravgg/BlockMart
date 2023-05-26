import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

interface SidebarLogoProps {}

const SidebarLogo: React.FC<SidebarLogoProps> = () => {
  const { sidebarActive, toggleSidebar } = useStore().commonStore;

  return (
    // eslint-disable-next-line @next/next/no-img-element

    <img
      loading="lazy"
      src="/icons/icon.png"
      alt="icon"
      onClick={toggleSidebar}
      className={` w-36 sm:w-16 z-20 transition-all duration-200
      transform translate-x-20 sm:translate-x-0 p-2 sm:p-0
      rounded-full bg-white shadow-md sm:shadow-none ${
        sidebarActive && "!translate-x-0 !shadow-none"
      }`}
    />
  );
};

export default observer(SidebarLogo);
