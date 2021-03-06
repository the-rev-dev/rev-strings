import { regex } from './regexPatterns';




export class rStrings {

    static toLowerCase(val: string) {
        return val.toLowerCase();
    }
    static toUpperCase(val: string) {
        return val.toUpperCase();
    }
    static toSnakeCase(value: string) {
        return value.split(regex.white_space)
            .map(w => w.toLowerCase())
            .join('_');
    }
    static toQueryString(query: Record<string, string>, url = ''): string {
        Object.keys(query)
            .forEach(k =>
                url = this.setQueryParam(url, k, query[k])
            );
        // change to use reduce
        return url;
    }
    static setQueryParam = (uri: string, key: string, value: string) => {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }
}


export class StringBuilder extends rStrings {

    constructor(private _value = "") {
        super();
    }

    public get value() { return this._value };

}
