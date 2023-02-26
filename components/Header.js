import Link from "next/link";
import { SunIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { withRouter } from "next/router";

function Header({ router }) {
  const { theme, setTheme } = useTheme();
  const navs = [
    { text: "Home", href: "/" },
    { text: "Sell Digital Asset", href: "/create-item" },
    { text: "My Digital Assets", href: "/my-assets" },
    { text: "Creator Dashboard", href: "/creator-dashboard" },
  ];
  return (
    <div className="border-b p-6">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-4xl font-bold">Zero</h3>
          <p className="">NFT Marketplace</p>
        </div>
        <div className="flex justify-end">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="order-2 md:order-3"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme == "light" ? (
              <MoonIcon className="ml-6 h-9 w-9" />
            ) : (
              <SunIcon className="ml-6 h-9 w-9" />
            )}
          </button>
        </div>
      </div>
      <div className="flex mt-4">
        <ul className="flex mr-auto list-none">
          {navs.map((nav) => (
            <li key={nav.text}>
              <Link href={nav.href}>
                <a
                  className={`mr-6 text-pink-500 ${
                    router.pathname == nav.href ? "active" : ""
                  }`}
                >
                  {nav.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {/* <Link href="/">
          <a className="mr-6 text-pink-500">Home</a>
        </Link>
        <Link href="/create-item">
          <a className="mr-6 text-pink-500">Sell Digital Asset</a>
        </Link>
        <Link href="/my-assets">
          <a className="mr-6 text-pink-500">My Digital Assets</a>
        </Link>
        <Link href="/creator-dashboard">
          <a className="mr-6 text-pink-500">Creator Dashboard</a>
        </Link> */}
      </div>
    </div>
  );
}

export default withRouter(Header);
