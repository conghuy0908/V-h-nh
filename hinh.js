for (let i = 0; i < 8; i++) {
    for (let j = 0; j < (8 - i); j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");



document.write("<br>");

for (let i = 0; i < 8; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");
for (let i = 0; i < 8; ++i) {
    for (let j = i; j < 7; j++) {
        document.write("&nbsp&nbsp");

    }
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i; j++) {
        document.write("&nbsp&nbsp");
    }
    for (let j = i; j < 8 ; j++) {
        document.write("*");

    }
    
    document.write("<br>");
}
