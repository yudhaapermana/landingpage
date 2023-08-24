<template>
    <div class="bg-hero-image bg-cover md:bg-[center_0rem] bg-[center_right_-14rem] bg-no-repeat lg:h-screen">        
        <div class="container px-6 mx-auto pt-[16.5rem] pb-[5.5rem] md:pt-48 lg:w-1/2 lg:mx-0 lg:pl-[8.4rem] lg:pt-60">
            <h1 class="h1-mobile md:h1 md:w-3/4 lg:w-full text-offwhite">
                Instant collaboration for remote teams
            </h1>
            <p class="text-base text-offwhite mt-3 md:w-2/4 lg:w-[22rem]">
                All-in-one place for your remote team to chat, collaborate and track project progress.
            </p>
            <div class="mt-14 lg:mt-12">
                <form class="font-deca font-normal md:flex md:flex-row md:gap-3">
                    <input class="w-full px-5 py-[0.6875rem] rounded-[0.25rem] bg-offwhite border-grayishblue md:h-[3rem] lg:w-[20rem]" placeholder="Email"/>
                    <button class="tracking-[0.00875rem] text-[1.125rem] w-full text-center py-[0.625rem] mt-3 text-offwhite rounded-[0.25rem] bg-softblue lg:w-[14rem] lg:h-[3rem] md:my-auto"
                    >
                        Get Early Access
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>