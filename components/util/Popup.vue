<template>
    <DialogRoot @update:open="open => open && onMenuOpen()">
        <DialogTrigger>
            <slot name="trigger" />
        </DialogTrigger>
        <DialogPortal>
            <DialogOverlay class="data-[state=open]:animate-dialogOverlayShow 
                                data-[state=closed]:animate-dialogOverlayHide
                                bg-black/50 fixed grid items-center inset-0 z-30 overflow-y-auto" />
            <DialogContent
                @pointer-down-outside="(event) => {
                    const originalEvent = event.detail.originalEvent;
                    const target = originalEvent.target as HTMLElement;
                    if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                        event.preventDefault();
                    }
                }"
                class="data-[state=open]:animate-dialogContentShow
                        data-[state=closed]:animate-dialogContentHide
                        rounded-lg bg-backgroundColorLight fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]
                        flex flex-col gap-6 mt-10 h-fit pb-3 max-h-[85vh] w-[90vw] max-w-[45rem]">

                <VisuallyHidden>
                    <DialogTitle>{{ title }}</DialogTitle>
                </VisuallyHidden>
                <div class="flex flex-col gap-4 h-full w-full p-4 pl-8">
                    <div class="flex justify-between">
                        <div class="flex items-center gap-2 text-textColorLight text-xl font-bold">
                            <slot name="title"/>
                        </div>
                        <DialogClose aria-label="Close" class="text-textColor hover:text-primary transition-colors">
                            <Icon size="40" name="solar:close-square-outline"/>
                        </DialogClose>
                    </div>
                    <div class="overflow-y-scroll hide-scrollbar
                                flex-grow flex sm:flex-row sm:flex-nowrap flex-wrap gap-8">
                        <slot name="content"/>
                    </div>
                </div>
            
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
<script lang="ts" setup>

    
    const props = defineProps<{
        title: string;
    }>();

    const emit = defineEmits<{
        (e: "menuOpen"): void
    }>()

    function onMenuOpen() {
        emit("menuOpen")
    }


</script>