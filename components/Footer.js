'use client'
import Link from "next/link";
import Image from "next/image";
import { footerMenuList } from "../data/footer-data";

const footer = () => {
    return (
        <footer className="bg-primary">
            <div className="container">
                <div className="grid gap-x-4 gap-y-12 pt-24 pb-24 grid-cols-12">

                    <div className=" col-span-12 lg:col-span-3">
                        {/* <!-- Logo --> */}
                        <Link href="#" className="">
                            <Image
                                src="./logo-brite.svg"
                                className="grayscale brightness-[10] mb-5"
                                alt="BRITE Informática"
                                height={30}
                                width={120}
                            />
                        </Link>

                        <div className="social-media">

                        </div>

                        <Link href="#" className="mb-6">
                            {/* <img
                    src="/images/LogoCirsys.svg"
                    className="max-h-7 dark:block block mb-6"
                    alt="CIRSYS Tech"
                  /> */}
                        </Link>
                        <p className="text-secondary text-md mb-12 ">Há mais de 30 anos simplificando o aluguel de computadores. ©{new Date().getFullYear()}  Brite.</p>
                    </div>

                    <div className="w-full hidden">
                    </div>

                    {footerMenuList.map((single) => (
                        <div
                            className={`${single.diffClass} col-span-6 lg:col-span-2`}
                            key={single.id}
                        >
                            <h4 className="text-secondary text-md mb-6">
                                {single.title}
                            </h4>
                            <ul className="text-white text-md flex flex-col ">
                                {single.list.map((item) => {
                                    const { id, href, text } = item;
                                    return (
                                        <li key={id} className="my-2 hover:text-brite">
                                            <Link href={href}>
                                                {text}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>


            {/* <!-- HOKUP footer --> */}
            {/* <a href="https://hokup.com.br" target="_blank" rel="noopener noreferrer" className="dark:bg-accent bg-accent flex flex-row items-center h-10 w-screen group hover:dark:bg-white ease-out duration-200">
          <div className="container flex items-center ">
            <svg className="fill-bg-black h-4 w-4 dark:group-hover:fill-jacarta-1400 group-hover:fill-jacarta-1400 ease-out duration-200">
              <use xlinkHref={`/icons.svg#icon-hokup`}></use>
            </svg>
            <p className="pl-2 dark:text-black text-black text-sm font-semibold">hokup</p>
          </div>
        </a> */}
        </footer>
    );
};

export default footer;
