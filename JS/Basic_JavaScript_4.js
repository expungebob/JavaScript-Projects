function my_Dictionary() {
    var Country = {
        Name:"Norway",
        Capital:"Oslo",
        Pop:"5,328,000",
        GDP:"443 Billion",
        MedianIncome:"74,000",
        Currency:"Krone",
        Established:"872 AD"
    };
    delete Country.Capital;
    document.getElementById("Dictionary").innerHTML = Country.GDP;
}