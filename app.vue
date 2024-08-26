<template>
    <div>
        <NuxtRouteAnnouncer />
        <Navbar />
        <NuxtPage />
        <Footer />
    </div>
</template>
<style>

    /* Fix IOS zoom on click bug */
    :root { 
        touch-action: pan-x pan-y;
    }
    
</style>
