import {Link} from 'react-router-dom';
import {Input} from "antd";

const {Search} = Input;
export const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center w-full'>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full gap-x-10 px-20">
                    <div className="flex items-center gap-x-2 text-white mr-6">
                        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                        </svg>
                        <span className="font-semibold text-xl tracking-tight">health body</span>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow flex gap-x-5">
                            <Link
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                to="/"
                            >
                                تکمیل فرم
                            </Link>
                            <Link
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                to="/news"
                            >
                                اخبار
                            </Link>
                            <Link
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                to="/webinars"
                            >
                                وبینار ها
                            </Link>
                            <Link
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                to="/work-shops"
                            >
                                ورک شاپ ها
                            </Link>
                            <Link
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                to="/relationship"
                            >
                                ارتباط با پزشک
                            </Link>
                            <Link
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                to="/more-information"
                            >
                                اطلاعات بیشتر
                            </Link>
                            <Link
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                to="/about-us"
                            >
                                درباره ما
                            </Link>
                            <Link
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                to="/contact-us"
                            >
                                تماس با ما
                            </Link>
                        </div>
                        <div>
                            <Search
                                placeholder="بگرد و پیدا کن..."
                                allowClear
                                enterButton="Search"
                                size="large"
                            />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};
export default Header