$(document).ready(function () {
    $('select').formSelect();
});

$("#apply").on("submit", (e) => {
    let missing = false;
    let checkboxFields = $("div[data-required-field]");

    for (let i = 0; i < checkboxFields.length; i++) {
        let cur = checkboxFields[i];
        let attr = $(cur).attr("data-required-field");
        let valid = true;

        switch (attr) {
            case "checkbox":
                let inputs = $(cur).find("input[type='checkbox']");
                let isAnyChecked = false;
                for (let inp of inputs) {
                    let checked = $(inp).prop("checked");
                    if (checked) {
                        isAnyChecked = true;
                    }
                }
                if (!isAnyChecked) {
                    valid = false;
                    let spans = $(inputs).siblings("span");
                    setWrong(spans); 
                    $(inputs).on("change", function () {
                        $(spans).removeClass("wrong");
                    });
                }
                break;
            case "select":
                let select = $(cur).find("select");
                let value = $(select).val();
                if (value == null) {
                    valid = false;
                    let item = $(select).siblings("input")[0];
                    setWrong(item);
                    $(select).on("change", function () {
                        if ($(this).val() != null) {
                            $(item).removeClass("wrong");
                        }
                    });
                }
                break;
        }

        if (!valid) {
            missing = true;
            break;
        }
    }

    if (missing) {
        e.preventDefault();
        return false;
    }
});

function setWrong(item) {
    if (item != null) {
        $(item).addClass("wrong");
        $("html, body").animate({
            scrollTop: $(item).offset().top - 50
        }, 500);
    }
}
