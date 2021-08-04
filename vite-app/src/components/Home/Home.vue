<style>
.card_text {
    display: none;
}

.card:hover .card_text {

    display: block;
}


.menu_items {
    display: none;
}

.menu:hover .menu_items {
   transition: 200ms ease;
    display: flex;
}

.menu:hover .menu_items {
 transform: scale(1);
}

.menu:hover {
 transform: scale(1);
}


.menu:hover .menu_text {
    display: none;
}
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
                        <nav class="z-10 relative">
                            <div class="flex h-full">
                                <div class="name">
                                    <div>
                                        <h1 class="text-4xl mr-10 pt-2">
                                            Austin
                                        </h1>
                                    </div>

                                    <div class="">
                                        <h1 class="text-4xl ml-10 text-green-500">Mayer</h1>
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
                                        >Videography</a
                                    >
                                </div>

                                <div class="self-center mr-10 hidden sm:block">
                                    <a
                                        href="#"
                                        class="
                                            btn
                                            self-center
                                            text-black
                                            border-black border-2
                                            hover:bg-black
                                            hover:text-white
                                            transition
                                            ease-out
                                            duration-500
                                        "
                                        >Contact</a
                                    >
                                </div>

                                <div class="menu btn">
                                    <a href="#" class="menu_text">Menu</a>
                                    
                                    <ul class="menu_items gap-5">
                                        <li>
                                            <a href="https://austinmayer9.github.io/videography" class="hover:text-green-500"
                                                >Videography</a
                                            >
                                        </li>
                                        <li>
                                            <a href="#" class="hover:text-green-500">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div
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
                        "Set your mind on things that are above... Not on things
                        that are on Earth." Colossians 3:2
                    </div>

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
                            <div>
                                <img
                                    :src="pfp1"
                                    alt="Me"
                                    class="p-5 w-64 h-128"
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
                                "
                            >
                                If you couldn't tell already, my name is Austin
                                Mayer. I love coding, programming, and anything
                                that involves numbers. I built this site from
                                scratch to give a sneak peek of my front-end
                                capabilities.
                            </p>
                        </div>
                    </div>

                    <!-- Cards go here -->

                    <div class="m-4 text-3xl text-center">Hobbies</div>

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
                        <div class="card ml-5 mr-5 hover:shadow-xl" id="1">
                            <img
                                :src="cityBeach"
                                alt="City Beach"
                                class="
                                    w-full
                                    h-32
                                    sm:h-60
                                    object-cover object-bottom
                                "
                            />
                            <div class="m-3 text-black">
                                <span class="font-bold"
                                    ><svg
                                        class="w-5 inline-block mb-2 pr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        ></path></svg
                                    >City Beach</span
                                >
                                <span class="block text-gray-500 text-sm pl-5"
                                    >Sandpoint, Idaho</span
                                >
                                <div class="">
                                    <div class="card_text pt-2 pl-1">
                                        I spend the majority of my time here,
                                        enjoying the heat of the sun, swimming,
                                        and the countless games of volleyball.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card ml-5 mr-5 hover:shadow-xl" id="2">
                            <img
                                :src="schweitzer"
                                alt="Schweitzer Mountain"
                                class="
                                    w-full
                                    h-32
                                    sm:h-60
                                    object-cover object-bottom
                                "
                            />
                            <div class="m-3 text-black">
                                <span class="font-bold"
                                    ><svg
                                        class="w-5 inline-block mb-2 pr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        ></path></svg
                                    >Schweitzer Mountain</span
                                >
                                <span class="block text-gray-500 text-sm pl-5"
                                    >Sandpoint, Idaho</span
                                >
                                <div class="card_text pt-2 pl-1">
                                    I love to ski the 2900 Acres of Schweitzer
                                    Mountain. Not including out of bounds.
                                    (shh...) I've been skiing for about 4 years,
                                    enjoying the rush of black diamonds, and
                                    surfing pow pow.
                                </div>
                            </div>
                        </div>

                        <div class="card ml-5 mr-5 hover:shadow-xl" id="3">
                            <img
                                :src="lizardLake"
                                alt="Lizard Lake"
                                class="
                                    w-full
                                    h-32
                                    sm:h-60
                                    object-cover object-center
                                "
                            />
                            <div class="m-3 text-black">
                                <span class="font-bold"
                                    ><svg
                                        class="w-5 inline-block mb-2 pr-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        ></path></svg
                                    >Lizard Lake</span
                                >
                                <span class="block text-gray-500 text-sm pl-5"
                                    >Bellingham, Washington</span
                                >

                                <div class="card_text pt-2 pl-1">
                                    Born in Blaine Washington, I loved exploring
                                    the Pacific Northwest, whether it was
                                    camping, hiking, and even dirt biking. (I
                                    think thats the term..?)
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- End of Cards -->

                    <div class="mt-2 text-center">
                        <footer class="">
                            <div class="mb-2 mt-3 text-xl">Get in touch:</div>

                            <!--Handles-->
                            <div
                                class="
                                    flex
                                    justify-center
                                    self-center
                                    gap-2
                                    md:gap-5
                                    border-t-2 border-black
                                    pt-2
                                    pb-1
                                "
                            >
                                <div></div>
                                <div>
                                    <a
                                        class=""
                                        href="https://www.linkedin.com/in/austin-mayer-578488215/"
                                        >LinkedIn
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="inline-block ml-1"
                                        >
                                            <path
                                                d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                <div>
                                    <a
                                        class=""
                                        href="https://www.instagram.com/austin__mayer/"
                                        >Instagram
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

                                <div>
                                    <a
                                        class=""
                                        href="https://github.com/Austinmayer9"
                                        >Github
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="inline-block ml-1"
                                        >
                                            <path
                                                d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                <div class="pr-1">
                                    <a href="mailto:austinmayer9@gmail.com"
                                        >Gmail
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
import cityBeach from '../../assets/City Beach.jpg'
import schweitzer from '../../assets/Schweitzer.jpg'
import lizardLake from '../../assets/Lizard Lake.jpg'
</script>
