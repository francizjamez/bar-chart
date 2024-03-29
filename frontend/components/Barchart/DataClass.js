import { getFirstAndLastRecord } from "../../airtableFunctions";
import getChartData from "../../airtable_functions/getChartData";

export default class DataClass {
    constructor({ table, view, records, xField, yField }) {
        this.table = table;
        this.view = view;
        this.xField = xField;
        this.yField = yField;
        this.records = records;
    }

    getData() {
        const [records, xField, yField] = [this.records, this.xField, this.yField];
        return getChartData({ records, xField, yField });
    }

    getFirstAndLast() {
        const records = this.records;
        const yField = this.yField;

        let [first, last] = records && yField ? getFirstAndLastRecord({ records, yField }) : [1, 0];

        if (isNaN(first)) first = 1;
        if (isNaN(last)) last = 0;

        return [first, last];
    }

    getTotalYield() {
        const [first, last] = this.getFirstAndLast();

        const result = Number((last - first) / first * 100).toFixed(2);

        if (isNaN(result)) {
            return 0
        }
        return result;
    }
}
