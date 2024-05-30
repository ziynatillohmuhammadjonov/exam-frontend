import { Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/icons/LogoIcon";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdCompare } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";

export function CustomNavbar() {
  return (
    <>
      <Navbar fluid rounded style={{ padding: "18px 0" }}>
        <Navbar.Brand as={Link} href="/">
          <LogoIcon />
        </Navbar.Brand>
        <TextInput
          id="searchtitle"
          type="text"
          rightIcon={IoSearchOutline}
          placeholder="Поиск"
          required
          style={{ width: "571px" }}
        />
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            <AiOutlineUser fontSize={24} color="#333333" />
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            <MdCompare fontSize={24} color="#333333" />
          </Navbar.Link>
          <Navbar.Link href="#">
            <SlBasket fontSize={24} color="#333333" />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Navbar
        fluid
        rounded
        style={{
          padding: "13px 70px",
          backgroundColor: "#B79B7E",
          position: "absolute",
          width: "100vw",
          left: "0px",
          right: "0px",
          justifyContent: "flex-start",
        }}
      >
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <div className="text-white flex gap-2">
                <RxHamburgerMenu fontSize={24} />
                Каталог
              </div>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            О компания
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            Контакти
          </Navbar.Link>
          <Navbar.Link href="#">Доставка</Navbar.Link>
          <Navbar.Link href="#">Оплата</Navbar.Link>
          <Navbar.Link href="#">Личний кабинет</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
