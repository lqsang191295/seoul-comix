import clsx from "clsx";
import Link from "next/link";

interface MenuItemProps {
  icon: React.ReactElement;
  title: string;
  href: string;
  className: string;
  onClickMenu: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  href,
  className,
  onClickMenu,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "flex flex-col flex-1 items-center cursor-pointer hover:text-[#c65c39]",
        className
      )}
      onClick={onClickMenu}
    >
      <div className="flex size-6">{icon}</div>
      <div className="text-[13px]">{title}</div>
    </Link>
  );
};

export default MenuItem;
