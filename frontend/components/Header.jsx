import React from "react";


const Header = () => {
const [mobileMenu, setMobileMenuI] = useState(false);
const [showCatMenu, setShowCatMenu] = useState(false);
const [show, setShow] = useState("translate-y-0");
const [lastScrollY, setLastScrollY]= useState(0)

  return <div className="text">Header</div>;
};

export default Header;
