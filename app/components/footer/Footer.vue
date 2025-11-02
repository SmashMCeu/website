<template>
    <div class="border-t w-full pt-6 pb-10 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:items-center justify-between">
        <div>
            <div class="flex gap-3">
                <img
                    class="w-10 hover:animate-spin"
                    src="/img/logo.svg"
                    alt="Logo"
                >
                <div>
                    <p class="font-black text-2xl">
                        SMASHMC.EU
                    </p>
                    <p class="text-muted-foreground leading-3">
                        © 2017 - 2025
                    </p>
                </div>
            </div>
            <p class="max-w-[25rem] mt-4 text-muted-foreground">
                We are not affiliated with Mojang, AB or Microsoft.
            </p>
            <FooterSocialIcons class="mt-6" />
        </div>

        <div class="flex md:gap-10 gap-4 md:flex-row flex-col *:flex *:flex-col">
            <div>
                <p class="font-bold text-lg">
                    Useful Links
                </p>
                <FooterLink to="/faq/map_guide">
                    Link ABC
                </FooterLink>
                <FooterLink to="/faq/entertainer_anforderungen">
                    Other amazing link
                </FooterLink>
                <FooterLink to="/faq/partner_anforderungen">
                    What is this?
                </FooterLink>
                <FooterLink to="/teamspeak">
                    Link 12345
                </FooterLink>
            </div>
            <div>
                <p class="text-textColorLight font-bold text-lg">
                    Legal
                </p>
                <FooterLink to="/imprint">
                    Imprint
                </FooterLink>
                <FooterLink to="mailto:support@smashmc.eu">
                    Contact Us
                </FooterLink>
            </div>
        </div>
    </div>
</template>
