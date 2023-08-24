<template>
    <div class="container pt-[4.5rem] flex flex-col md:flex-row mx-auto lg:w-4/5 lg:pt-18">        
        <div class="w-full relative">
            <img src="../assets/images/Info2.svg" class="lg:w-[31rem] pr-5 md:pr-0 md:w-[50rem]"/>
            <img src="../assets/images/Calender.svg" class="absolute top-0 right-0 mt-5 md:mr-5 lg:mr-36 mr-9 w-44 w- md:w-48 w- lg:w-[14.5rem]"/>
        </div>
        <div class="flex justify-end items-center pt-12 md:pt-0">            
            <div class="w-full pb-16 md:w-[25rem] lg:w-full lg:pb-0 flex flex-col px-6 lg:px-0">
                <h1 class="h1-mobile items-center md:h1  text-darkblue">
                    Chats for your distributed teams
                </h1>
                <p class="text-base text-darkblue mt-6 lg:w-[25rem]">
                    Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
                </p>
                <a class="link mt-[3.1rem] md:mt-7 lg:mt-[3.1rem] text-softblue">
                    Learn more
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Info2"   
}
</script>