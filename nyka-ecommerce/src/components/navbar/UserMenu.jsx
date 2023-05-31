import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
  UserIcon,
  UserPlusIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
const logoProfile = require("../../../public/user-logo.png");

export default function UserMenu({ isLogged , signOut}) {

  return (
    <Menu>
      
        {isLogged ? (
          <MenuHandler>
          <Avatar
            variant="circular"
            alt="candice wu"
            className="cursor-pointer w-7 h-7"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          /></MenuHandler>
        ) : (
          <MenuHandler>
            <Image
              src={logoProfile}
              className="cursor-pointer w-7 h-7 rounded-full"
              alt="Picture of the user"
            />
          </MenuHandler>
        )}
   
      <MenuList>
        {isLogged ? (
          <>
            <MenuItem className="flex items-center gap-2">
              <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                My Profile
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                Edit Profile
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                Inbox
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                Help
              </Typography>
            </MenuItem>
            <hr className="my-2 border-blue-gray-50" />
            <MenuItem className="flex items-center gap-2 " onClick={signOut}>
              <PowerIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal" >
                Cerrar Sesión
              </Typography>
            </MenuItem>
          </>
        ) : (
          <>
          <MenuItem className="flex items-center gap-2">
              <UserIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
                <Link href="/auth/login">
                Iniciar Sesión
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" />
              <Typography variant="small" className="font-normal">
              <Link href="/auth/register">
                Registrarse
                </Link>
              </Typography>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
}
