const units = {
    length: ["метры", "километры", "сантиметры"],
    weight: ["килограммы", "граммы", "тонны"],
    temperature: ["Цельсий", "Фаренгейт", "Кельвин"],
    volume: ["литры", "миллилитры", "куб.м"]
};

function updateUnits() {
    const type = document.getElementById("type").value;
    const from = document.getElementById("fromUnit");
    const to = document.getElementById("toUnit");

    from.innerHTML = "";
    to.innerHTML = "";

    units[type].forEach(unit => {
        from.innerHTML += `<option value="${unit}">${unit}</option>`;
        to.innerHTML += `<option value="${unit}">${unit}</option>`;
    });
}

function convert() {
    const type = document.getElementById("type").value;
    const value = parseFloat(document.getElementById("inputValue").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;

    if (isNaN(value)) {
        document.getElementById("result").innerText = "Введите число!";
        return;
    }

    let result;

    // ДЛИНА
    if (type === "length") {
        let meters;
        if (from === "метры") meters = value;
        if (from === "километры") meters = value * 1000;
        if (from === "сантиметры") meters = value / 100;

        if (to === "метры") result = meters;
        if (to === "километры") result = meters / 1000;
        if (to === "сантиметры") result = meters * 100;
    }

    // ВЕС
    if (type === "weight") {
        let kg;
        if (from === "килограммы") kg = value;
        if (from === "граммы") kg = value / 1000;
        if (from === "тонны") kg = value * 1000;

        if (to === "килограммы") result = kg;
        if (to === "граммы") result = kg * 1000;
        if (to === "тонны") result = kg / 1000;
    }

    // ТЕМПЕРАТУРА
    if (type === "temperature") {
        let c;

        if (from === "Цельсий") c = value;
        if (from === "Фаренгейт") c = (value - 32) * 5/9;
        if (from === "Кельвин") c = value - 273.15;

        if (to === "Цельсий") result = c;
        if (to === "Фаренгейт") result = (c * 9/5) + 32;
        if (to === "Кельвин") result = c + 273.15;
    }

    // ОБЪЕМ
    if (type === "volume") {
        let liters;
        if (from === "литры") liters = value;
        if (from === "миллилитры") liters = value / 1000;
        if (from === "куб.м") liters = value * 1000;

        if (to === "литры") result = liters;
        if (to === "миллилитры") result = liters * 1000;
        if (to === "куб.м") result = liters / 1000;
    }

    document.getElementById("result").innerText =
        `Результат: ${result.toFixed(4)} ${to}`;
}