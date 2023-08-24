<template>
    <div class="w-full pt-16 overflow-x-hidden">
        <div class="lg:pl-28 mx-auto w-full flex flex-col-reverse lg:flex-row gap-8">
            <div class="flex flex-col justify-center w-full px-6 pb-12 md:pl-10 lg:pl-5 lg:pb-0">
                <h1 class="h1-mobile items-center md:h1 md:w-11/12 lg:w-[28rem] text-darkblue">
                    Chats for your distributed teams
                </h1>
                <p class="text-base text-darkblue mt-6 lg:w-[25rem]">
                    Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
                </p>
                <a class="link mt-[3.1rem] text-softblue">
                    Learn more
                </a>
            </div>
            <div>                
                <info-image class="w-[46rem] mx-auto"/>
            </div>
        </div>    
    </div>
</template>
<script>
import InfoImage1 from "../elements/images/InfoImage1";

export default {
    name:"Info1",
    components: {
        'info-image': InfoImage1
    }
}
</script>