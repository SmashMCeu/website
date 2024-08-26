<template>
    <div>
        <NuxtRouteAnnouncer />
        <Navbar />
        <NuxtLayout>
            <NuxtPage class="min-h-screen"/>
        </NuxtLayout>
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
