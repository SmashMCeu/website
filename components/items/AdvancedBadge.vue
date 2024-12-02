<template>
    <TooltipProvider>
        <TooltipRoot :delay-duration="500">
            <TooltipTrigger>
                <span class="bg-cyan-600 rounded text-sm font-semibold px-3 flex items-center pb-1 pt-[2px]">Erweitertes Item</span>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="start">
                <p class="bg-backgroundColorLight brightness-200 rounded-lg px-2 py-1 text-sm text-textColor font-normal">Erweiterte Items können von Pro-Spielern für eine Runde aktiviert werden.</p>
            </TooltipContent>
        </TooltipRoot>
    </TooltipProvider>
</template>