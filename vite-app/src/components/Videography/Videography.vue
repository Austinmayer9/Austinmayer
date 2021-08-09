<style>
@import './Videography.css';
</style>

<template>
    <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"
            rel="stylesheet"
        />
    </head>

    <body>
        <div class="font-cairo text-black">
            <!--Content wrapper-->
            <div class="">
                <div class="flex flex-col body h-screen">
                    <div class="">
                        <nav class="z-10 relative" id="group1">
                            <div class="flex h-full">
                                <div class="name">
                                    <div>
                                        <h1
                                            class="
                                                text-4xl
                                                mr-10
                                                pt-2
                                                transition
                                                ease-out
                                                duration-500
                                                name1
                                            "
                                        >
                                            Above
                                        </h1>
                                    </div>

                                    <div class=" inline-flex text-green-500">
                                        <h1
                                            class="
                                                text-4xl
                                                ml-10
                                                transition
                                                ease-out
                                                duration-500
                                                name2
                                            "
                                        >
                                            Photography
                                        </h1>
                                    </div>
                                </div>

                                <div class="self-center hidden sm:block">
                                    <a
                                        href="https://austinmayer9.github.io/videography"
                                        class="
                                            btn
                                            text-black
                                            hover:text-green-500
                                            transition
                                            ease-out
                                            duration-500
                                        "
                                        ></a
                                    >
                                </div>

                                <div class="group self-center hidden sm:block ml-auto mr-auto outline-none md:mr-10">
                                    <a
                                        href="#"
                                        class="
                                            contact_btn
                                            transition
                                            ease-out
                                            duration-500
                                            
                                        "
                                        >Contact</a
                                    >

                                    <div class="absolute contact_menu hover:text-green-500">
                                        <ul class="">
                                            <li class="flex-inline"><a href="mailto:austinmayer9@gmail.com">Gmail</a><svg
                                            width="30"
                                            height="30"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="inline-flex"
                                        >
                                            <path
                                                d="M20 6L12.5 10.5L5 6M19 16H6C4.89543 16 4 15.1046 4 14V7C4 5.89543 4.89543 5 6 5H19C20.1046 5 21 5.89543 21 7V14C21 15.1046 20.1046 16 19 16Z"
                                                stroke="black"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            /></svg
                                    ></li>
                                        </ul>
                                    </div>
                                    
                                </div>

                                

                                <!-- <div class="menu btn outline-none hidden">
                                    <a href="#" class="menu_text">Menu</a>

                                    <ul class="menu_items gap-5">
                                        <li>
                                            <a
                                                href="https://austinmayer9.github.io/videography"
                                                class="hover:text-green-500"
                                                ></a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="mailto:austinmayer9@gmail.com"
                                                class="hover:text-green-500"
                                                >Contact</a
                                            >
                                        </li>
                                    </ul>
                                </div> -->
                            </div>
                        </nav>
                    </div>

                    <g id="bible" 
                        class="
                            z-5
                            absolute
                            flex
                            text-3xl
                            font-cairo
                            text-white
                            items-center
                            justify-center
                            text-center
                            h-full
                            w-full
                            pl-10
                            pr-10
                            
                        "
                        
                    >
                        <g class="bible1" id="bible1">
"Set your mind on things that are above... Not on things
                        that are on Earth." 
                        <g class="bible2 ml-2" id="bible2">
                            Colossians 3:2
                        </g>
                        </g>
                        
                        
                    </g>

                    <!-- Scroll arrow -->

                    <div
                        class="
                            absolute
                            flex
                            items-center
                            justify-center
                            w-full
                            h-auto
                            bottom-12
                        "
                    >
                        <div class="text-white"></div>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 21V3M19 14L12 21L19 14ZM12 21L5 14L12 21Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                <!--About me-->
                <div class="relative bg-white text-black">
                    <!-- Me section -->
                    <div class="">
                        <h1 class="text-3xl ml-5"></h1>

                        <div class="flex">
                            <div class="">
                                <img
                                    :src="pfp1"
                                    alt="Me"
                                    class="p-5 w-64 h-128 rounded overflow-hidden"
                                />
                            </div>
                            <p
                                class="
                                    lg:text-xl
                                    lg:p-10
                                    md:text-lg
                                    md:p-8
                                    sm:p-4
                                    justify-center
                                    self-center
                                    text-center
                                    w-full
                                    mr-5
                                    bg-green-500
                                    rounded
                                    text-white
                                    hover:shadow-2xl
                                    transform
                                    hover:translate-x-1
                                    hover:-translate-y-1
                                    transition
                                    duration-500
                                    ease-out
                                "
                            >
                               <div class="p-2">
                                My name is Austin Mayer. I am the founder of Above Photography, and offer drone services for many applications. Above Photography is located in Sandpoint Idaho, and can service within reasonable distance. Any inquiries about services and pricing can be done through Gmail. My prices are very competitive, and I guarantee satisfaction for my services.
                               </div>
                                
                            </p>
                        </div>
                    </div>

                    <!-- Cards go here -->

                    <div class="m-4 text-3xl text-center
                                    transform
                                    hover:translate-x-1
                                    hover:-translate-y-1
                                    transition
                                    duration-500
                                    ease-out">Services</div>

                    <div
                        class="
                            mt-5
                            grid
                            lg:grid-rows-1 lg:grid-cols-3
                            gap-10
                            lg:gap-0
                            lg:pl-10
                            lg:pr-10
                            sm:pl-7
                            sm:pr-7
                        "
                    >
                        <div class="card group" id="1">
                            <img
                                :src="realEstate"
                                alt="Real Estate"
                                class="
                                    w-full
                                    h-32
                                    sm:h-60
                                    object-cover object-bottom
                                "
                            />
                            <div class="p-3 text-black bg-white 
                                    transform
                                    group-hover:-translate-y-20
                                    transition
                                    duration-500
                                    ease-out">
                                <span class="font-bold ml-5"
                                    >Real Estate</span
                                >
                                <span class="block text-gray-500 text-sm pl-5"
                                    >All inclusive photo and video</span
                                >
                                <div class="">
                                    <div class="card_text">
                                        Shorten your listing times with aerial presentations of your property, and professional editing to sweeten the eye candy.
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                        <div class="card group" id="3">
                            <img
                                :src="Construction"
                                alt="Construction"
                                class="
                                    w-full
                                    h-32
                                    sm:h-60
                                    object-cover object-center
                                "
                            />
                            <div class="p-3 text-black bg-white 
                                    transform
                                    group-hover:-translate-y-20
                                    transition
                                    duration-500
                                    ease-out">
                                <span class="font-bold ml-5"
                                    >Construction</span
                                >
                                <span class="block text-gray-500 text-sm pl-5"
                                    >From a bird's eye view</span
                                >

                                <div class="card_text">
                                    Plan out your construction with high definition, on-demand image aquisition to meet your company's deadlines.
                                </div>
                            </div>
                        </div>

                        <div class="card group" id="2">
                            <img
                                :src="powerLines"
                                alt="Power Lines"
                                class="
                                    w-full
                                    h-32
                                    sm:h-60
                                    object-cover object-bottom
                                "
                            />
                            <div class="p-3 text-black bg-white 
                                    transform
                                    group-hover:-translate-y-20
                                    transition
                                    duration-500
                                    ease-out">
                                <span class="font-bold ml-5"
                                    >Power Lines</span
                                >
                                <span class="block text-gray-500 text-sm pl-5"
                                    >Aerial Inspections</span
                                >
                                <div class="card_text">
                                    Save money and time with high definition inspections operated by a certified drone pilot.
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- End of Cards -->

                    <div class="mt-2 text-center">
                        <footer class="">
                            <div class="mb-2 mt-3 text-xl">Follow:</div>

                            <!--Handles-->
                            <div
                                class="
                                    flex
                                    justify-center
                                    self-center
                                     gap-5
                                    border-t-2 border-black
                                    pt-2
                                    pb-1
                                "
                            >
                                
                                

                                <div>
                                    <a
                                        class="a"
                                        href="https://www.instagram.com/abovevideography/"
                                        ><div class="hidden sm:inline-block transform transition duration-500 hover:text-green-500 hover:scale-110">Instagram
                                            </div>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="inline-block ml-1"
                                        >
                                            <g clip-path="url(#clip0)">
                                                <path
                                                    d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163V2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0V0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                                                    fill="black"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect
                                                        width="24"
                                                        height="24"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>

                                

                                <div class="a pr-1">
                                    <a href="mailto:austinmayer9@gmail.com"
                                        ><div class="hidden sm:inline-block transform transition duration-500 hover:text-green-500 hover:scale-110">Gmail
                                            </div>
                                        <svg
                                            width="30"
                                            height="30"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="inline-block mt-0.5"
                                        >
                                            <path
                                                d="M20 6L12.5 10.5L5 6M19 16H6C4.89543 16 4 15.1046 4 14V7C4 5.89543 4.89543 5 6 5H19C20.1046 5 21 5.89543 21 7V14C21 15.1046 20.1046 16 19 16Z"
                                                stroke="black"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            /></svg
                                    ></a>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>
import pfp1 from '../../assets/pfp1.jpg'
import powerLines from '../../assets/Power Lines.jpg'
import realEstate from '../../assets/Real Estate.jpg'
import Construction from '../../assets/Construction.jpg'
</script>
