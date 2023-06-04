import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const SideNav = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  const menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Explore",
      path: "/explore",
      isPublic: true,
    },
    {
      title: "Notifications",
      path: "/notifications",
    },
    {
      title: "Messages",
      path: "/messages",
    },
    {
      title: "Lists",
      path: "/lists",
    },
    {
      title: "Bookmarks",
      path: "/bookmarks",
    },
    {
      title: "Profile",
      path: `/profiles/${user?.id || ""}`,
    },
    {
      title: "Settings",
      path: "/settings",
      isPublic: true,
    },
  ];

  const renderContent = () => {
    if (status === "loading") return null;

    return menu
      .filter((item) => (!user ? item.isPublic : !item.isPublic))
      .map((item, idx) => {
        return (
          <li key={idx}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        );
      });
  };

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        {renderContent()}
        {!user ? (
          <li>
            <button onClick={() => void signIn()}>Log in</button>
          </li>
        ) : (
          <li>
            <button onClick={() => void signOut()}>Log out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
