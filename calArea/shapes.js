export function area(fn, n1, n2 ) {
    return fn(n1, n2);
}

export function circle(n1, n2 = 0) {
    return Math.PI * n1 * n1;
}

export function triangle(n1, n2) {
    return 0.5 * n1 * n2;
}

export function rectangle(n1, n2) {
    return n1 * n2;
}