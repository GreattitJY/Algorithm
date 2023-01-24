process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    let a = Number(n[0]), b = Number(n[1]);
    let star = "";
    while(a) {
        star += "*";
        a--
    }
    while(b) {
        console.log(star);
        b--
    }
});