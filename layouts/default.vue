<template>
    <div>
        <the-header/>
        <nuxt/>
        <the-footer/>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
    components: {
        'the-header': Header,
        'the-footer': Footer
    }
}
</script>