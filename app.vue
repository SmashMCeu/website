<template>
    <div>
        <NuxtRouteAnnouncer />
        <Navbar />
        <NuxtPage class="min-h-screen"/>
        <Footer />
    </div>
</template>
<style>

    /* Fix IOS zoom on click bug */
    :root { 
        touch-action: pan-x pan-y;
        overflow-x: hidden;
    }
    
</style>
