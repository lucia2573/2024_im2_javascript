let wg = [`Simon`, `Aglaja`, `Lea`, `Wolfgang`];
console.log(wg);
wg.push (`Jan`);
console.log(wg);
wg.pop ();
console.log(wg);
wg.splice(2,1)
console.log(wg);
wg.unshift (`Luana`)
console.log(wg)
wg.shift ();
console.log(wg);
wg [2] = `Luana`;
console.log(wg);










































// -> colors
let colors = [
    [
        '#AFAEEE',
        '#BDE4A8',
        '#FF3E41'
    ],
    [
        '#474044',
        '#FBD1A2',
        '#F61067'
    ],
    [
        '#FF3E41',
        '#FCFC62',
        '#DBCBD8'
    ],
    [
        '#F5D547',
        '#7765E3',
        '#1E2EDE'
    ],
    [
        '#EEE3AB',
        '#E05D3A',
        '#111D13'
    ]
];

// -> controls
const controls = document.querySelector('#controls');
const color_pack = controls.querySelector('#range');
const color_bg = controls.querySelector('#colorBg');
const color_inner = controls.querySelector('#colorInner');
const color_outer = controls.querySelector('#colorOuter');

// -> set color function
function setStyle (name, value) {
    document.documentElement.style.setProperty(`--${name}`, value);
}
