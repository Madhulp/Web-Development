function reverseTheValue(num) {
    // Write code here
    let reverse_number=0;
    reverse_number=Number(String(num).split("").reverse().join(""));
    console.log(reverse_number);
}
