import DefaultHeader from "./Default";
import LoggedHeader from "./Logged";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
const Header = () => {
  const [logged, setLogged] = useState(false);
  const router = useRouter();
  useEffect(() => {
    try {
      const userData = JSON.parse(getCookie("user") as string);
      setLogged(true);
    } catch (error) {
      setLogged(false);
    }
    const handleRouteChange = (url) => {
      try {
        const userData = JSON.parse(getCookie("user") as string);
        setLogged(true);
      } catch (error) {
        setLogged(false);
      }
    };
    router.events.on("routeChangeStart", handleRouteChange);
    if (router.pathname === "/") setLogged(false);
  }, []);

  return logged ? LoggedHeader() : DefaultHeader();
};

export default Header;
