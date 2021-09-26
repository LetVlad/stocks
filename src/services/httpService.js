import { getApiUrl } from "../utils";

export const getStocksData = (precision, period = 1) => {
    const url = getApiUrl(period, precision);
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => reject(error));
    })
}
