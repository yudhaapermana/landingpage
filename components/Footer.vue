<template>
    <footer class="bg-darkblue mt-28">    
        <div class="container mx-auto px-6 py-12 lg:pb-6 lg:w-4/5">
            <div class="w-full flex flex-col md:flex-row flex-wrap">
                <div class="flex-1 lg:-ml-5 order-first md:basis-full lg:basis-0">
                    <p class="logo text-5xl lg:text-[3.125rem] text-offwhite tracking-[-0.0625rem]">team<span class="text-[3.25rem] text-softblue tracking-[-0.065rem]">.</span></p>
                    <p class="caption text-offwhite">Collaboration platform for mordern team </p>
                </div>
                <div class="flex-1 lg:mt-4 lg:ml-20 mt-12">
                    <h3 class="text-softblue">Company</h3>
                    <ul class="text-offwhite mt-3">
                        <li class="mb-1">
                            <a class="caption">
                                Product             
                            </a>
                        </li>
                        <li class="mb-1">
                            <a class="caption">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a class="caption">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex-1 lg:mt-4 mt-12">
                    <h3 class="text-softblue">Features</h3>
                    <ul class="text-offwhite mt-3">
                        <li class="mb-1">
                            <a class="caption">
                                Screen Sharing
                            </a>
                        </li>
                        <li class="mb-1">
                            <a class="caption">
                                IOS & Android Apps
                            </a>
                        </li>
                        <li class="mb-1">
                            <a class="caption">
                                File Sharing
                            </a>
                        </li>
                        <li class="mb-1">
                            <a class="caption">
                                User Managament
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex-1 lg:mt-4 lg:ml-6 lg:mr-8 mt-12">
                    <h3 class="text-softblue">Contact Us</h3>
                    <ul class="text-offwhite mt-3">
                        <li class="mb-1">
                            <p class="caption">
                                info@temapp.com
                            </p>                            
                        </li>
                        <li class="mb-1">
                            <p class="caption">
                                1-800-200-300
                            </p>                            
                        </li>
                        <li class="mb-1">
                            <p class="caption">
                                1010 Sunset Blv.
                                Palo Alto, California
                            </p>                            
                        </li>                        
                    </ul>
                </div>
                <div class="flex-1 lg:mt-4 -order-2 md:order-none mt-12 md:basis-full lg:basis-0">
                    <div class="">
                        <h3 class="text-softblue">Stay up to date</h3>
                        <div class="text-offwhite mt-3">
                            <p class="caption">
                                Subscribe to our newseller
                            </p>
                            <input class="font-deca w-full md:w-1/2 mt-1 px-5 py-[0.6875rem] rounded-[0.25rem] bg-offwhite bg-opacity-25  md:h-[3rem] lg:w-[17rem]" placeholder="Email"/>            
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-[6rem] lg:-ml-5 lg:-pb-24">
                <p class="caption text-offwhite">© Copyright Team Inc.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'

}
</script>