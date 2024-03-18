import { Button, Switch } from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";
import HomeIcone from "../componenti/icons/HomeIcone";
import { SunIcon } from "../componenti/icons/SunIcon";
import { MoonIcon } from "../componenti/icons/MoonIcon";
import { useTheme } from "../providers/ThemeProvider";


const GuestLayout = () => {

  const {darkMode, setDarkMode} = useTheme();
  return (
    <>
      <div className=" w-full h-screen bg-gradient-to-br from-blue-700  via-rose-500 to-violet-600  dark:from-content1 dark:to-content1  flex justify-center items-center">
        <div className=" fixed top-0 left-0 w-full p-4 flex justify-between">
          <Button isIconOnly as={Link} to={'/'}>
            <HomeIcone />
          </Button>
          <Switch
            isSelected= {darkMode}
            onValueChange={setDarkMode}
            size="lg"
            color="default"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          >
          </Switch>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default GuestLayout;
