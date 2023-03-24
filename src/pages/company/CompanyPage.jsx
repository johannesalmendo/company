import React from "react";
import sagarateam from "../../images/sagarateam.png";
import trophy from "../../images/trophy.png";
import "./style.css";

const CompanyPage = () => {
  return (
    <div>
      <header>
        <div className="box-header">
          <span className="text-header_1">Go Big With</span>
          <br />
          <span className="text-header_2">Sagara</span>
        </div>
      </header>
      <main>
        <div className="box-main">
          <div className="box-about-sagara-bank">
            <div className="box-about-sagara-bank_left-content">
              <img src={sagarateam} alt="sagara team circle" />
            </div>
            <div className="box-about-sagara-bank_right-content">
              <span className="box-about-sagara-bank_right-content_header_1">
                About Sagara
              </span>
              <br />
              <span className="box-about-sagara-bank_right-content_header_2">
                Bank
              </span>
              <hr className="costume-line" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="box-why-sagara-bank">
            <div className="box-why-sagara-bank_left-content">
              <span className="box-why-sagara-bank_left-content_header_1">
                Why Sagara
              </span>
              <br />
              <span className="box-why-sagara-bank_left-content_header_2">
                Bank ?
              </span>
              <hr className="costume-line" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="box-why-sagara-bank_right-content">
              <div className="box-why-sagara-bank_right-content_trophy">
                <div>
                  <img src={trophy} alt="sagara trophy" width={100} />
                  <p>lorem ipsum</p>
                </div>
                <div>
                  <img src={trophy} alt="sagara trophy" width={100} />
                  <p>lorem ipsum</p>
                </div>
                <div>
                  <img src={trophy} alt="sagara trophy" width={100} />
                  <p>lorem ipsum</p>
                </div>
                <div>
                  <img src={trophy} alt="sagara trophy" width={100} />
                  <p>lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-about-sagara-tech">
            <div className="box-why-sagara-bank_left-content">
              <span className="box-about-sagara-tech_left-content_header_1">
                About Sagara
              </span>
              <br />
              <span className="box-about-sagara-tech_left-content_header_2">
                Technology
              </span>
              <hr className="costume-line" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum..
              </p>
            </div>
            <div className="box-about-sagara-tech_right-content">
              <img src={sagarateam} alt="sagara team square" />
            </div>
          </div>
          <div className="box-number">
            <span>50+</span>
            <span>100+</span>
            <span>200+</span>
          </div>
          <div>
            <div className="border-t-2 border-red-600 py-2">
              <div className="flex">
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-5 w-5 bg-red-600 rounded-full absolute top-0 -mt-5"></div>
                    <span className="text-years1">2014</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full absolute top-0 -mt-4"></div>
                    <span className="text-years2">2015</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full absolute top-0 -mt-4"></div>
                    <span className="text-years2">2016</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full absolute top-0 -mt-4"></div>
                    <span className="text-years2">2017</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full absolute top-0 -mt-4"></div>
                    <span className="text-years2">2018</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full absolute top-0 -mt-4"></div>
                    <span className="text-years2">2019</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full absolute top-0 -mt-4"></div>
                    <span className="text-years2">2020</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full absolute top-0 -mt-4"></div>
                    <span className="text-years2">2021</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-4 w-4 bg-red-600 rounded-full absolute top-0 -mt-4"></div>
                    <span className="text-years2">2022</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative flex justify-center">
                    <div className="h-5 w-5 bg-red-600 rounded-full absolute top-0 -mt-5"></div>
                    <span className="text-years1">2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyPage;
