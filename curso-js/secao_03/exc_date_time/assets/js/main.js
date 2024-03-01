function main() {
    // Variables
    const h1 = document.querySelector("h1");

    const weekDays = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    // Invoking
    showNowDate();

    function createStringDate() {
        const date = new Date();
        const fullDateString = `Data: ${dateParamToString(date.getDay(), weekDays)}, ${date.getDate()} de ${dateParamToString(date.getMonth(), months)} de ${date.getFullYear()}\nHora: ${date.getHours()}:${date.getMinutes()}`;

        return fullDateString;
    }

    // Functions
    function showNowDate() {
        h1.innerText = "";
        h1.innerText = createStringDate();
    }

    function dateParamToString(dateParam, paramStrings) {
        return paramStrings[dateParam];
    }
}
main()
