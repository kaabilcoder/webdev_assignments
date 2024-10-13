let ctr = 1;
function counter() {
    console.clear();
    console.log(ctr)
    ctr = ctr + 1;
}
setInterval(counter, 1000);