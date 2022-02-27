import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-ball.png";
import {
  ContactPageOutlined,
  GridView,
  HomeOutlined,
  NewspaperOutlined,
  PersonOutlined,
  Search,
  WebOutlined,
} from "@mui/icons-material";
import MediaQuery from "react-responsive";
import SideDrawer from "../Drawer";

const Header = () => {
  return (
    <div className={`header`}>
      <div className="header-left">
        <Link href="/">
          <Image src={logo} alt="" height={50} width={50} />
        </Link>
        <Link href="/">
          <span>InfiBlogs</span>
        </Link>
      </div>

      <div className="header-center">
        <ul className="header-items">
          <li>
            <Link href="/">
              <HomeOutlined color="primary" />
            </Link>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/blogs">
              <WebOutlined color="primary" />
            </Link>
            <Link href="/blogs">BLOGS</Link>
          </li>
          <li>
            <Link href="/">
              <NewspaperOutlined color="primary" />
            </Link>
            <Link href="/">NEWS</Link>
          </li>
          <li>
            <Link href="/">
              <PersonOutlined color="primary" />
            </Link>
            <Link href="/">ABOUT</Link>
          </li>
          <li>
            <Link href="/">
              <ContactPageOutlined color="primary" />
            </Link>
            <Link href="/">CONTACT</Link>
          </li>
        </ul>
      </div>

      <div className="header-right">
        <Link href="/search">
          <Search color="primary" style={{ cursor: "pointer" }} />
        </Link>

        <MediaQuery maxWidth={768}>
          <SideDrawer>
            <GridView color="primary" style={{ cursor: "pointer" }} />
          </SideDrawer>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Header;
