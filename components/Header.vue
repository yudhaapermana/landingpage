<template>
    <nav :class="headerClassList" class="w-full font-deca absolute z-50 top-0">
    <div
      class="mx-auto py-7 px-6 container flex flex-wrap items-center justify-between lg:w-4/5 lg:py-8 lg:px-0"
    >
        <div class="flex items-center">
            <p class="logo text-5xl lg:text-[3.125rem] text-offwhite tracking-[-0.0625rem]">team<span class="text-[3.25rem] text-softblue tracking-[-0.065rem]">.</span></p>
        </div>
        <div class="block lg:hidden">
            <button
            class="flex items-center p-1 hover:text-gray-900"
            @click.prevent.stop="onToggleClick"
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18Z" fill="#F5F5F5"/>
                </svg>
            </button>
        </div>

        <div
            :class="navContentClassList"            
            class="w-full text-offwhite mt-8 flex flex-col
                lg:flex 
                lg:flex-row
                lg:items-center 
                lg:w-auto 
                lg:mt-0 
                lg:gap-14"
        >
            <ul class="list-reset flex flex-col justify-end gap-[0.4rem] 
                lg:flex
                lg:flex-row 
                lg:gap-14">
                <li>
                    <a
                        class="link"
                        href="#"
                    >
                        Product
                    </a>
                </li>
                <li>
                    <a
                        class="link"
                        href="#"
                    >
                        Blog
                    </a>
                </li>
                <li>
                    <a
                        class="link"
                        href="#"
                    >
                        Support
                    </a>
                </li>
                <li>
                    <a
                        class="link"
                        href="#"
                    >
                        Log In
                    </a>
                </li>
            </ul>
            <a                
                class="mt-3 px-11 py-[0.63rem] text-center rounded bg-softblue bg-opacity-50"
            >   
                <p class="text-offwhite">Get Access</p>                
            </a>        
        </div>
    </div>    
  </nav>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {      
        isOpen: false
        }
    },
    computed: {
        headerClassList() {
            let classList
            if (!this.isOpen) {
                classList += ` bg-transparent`
            } else if (this.isOpen) {
                classList += ` bg-darkblue bg-opacity-90`
            }
            return classList
        },
        navContentClassList() {
            let classList
            if (!this.isOpen) {
                classList += ` hidden`
            }
            return classList
        }        
    },
    methods: {
    onClick() {
      this.isOpen = false      
    },    
    onToggleClick() {
      this.isOpen = !this.isOpen
    }
  },

}
</script>