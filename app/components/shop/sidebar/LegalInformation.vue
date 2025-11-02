<template>
    <UiDialog>
        <UiDialogTrigger as-child>
            <UiButton variant="link">
                Legal Information
            </UiButton>
        </UiDialogTrigger>

        <!-- TODO: describedby NOT WORING?! Still get warning -->
        <UiDialogContent
            aria-describedby="SmashMC Shop Legal Information"
            class="grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]"
        >
            <UiDialogHeader class="p-6 pb-0">
                <UiDialogTitle>
                    SmashMC Shop Legal Information
                </UiDialogTitle>
            </UiDialogHeader>
            <div class="px-12 py-8 space-y-8">
                <section>
                    <h2 class="text-lg font-semibold">
                        Please Note:
                    </h2>
                    <p>
                        All payments are processed and received via Buycraft. You will receive what you paid for when the payment comes through. This can take up to 10-15 minutes, if your rank still does not show in the game after 10-15 minutes, please contact us on Discord or via mail at support@smashmc.eu. Please do not contact Mojang about concerns on payments, they have nothing to do with the payments to SmashMC.
                    </p>
                </section>
                <section>
                    <h2 class="text-lg font-semibold">
                        Terms of Service:
                    </h2>
                    <p>
                        Since the items and ranks you receive when purchasing are Digital Intangible Items, there is a strict no refund policy. Since you can not replace the time it took to assign you your rank, and/or give back the items you received no refunds will be granted. This accounts even if you were banned, or muted.
                    </p>
                    <br>
                    <p>
                        <b>
                            Executing a chargeback/dispute will get your account banned from our server automatically.
                        </b>
                    </p>
                </section>
            </div>
        </UiDialogContent>
    </UiDialog>
</template>
