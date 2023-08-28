import { React, useCallback, useState } from "react";
import StyledHeader from "./styled";
import flipkartPlusLogo from "../../logos/flipkart-plus.png";
import SearchInput from "../search-input/search-input";
import { ReactComponent as BottomArrow } from "../../logos/bottom-arrow-svgrepo-com.svg";
import { ReactComponent as ShoppingCartIcon } from "../../logos/shopping-cart-outline-svgrepo-com.svg";
import Dropdown from "../dropdown/dropdown";
import { loginOptions, moreOptions } from "./dropdown-options";
import Modal from "../modal/modal";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModal] = useState(false);

  const onHandleClick = useCallback(() => {
    setIsLoginModal(true);
  }, [setIsLoginModal]);

  return (
    <>
      <StyledHeader>
        <div className="empty-box"></div>
        <div className="main-container">
          <img src={flipkartPlusLogo} alt="Flipkart Plus" />
          <div className="search-input-container">
            <SearchInput />
          </div>
          <div className="login-container">
            <Dropdown
              options={loginOptions}
              targetElement={
                <button className="login-button" onClick={onHandleClick}>
                  Login
                </button>
              }
            />
            {isLoginModalOpen ? (
              <Modal>
                <div className="login-info">
                  <span>Login</span>
                  <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
                <div className="login-form">
                  <input
                    className="login-input"
                    placeholder="Enter Email/Mobile Number"
                  ></input>
                  <div>
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.
                  </div>
                  <button>Request OTP</button>

                  <span>New to Flipkart? Create an account</span>
                </div>
              </Modal>
            ) : null}
          </div>
          <span className="become-a-seller">Become a Seller</span>
          {/* <Dropdown options={moreOptions}>
            <button>More</button>
            <BottomArrow />
          </Dropdown> */}

          <div className="shopping-cart-container">
            <ShoppingCartIcon />
            <div className="cart">Cart</div>
          </div>
        </div>
        <div className="empty-box"></div>
      </StyledHeader>
    </>
  );
};

export default Header;
