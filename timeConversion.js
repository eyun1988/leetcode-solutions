const s = "12:01:00PM";

const timeConversion = (s) => {
    let parsedS = s.split(":");
    let amPM = s.match(/[a-zA-Z]/g);
    parsedS[parsedS.length - 1] = parsedS[parsedS.length - 1].substring(0, 2);
    parsedS[0] =
        amPM[0] === "A" || amPM[0] === "a"
            ? parsedS[0] == "12"
                ? "00"
                : parsedS[0]
            : parsedS[0] == "12"
            ? parseInt(parsedS[0]).toString()
            : (12 + parseInt(parsedS[0])).toString();

    return parsedS.join(":");
};

console.log(timeConversion(s));
