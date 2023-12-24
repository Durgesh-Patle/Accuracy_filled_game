let input = document.getElementById("inpt");
let spans = document.querySelectorAll("span");
let bar = document.getElementById("bar");

let random = 0;

spans.forEach(span => {
    span.addEventListener("click", (e) => {
        // console.log(e.target.textContent);

        let number = e.target.textContent;

        if (number == "✖") {
            input.value = input.value.slice(0, -1);
        }
        else if (number == "✔") {
            showResult();
        }
        else {
            input.value += number;
        }
    })
})

// Result to Show the Pop Up Screen.
function showResult() {
    // refresh to page and to Empty.
    if (!input.value) return;

    // Alert to print Windows Secssion.
    let accuracy = 100 - Math.abs(input.value - random);
    alert("Your accuracy is " + accuracy + "%\n " + "You have enterd "
        + input.value + " but Acctual value is " + random);

    fillAccurium();
}

function fillAccurium() {
    // refresh to page and to Empty.
    input.value = null;
    // alert("Hello");

    // Random height to print the color Seccsion.
    random = Math.floor(Math.random() * 100);
    bar.style.height = `${random}%`;
}

// init Call.
fillAccurium();