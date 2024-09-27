export const useUtils = () => {



    function formatDate(date: string | Date): string {
        if (typeof date === "string") {
            date = new Date(date);
        }

        return date.toLocaleString(useI18n().locale.value, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    

    return { formatDate }

}
