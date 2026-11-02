function calculate() {
    let a = document.getElementById("s1").value;
    let b = document.getElementById("s2").value;
    let c = document.getElementById("s3").value;
    let d = document.getElementById("s4").value;
    let e = document.getElementById("s5").value;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
        alert("Please enter all five grade points!");
        return;
    }

    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);
    e = Number(e);

    if ([a, b, c, d, e].some(x => x < 0 || x > 10)) {
        alert("Enter grade points between 0 and 10!");
        return;
    }

    let cgpa = (a + b + c + d + e) / 5;

    document.getElementById("result").innerHTML =
        "Your CGPA is: " + cgpa.toFixed(2);
}
