import React, { PropsWithChildren } from "react";
import Notification from "./Notification";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface Props extends PropsWithChildren {}

const LayoutNoHead: React.FC<Props> = ({ children }) => {
  return (
    <Notification>
      <header>
        <div className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 bg-white pb-4 lg:w-full lg:max-w-2xl">
              <Navigation />
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>

      <Footer />
    </Notification>
  );
};

export default LayoutNoHead;
