/***********************************
 * Projekt-Horoskop
 **********************************/

const month = document.body.querySelector("form input:nth-of-type(1)");
const headline = document.body.querySelector("h4");
const description = document.body.querySelector("p");
const picture = document.body.querySelector("img");
const horoskop = document.body.querySelector(".horoskop_wrapper");

function deinHoroskop() {

    if (month.value === "Jan" || month.value === "jan") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_aquarius.png"
        headline.textContent = "AQUARIUS";
        description.textContent = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…";

    } else if (month.value === "Feb" || month.value === "feb") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_pisces.png"
        headline.textContent = "PISCES";
        description.textContent = "Communication is very important today—written, spoken, and even nonverbal body language will all…";

    } else if (month.value === "Mar" || month.value === "mar") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_aries.png"
        headline.textContent = "ARIES";
        description.textContent = "Today your patience might be tested when one or more of your projects gets put on hold by someone… ";

    } else if (month.value === "Apr" || month.value === "apr") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_taurus.png"
        headline.textContent = "TAURUS";
        description.textContent = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…";

    } else if (month.value === "May" || month.value === "may") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_gemini.png"
        headline.textContent = "GEMINI";
        description.textContent = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";

    } else if (month.value === "Jun" || month.value === "jun") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_cancer.png"
        headline.textContent = "CANCER";
        description.textContent = "Too many different elements in your life are overlapping with each other right now—and it's your…";

    } else if (month.value === "Jul" || month.value === "jul") {
        picture.src = "https://www.horoscopedates.com/img/icon_leo.png"
        headline.textContent = "LEO";
        description.textContent = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";

    } else if (month.value === "Aug" || month.value === "aug") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_virgo.png"
        headline.textContent = "VIRGO";
        description.textContent = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";

    } else if (month.value === "Sep" || month.value === "sep") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_libra.png"
        headline.textContent = "LIBRA";
        description.textContent = "Pick a cultural event that's coming up and get some tickets for it today.";

    } else if (month.value === "Oct" || month.value === "oct") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_scorpio.png"
        headline.textContent = "SCORPIO";
        description.textContent = "Someone will challenge a belief that you've held for a very long time today—and they will say an…";

    } else if (month.value === "Nov" || month.value === "nov") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_sagittarius.png"
        headline.textContent = "SAGITTARIUS";
        description.textContent = "https://www.horoscopedates.com/img/icon_sagittarius.png";

    } else if (month.value === "Dec" || month.value === "dec") {
        horoskop.style.display = "block";
        picture.src = "https://www.horoscopedates.com/img/icon_capricorn.png"
        headline.textContent = "CAPRICORN";
        description.textContent = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity. ";

    } else {
        horoskop.style.display = "block";
        description.textContent = "";
        picture.src = ""
        headline.textContent = "The month you typed in does not exist, try it with 3 letters";
    }
    
}