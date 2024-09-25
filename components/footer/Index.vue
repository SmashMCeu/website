<template>
    <div class="w-full bg-backgroundColorLight lg:px-32 px-12 py-10 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:items-center justify-between">
        
        <div>
            <div class="flex gap-3">
                <img class="w-10 hover:animate-spin" src="/img/logo.svg" alt="logo">
                <div>
                    <p class="text-textColorLight font-black text-2xl">SMASHMC.EU</p>
                    <p class="text-textColor/75 leading-3">© 2017 - 2024</p>
                </div>
            </div>
            <p class="max-w-[25rem] mt-4">We are not affiliated with Mojang or Microsoft</p>
            <FooterSocialIcons class="mt-6"/>
        </div>
        
        <div class="flex md:gap-10 gap-4 md:flex-row flex-col *:flex *:flex-col">
            <div>
                <p class="text-textColorLight font-bold text-lg">Nützliche Links</p>
                <FooterLink to="/faq/map_guide">Wie baut man eine Map</FooterLink>
                <FooterLink to="/faq/entertainer_anforderungen">Bewerbung als Entertainer</FooterLink>
                <FooterLink to="/faq/partner_anforderungen">Bewerbung als Partner</FooterLink>
            </div>
            <div>
                <p class="text-textColorLight font-bold text-lg">Rechtliches</p>
                <FooterLink to="/imprint">Impressum & Datenschutz</FooterLink>
                <FooterLink to="mailto:support@smashmc.eu">Kontaktiere uns</FooterLink>
            </div>
        </div>

    </div>
</template>