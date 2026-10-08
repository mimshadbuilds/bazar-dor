export const getUnitLabel = (unit: string) => {
    switch (unit) {
        case "kg":
            return "প্রতি কেজি";
        case "dozen":
            return "প্রতি ডজন";
        case "piece":
            return "প্রতি পিস";
        default:
            return `প্রতি ${unit}`;
    }
};

export const getPriceUnit = (unit: string) => {
    switch (unit) {
        case "kg":
        case "dozen":
        case "piece":
            return "টাকা";
        default:
            return "টাকা";
    }
};