import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Search, ShoppingCartIcon, UserIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  onchange_search,
  retrieveBestSelling,
  retrieveTrending,
} from "../../../store/slices/homeSlices";
import { useDispatch, useSelector } from "react-redux";
function MainHeader() {
  const dispatch = useDispatch();
  const { search_name, carts } = useSelector((state) => state.home_slice);

  const text = "Personalized Anniversary Keepsake"; // Text to animate
  const speed = 100;
  const interval = 10000;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const resetTyping = () => {
      setDisplayedText("");
      setIndex(0);
    };

    const typingInterval = setInterval(() => {
      resetTyping();
    }, interval);

    const typeText = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
      clearInterval(typeText);
    };
  }, [index, text, speed, interval]);

  function onClickbutton() {
    dispatch(retrieveBestSelling("best selling"));
    dispatch(retrieveTrending("trending"));
  }

  console.log("carts", carts);

  return (
    <div className="bg-[#C5ECFB] py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-x-4">
          <div className="logoBox basis-1/4">
            <NavLink to="/">
              <img className="w-full sm:w-[40%]" src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="searchBox basis-1/2 text-center">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder={displayedText}
                value={search_name}
                className="bg-white border-0 rounded-xl flex-1"
                onChange={(e) => {
                  if (e.target.value.length != 0) {
                    dispatch(onchange_search(e.target.value));
                  } else {
                    dispatch(onchange_search(e.target.value));

                    dispatch(retrieveBestSelling("best selling"));
                    dispatch(retrieveTrending("trending"));
                  }
                }}
              />
              <Button
                variant="blue"
                size="icon"
                onClick={onClickbutton}
                className="hidden sm:flex items-center justify-center h-[47px] w-[47px] rounded-lg"
              >
                <Search />
              </Button>
            </div>
          </div>
          <div className="rightContent basis-1/4">
            <ul className="flex items-center justify-end gap-x-4">
              <li>
                <NavLink
                  to="/cart"
                  className="p-3 block relative rounded-full hover:text-brand"
                >
                  <ShoppingCartIcon />
                  <span className="absolute right-0 top-0 font-bold text-sm text-red-500">
                    {carts?.length}
                  </span>
                </NavLink>
              </li>
              {/* <li>
                <a href="#" className="block hover:text-brand">
                  <UserIcon />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
