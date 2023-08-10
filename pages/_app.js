import "../styles/globals.css";
import { useRouter } from "next/router";
import LayoutCustom from "../components/Layout";
import LayoutCustomMobile from "../components/LayoutCustomMobile";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === "/login") {
    return <Component {...pageProps} />;
  } else {
    return (
      <>
        {/* Display the desktop footer on screens larger than sm (640px) */}
        <div className="hidden sm:block">
          <LayoutCustom>
            <Component {...pageProps} />
          </LayoutCustom>
        </div>

        {/* Display the mobile footer on screens smaller than sm (640px) */}
        <div className="block sm:hidden">
          <LayoutCustomMobile>
            <Component {...pageProps} />
          </LayoutCustomMobile>
        </div>
      </>
    );
  }
}
