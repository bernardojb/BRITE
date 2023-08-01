// 'use client'
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
                        <Link href="/" className="">
                            <Image
                                src="./logo-brite.svg"
                                className="grayscale brightness-[10] mb-5"
                                alt="BRITE Informática"
                                height={30}
                                width={120}
                            />
                        </Link>
                        <Link href="#" className="mb-6">
                            {/* <img
                    src="/images/LogoCirsys.svg"
                    className="max-h-7 dark:block block mb-6"
                    alt="CIRSYS Tech"
                  /> */}
                        </Link>
                        <p className="text-secondary text-xs mb-2 max-w-[260px] ">Há mais de 30 anos simplificando o aluguel de computadores. ©{new Date().getFullYear()}  Brite.</p>
                        <div className='flex flex-row mb-12'>
                            <a target='_blank' href='https://www.linkedin.com/company/brite-inform%C3%A1tica/' className="mr-4">
                                <Image
                                    src="/assets/icons/linkedin.svg"
                                    alt="Hokup Logo"
                                    width={24}
                                    height={24}
                                    className="hover:brightness-200"
                                />
                            </a>
                            <a target='_blank' href='https://www.instagram.com/brite.informatica/' className="mr-4">
                                <Image
                                    src="/assets/icons/instagram.svg"
                                    alt="Hokup Logo"
                                    width={24}
                                    height={24}
                                    className="hover:brightness-200"
                                />
                            </a>
                            <a target='_blank' href='https://www.facebook.com/profile.php?id=100093501758299' className="mr-4">
                                <Image
                                    src="/assets/icons/facebook.svg"
                                    alt="Hokup Logo"
                                    width={24}
                                    height={24}
                                    className="hover:brightness-200"
                                />
                            </a>
                        </div>
                        <div className="flex flex-row">
                            <Image
                                src="/assets/icons/certified-lenovo-partner-03.svg"
                                alt="Hokup Logo"
                                width={84}
                                height={28}
                                className="mr-2"
                            />
                            <p className="text-[10px] text-secondary max-w-[114px]" >Business Informática LTDA 62.547.484/0001-40</p>

                        </div>

                    </div>

                    <div className="w-full hidden lg:block">
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
                                        <li key={id} className="my-1">
                                            <Link href={href} className="hover:text-brite">
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

            <div className="bg-brite">
                <div className="container flex items-center ">
                    <p className="pr-2 text-white text-xs">a project by.</p>
                    <Image src="/assets/icons/hokup-com-br.svg" width={50} height={10} />
                </div>
            </div>
        </footer>
    );
};

export default footer;
