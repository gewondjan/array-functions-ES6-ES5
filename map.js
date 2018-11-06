//https://slides.com/meeple142/javascript-arrays-9#/9/3

//ES6

[0, 1, 2, 3, 4, 5, 6, 7]
.map((x) => 2 * x);

// [0, 2, 4, 6, 8, 10, 12, 14]


[{
        w: 10,
        h: 20,
        d: 10
    },
    {
        w: 3,
        h: 2,
        d: 20
    },
    {
        w: 4,
        h: 1,
        d: 400
    },
    {
        w: 9000,
        h: 3999,
        d: 9191
    }
].map(({
    w,
    h,
    d
}) => w * h * d);


// [2000, 120, 1600, 330793281000]




//ES5

[0, 1, 2, 3, 4, 5, 6, 7]
.map(function (x) {
    return 2 * x;
});

// [0, 2, 4, 6, 8, 10, 12, 14]


[{
        w: 10,
        h: 20,
        d: 10
    },
    {
        w: 3,
        h: 2,
        d: 20
    },
    {
        w: 4,
        h: 1,
        d: 400
    },
    {
        w: 9000,
        h: 3999,
        d: 9191
    }
].map(function (w, h, d) {
    return w * h * d;
});


// [2000, 120, 1600, 330793281000]