import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IconHoverEffect } from "./IconHoverEffect";
import {
  VscAccount,
  VscBell,
  VscBookmark,
  VscHome,
  VscListFlat,
  VscMail,
  VscSearch,
  VscSettingsGear,
  VscSignIn,
  VscSignOut,
} from "react-icons/vsc";
import type { IconType } from "react-icons";

export const SideNav = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const menu = [
    {
      title: "Home",
      path: "/",
      icon: VscHome,
    },
    {
      title: "Explore",
      path: "/explore",
      isPublic: true,
      icon: VscSearch,
    },
    {
      title: "Notifications",
      path: "/notifications",
      icon: VscBell,
    },
    {
      title: "Messages",
      path: "/messages",
      icon: VscMail,
    },
    {
      title: "Lists",
      path: "/lists",
      icon: VscListFlat,
    },
    {
      title: "Bookmarks",
      path: "/bookmarks",
      icon: VscBookmark,
    },
    {
      title: "Profile",
      path: `/profiles/${user?.id || ""}`,
      icon: VscAccount,
    },
    {
      title: "Settings",
      path: "/settings",
      isPublic: true,
      icon: VscSettingsGear,
    },
    {
      title: "Login",
      isButton: true,
      onClick: () => void signIn(),
      isPublic: true,
      icon: VscSignIn,
    },
    {
      title: "Logout",
      isButton: true,
      onClick: () => void signOut(),
      icon: VscSignOut,
    },
  ];

  const renderContent = () => {
    if (status === "loading") return null;

    const renderItem = ({ Icon, title }: { Icon: IconType; title: string }) => {
      return (
        <IconHoverEffect>
          <span className="flex items-center gap-4">
            <Icon className="h-8 w-8" />
            <span className="hidden text-lg md:inline">{title}</span>
          </span>
        </IconHoverEffect>
      );
    };

    return (
      <>
        {menu
          .filter((item) => (!user ? item.isPublic : !item.isPublic))
          .map((item, idx) => {
            return (
              <li key={idx}>
                <IconHoverEffect>
                  {item.isButton ? (
                    <button onClick={item.onClick}>
                      {renderItem({ Icon: item.icon, title: item.title })}
                    </button>
                  ) : (
                    <Link href={item.path || ""}>
                      {renderItem({ Icon: item.icon, title: item.title })}
                    </Link>
                  )}
                </IconHoverEffect>
              </li>
            );
          })}
      </>
    );
  };

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        {renderContent()}
      </ul>
    </nav>
  );
};
