export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export function replaceUrlDelimiters(str) {
    return str.replace(/[^a-zA-Z0-9\s]/g, ' ');
}