const iplTeams = [
    {
        teamName: "Mumbai Indians",
        shortName: "MI",
        championsYear: "2013, 2015, 2017, 2019, 2020",
        noOfTimesChampion: 5,
        logoLink: "./resources/images/teams-logo/Mumbai Indians logo.avif"
    },
    {
        teamName: "Chennai Super Kings",
        shortName: "CSK",
        championsYear: "2010, 2011, 2018, 2021, 2023",
        noOfTimesChampion: 5,
        logoLink: "./resources/images/teams-logo/Chennai Super Kings logo.avif"
    },
    {
        teamName: "Gujarat Titans",
        shortName: "GT",
        championsYear: "2022",
        noOfTimesChampion: 1,
        logoLink: "./resources/images/teams-logo/Gujarat Titans logo.avif"
    },
    {
        teamName: "Delhi Capitals",
        shortName: "DC",
        championsYear: "",
        noOfTimesChampion: 0,
        logoLink: "./resources/images/teams-logo/Delhi Capitals logo.avif"
    },
    {
        teamName: "Punjab Kings",
        shortName: "PBKS",
        championsYear: "",
        noOfTimesChampion: 0,
        logoLink: "./resources/images/teams-logo/Punjab Kings logo.avif"
    },
    {
        teamName: "Kolkata Knight Riders",
        shortName: "KKR",
        championsYear: "2012, 2014, 2024",
        noOfTimesChampion: 3,
        logoLink: "./resources/images/teams-logo/Kolkata Knight Riders logo.avif"
    },
    {
        teamName: "Lucknow Super Giants",
        shortName: "LSG",
        championsYear: "",
        noOfTimesChampion: 0,
        logoLink: "./resources/images/teams-logo/Lucknow Super Giants logo.avif"
    },
    {
        teamName: "Royal Challengers Bengaluru",
        shortName: "RCB",
        championsYear: "",
        noOfTimesChampion: 0,
        logoLink: "./resources/images/teams-logo/Royal Challengers Bengaluru logo.avif"
    },
    {
        teamName: "Sunrisers Hyderabad",
        shortName: "SRH",
        championsYear: "2016",
        noOfTimesChampion: 1,
        logoLink: "./resources/images/teams-logo/Sunrisers Hyderabad logo.avif"
    },
    {
        teamName: "Rajasthan Royals",
        shortName: "RR",
        championsYear: "2008",
        noOfTimesChampion: 5,
        logoLink: "./resources/images/teams-logo/Rajasthan Royals logo.avif"
    }
].sort((a,b)=> a.teamName.localeCompare(b.teamName));

const container = document.getElementById("container");
function teamDataDisplay()
{
    let teamCards = "";
    for(team of iplTeams)
    {
        teamCards += `
        <div class="cards">
        <a href="fixtures.html?team=${team.teamName}">
            <figure>
                <img src="${team.logoLink}" alt="${team.teamName}-poster">
                <figcaption>${team.teamName} (${team.shortName})</figcaption>
            </figure>
        </a>
        </div>
        `;
    }
    container.innerHTML = teamCards;
}
teamDataDisplay();