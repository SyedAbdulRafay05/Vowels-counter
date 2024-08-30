let show_vowel_letter = document.querySelector(".show_vowel_letter");

function User_define(value) {
    let lowercase = value.toLowerCase();
    // console.log(lowercase);
    let tostorevowels = [];
    let storevalueinarray = lowercase.split("");
    for (let i = 0; i < storevalueinarray.length; i++) {
        let element = storevalueinarray[i];
        if (
            element == "a" ||
            element == "e" ||
            element == "i" ||
            element == "o" ||
            element == "u"
        ) {
            tostorevowels.push(value);
        }
    }
    show_vowel_letter.innerHTML = tostorevowels.length;
    document.querySelector(".show_vowel_letter").classList.toggle("addborshadow");
}