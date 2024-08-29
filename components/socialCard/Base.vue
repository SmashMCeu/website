<template>
    <div class="w-fit px-2 py-2 pr-6 rounded-lg flex gap-2 bg-backgroundColorLight">
        <div class="w-14 h-14 center-content">
            <slot name="icon"/>
        </div>
        <div class="mt-1">
            <slot name="content"/>
        </div>
    </div>
</template>