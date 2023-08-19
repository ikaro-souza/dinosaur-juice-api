import { z } from "zod";

const filterNames = z.enum([
    "q",
    "price-min",
    "price-max",
    "year-start",
    "year-end",
    "manufacturer",
    "state",
    "vehicle-type",
]);
export type FilterNames = z.infer<typeof filterNames>;

export const FILTERS = {
    search: filterNames.Values.q,
    priceMin: filterNames.Values["price-min"],
    priceMax: filterNames.Values["price-max"],
    yearStart: filterNames.Values["year-start"],
    yearEnd: filterNames.Values["year-end"],
    manufacturer: filterNames.Values.manufacturer,
    state: filterNames.Values.state,
    vehicleType: filterNames.Values["vehicle-type"],
};

export type Filters = {
    [K in FilterNames]?: string;
};
