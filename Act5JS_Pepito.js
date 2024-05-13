function main() {
    function greetUser(name) {
        console.log("Hello, " + name + "! Welcome to my website.");
    }

    function calculateArea(length, width) {
        return length * width;
    }

    function showMessage(message) {
        alert(message);
    }

    greetUser("Aubrey");

    var length = 5;
    var width = 3;
    var area = calculateArea(length, width);
    console.log("The area of the rectangle is: " + area);

    var message = "Thank you for visiting!";
    showMessage(message);
}

main();