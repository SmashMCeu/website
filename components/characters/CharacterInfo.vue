<template>
    <DialogRoot>
        <DialogTrigger>
            <slot />
        </DialogTrigger>
        <DialogPortal>
            <DialogOverlay class="data-[state=open]:animate-dialogOverlayShow bg-black/50 fixed inset-0 z-30" />
            <DialogContent class="data-[state=open]:animate-dialogContentShow
                                    rounded-lg bg-backgroundColorLight fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]
                                    flex flex-col gap-6 max-h-[85vh] w-[90vw] max-w-[40rem] pl-8 pr-4 pt-4 pb-20">

                <div class="flex items-center justify-between">
                    <p class="text-textColorLight font-semibold text-xl flex gap-2">
                        {{ character.name }}
                        
                            <span v-if="character.isPro" class="text-proCharacter text-sm border-2 border-proCharacter rounded-lg px-[8px] pt-[2px] pb-[3px] mt-[1px]">PRO</span>
                            <span v-if="character.isBetaCharacter" class="text-primary text-sm border-2 border-primary rounded-lg px-[8px] pt-[2px] pb-[3px] mt-[1px]">BETA</span>
                        
                    </p>
                    <DialogClose aria-label="Close">
                        <Icon name="solar:close-square-outline" class="hover:text-primary transition-colors size-10" />
                    </DialogClose>
                </div>
                <div class="flex sm:flex-row flex-col sm:justify-between sm:pr-20 relative">
                    <div class="text-textColorLight flex flex-col gap-2">
                        <div>
                            <p>Difficulty:</p>
                            <div>
                                <Icon v-for="n in 3" :name="n <= ['easy', 'medium', 'hard'].indexOf(character.difficulty) + 1 ? 'solar:star-bold' : 'solar:star-outline'" class="size-5" :class="character.difficulty == 'easy' ? 'text-green-400' : (character.difficulty == 'medium' ? 'text-yellow-300' : 'text-red-500')"/>
                            </div>
                        </div>
                        <div>
                            <p>Cooldown:</p>
                            <div class="flex gap-2 items-center">
                                <Icon name="solar:alarm-outline" class="w-5 h-5 mt-[3px] text-primary" />
                                <p class="text-primary">{{ character.cooldown != '' ? character.cooldown : '/' }}</p>
                            </div>
                        </div>
                        <div>
                            <p>Description:</p>
                            <p class="text-textColor">{{ character.description }}</p>
                        </div>
                    </div>
                    <div>
                        <UtilSkinRenderer class="sm:block hidden scale-75 !m-0 !h-[0rem]" spin :is-slim="character.isSlimSkin" :skin-image="useSmashCharacters().getCharacterSkinUrl(character)" />
                    </div>
                    
                </div>
            
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
<script lang="ts" setup>
    
    defineProps<{
        character: SmashCharacter
    }>();

</script>