<style>
.card_text {
  display: none;
}
    
.card:hover + .card_text {
  display: block;
  
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
        <div
            class="
               min-h-screen bg-gradient-to-b from-gray-500 to-gray-900
                font-cairo
                text-white
            "
        >
            <div>
                <nav>
                    <div class="text-center text-3xl">
                        <h1 class="mr-10 pt-2">Austin</h1>
                        <h1 class="ml-10">Mayer</h1>
                    </div>
                    <div class="text-center">
                        <header>And a little about me...</header>
                    </div>
                </nav>


<!-- Cards go here -->

                <div class="mt-8 grid lg:grid-cols-3 gap-10">
                    <div class="card ml-5 mr-5 hover:shadow-xl">
                        <img
                            src="src\assets\City Beach.jpg"
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
                             </div>
                    </div>

                    <div class="card ml-5 mr-5 hover:shadow-xl" id="card">
                        <img
                            src="src\assets\Schweitzer.jpg"
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
                            <div class="card_text pt-2" id="text">I love to ski the 2900 Acres of Schweitzer Mountain. Not including out of bounds. (shh...)</div>
                       
                        </div>
                    </div>


                    <div class="card ml-5 mr-5 hover:shadow-xl">
                        <img
                            src="src\assets\Lizard Lake.jpg"
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
                        </div>
                    </div>
                </div>

<!-- End of Cards -->



            </div>
        </div>
    </body>
</template>

<script setup>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "\components\Home\Home.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>
