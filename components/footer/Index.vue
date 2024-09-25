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
                <p class="text-textColorLight font-bold text-lg">{{ $t('useful_links_title') }}</p>
                <FooterLink to="/faq/map_guide">{{ $t('useful_links_map_guide') }}</FooterLink>
                <FooterLink to="/faq/entertainer_anforderungen">{{ $t('useful_links_entertainer') }}</FooterLink>
                <FooterLink to="/faq/partner_anforderungen">{{ $t('useful_links_partner') }}</FooterLink>
            </div>
            <div>
                <p class="text-textColorLight font-bold text-lg">{{ $t('legal_title') }}</p>
                <FooterLink to="/imprint">{{ $t('legal_imprint_privacy') }}</FooterLink>
                <FooterLink to="mailto:support@smashmc.eu">{{ $t('legal_contact_us') }}</FooterLink>
            </div>
        </div>

    </div>
</template>