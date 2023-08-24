<template>
    <div>        
        <hero/>
        <info1/>
        <info2/>
        <info3/>
        <info4/>
    </div>
</template>

<script>
import Hero from "@/components/Hero";
import Info1 from "@/components/Info1"
import Info2 from "@/components/Info2"
import Info3 from "@/components/Info3"
import Info4 from "@/components/Info4"

export default {
  name: 'LandingPage',
  components: {
    hero: Hero,
    info1: Info1,
    info2: Info2,
    info3: Info3,
    info4: Info4
  }
}
</script>