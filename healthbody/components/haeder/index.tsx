'use client'
import { HomeOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import Link from 'next/link';
import React from 'react';



const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
 
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 bg-green-100 mb-3 border border-gray-300 rounded-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full text-black font-bold relative flex justify-between px-4 lg:w-auto lg:static lg:block lg:justify-start">
          <div className=''>
          <Link href="/"><HomeOutlined className='py-3 text-green-800 text-[25px]' /></Link>
          </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex gap-x-5 flex-col lg:flex-row list-none lg:ml-auto text-gray-600 font-semibold">
              <li className="nav-item">
              <div>
              <Link href="/fellows">همکاران</Link>
            </div>
              </li>
              <li className="nav-item">
              <div>
              <Link href="/contact-us">تماس با ما</Link>
            </div>
              </li>
              <li className="nav-item">
              <div>
              <Link href="/news">اخبار</Link>
            </div>
              </li>
              <li className="nav-item">
              <div>
              <Link href="/contact-to-doctor">ارتباط با پزشک</Link>
            </div>
              </li>
              <li className="nav-item">
              <div>
              <Link href="/more-information">اطلاعات بیشتر</Link>
            </div>
              </li>
            </ul>
          </div>
          <div className=''>
            <ul className='flex gap-x-2 flex-col lg:flex-row list-none lg:ml-auto text-gray-600 font-semibold '>
              <li>
              <div>
              <Link href="/login">ورود</Link>
            </div>
              </li>
              <div>/</div>
              <li>
              <div>
              <Link href="/register">ثبت نام</Link>
            </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;
