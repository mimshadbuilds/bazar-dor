export const getUnitLabel = (unit: string) => {
    switch (unit) {
        case "kg":
            return "প্রতি কেজি";
        case "dozen":
            return "প্রতি ডজন";
        case "piece":
            return "প্রতি পিস";
        case "litre":
            return "প্রতি লিটার";
        default:
            return `প্রতি ${unit}`;
    }
};

export const getPriceUnit = (unit: string) => {
    switch (unit) {
        case "kg":
        case "dozen":
        case "piece":
        case "litre":
            return "টাকা";
        default:
            return "টাকা";
    }
};