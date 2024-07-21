import { SidebarMenuItem } from "../item/SidebarMenuItem";

export type MenuItemProps = {
  title: string;
  icon: React.ReactNode;
  link: string;
};

interface ISidebarItemListProps {
  menuItems: MenuItemProps[];
  activeItem: string;
  onChangeActive: (item: { title: string; link?: string }) => void;
}

const SidebarItemList: React.FC<ISidebarItemListProps> = ({
  menuItems,
  activeItem,
  onChangeActive,
}) => {
  return (
    <ul className="c-sidebar__container top">
      {menuItems.map((item, index) => (
        <SidebarMenuItem
          icon={item.icon}
          isActive={activeItem === item.title}
          title={item.title}
          link={item.link}
          itemClickedCallback={onChangeActive}
          key={`sidebar-menu-${index}`}
        />
      ))}
    </ul>
  );
};

export { SidebarItemList };
