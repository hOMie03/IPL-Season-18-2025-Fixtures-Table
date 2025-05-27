const fixturesData = [
    {
        matchNo: 1,
        date: "22-Mar-2025",
        team1: "Kolkata Knight Riders",
        team2: "Royal Challengers Bengaluru",
        Venue: "Kolkata",
        noonOrNight: "Night"
    },
    {
        matchNo: 2,
        date: "23-Mar-2025",
        team1: "Sunrisers Hyderabad",
        team2: "Rajasthan Royals",
        Venue: "Hyderabad",
        noonOrNight: "Day"
    },
    {
        matchNo: 3,
        date: "23-Mar-2025",
        team1: "Chennai Super Kings",
        team2: "Mumbai Indians",
        Venue: "Hyderabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 4,
        date: "24-Mar-2025",
        team1: "Delhi Capitals",
        team2: "Lucknow Super Giants",
        Venue: "Visakhapatnam",
        noonOrNight: "Night"
    },
    {
        matchNo: 5,
        date: "25-Mar-2025",
        team1: "Gujarat Titans",
        team2: "Punjab Kings",
        Venue: "Ahmedabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 6,
        date: "26-Mar-2025",
        team1: "Rajasthan Royals",
        team2: "Kolkata Knight Riders",
        Venue: "Guwahati",
        noonOrNight: "Night"
    },
    {
        matchNo: 7,
        date: "27-Mar-2025",
        team1: "Sunrisers Hyderabad",
        team2: "Lucknow Super Giants",
        Venue: "Hyderabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 8,
        date: "28-Mar-2025",
        team1: "Chennai Super Kings",
        team2: "Royal Challengers Bengaluru",
        Venue: "Chennai",
        noonOrNight: "Night"
    },
    {
        matchNo: 9,
        date: "29-Mar-2025",
        team1: "Gujarat Titans",
        team2: "Mumbai Indians",
        Venue: "Ahmedabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 10,
        date: "30-Mar-2025",
        team1: "Delhi Capitals",
        team2: "Sunrisers Hyderabad",
        Venue: "Visakhapatnam",
        noonOrNight: "Day"
    },
    {
        matchNo: 11,
        date: "30-Mar-2025",
        team1: "Rajasthan Royals",
        team2: "Chennai Super Kings",
        Venue: "Guwahati",
        noonOrNight: "Night"
    },
    {
        matchNo: 12,
        date: "31-Mar-2025",
        team1: "Mumbai Indians",
        team2: "Kolkata Knight Riders",
        Venue: "Mumbai",
        noonOrNight: "Night"
    },
    {
        matchNo: 13,
        date: "1-Apr-2025",
        team1: "Lucknow Super Giants",
        team2: "Punjab Kings",
        Venue: "Lucknow",
        noonOrNight: "Night"
    },
    {
        matchNo: 14,
        date: "2-Apr-2025",
        team1: "Royal Challengers Bengaluru",
        team2: "Gujarat Titans",
        Venue: "Bengaluru",
        noonOrNight: "Night"
    },
    {
        matchNo: 15,
        date: "3-Apr-2025",
        team1: "Kolkata Knight Riders",
        team2: "Sunrisers Hyderabad",
        Venue: "Kolkata",
        noonOrNight: "Night"
    },
    {
        matchNo: 16,
        date: "4-Apr-2025",
        team1: "Lucknow Super Giants",
        team2: "Mumbai Indians",
        Venue: "Lucknow",
        noonOrNight: "Night"
    },
    {
        matchNo: 17,
        date: "5-Apr-2025",
        team1: "Chennai Super Kings",
        team2: "Delhi Capitals",
        Venue: "Chennai",
        noonOrNight: "Day"
    },
    {
        matchNo: 18,
        date: "5-Apr-2025",
        team1: "Punjab Kings",
        team2: "Rajasthan Royals",
        Venue: "New Chandigarh",
        noonOrNight: "Night"
    },
    {
        matchNo: 19,
        date: "6-Apr-2025",
        team1: "Kolkata Knight Riders",
        team2: "Lucknow Super Giants",
        Venue: "Kolkata",
        noonOrNight: "Day"
    },
    {
        matchNo: 20,
        date: "6-Apr-2025",
        team1: "Sunrisers Hyderabad",
        team2: "Gujarat Titans",
        Venue: "Hyderabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 21,
        date: "7-Apr-2025",
        team1: "Mumbai Indians",
        team2: "Royal Challengers Bengaluru",
        Venue: "Kolkata",
        noonOrNight: "Night"
    },
    {
        matchNo: 22,
        date: "8-Apr-2025",
        team1: "Punjab Kings",
        team2: "Chennai Super Kings",
        Venue: "New Chandigarh",
        noonOrNight: "Night"
    },
    {
        matchNo: 23,
        date: "9-Apr-2025",
        team1: "Gujarat Titans",
        team2: "Rajasthan Royals",
        Venue: "Ahmedabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 24,
        date: "10-Apr-2025",
        team1: "Royal Challengers Bengaluru",
        team2: "Delhi Capitals",
        Venue: "Bengaluru",
        noonOrNight: "Night"
    },
    {
        matchNo: 25,
        date: "11-Apr-2025",
        team1: "Chennai Super Kings",
        team2: "Kolkata Knight Riders",
        Venue: "Chennai",
        noonOrNight: "Night"
    },
    {
        matchNo: 26,
        date: "12-Apr-2025",
        team1: "Lucknow Super Giants",
        team2: "Gujarat Titans",
        Venue: "Lucknow",
        noonOrNight: "Day"
    },
    {
        matchNo: 27,
        date: "12-Apr-2025",
        team1: "Sunrisers Hyderabad",
        team2: "Punjab Kings",
        Venue: "Hyderabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 28,
        date: "13-Apr-2025",
        team1: "Chennai Super Kings",
        team2: "Kolkata Knight Riders",
        Venue: "Chennai",
        noonOrNight: "Day"
    },
    {
        matchNo: 29,
        date: "13-Apr-2025",
        team1: "Delhi Capitals",
        team2: "Mumbai Indians",
        Venue: "Chennai",
        noonOrNight: "Night"
    },
    {
        matchNo: 30,
        date: "14-Apr-2025",
        team1: "Lucknow Super Giants",
        team2: "Chennai Super Kings",
        Venue: "Lucknow",
        noonOrNight: "Night"
    },
    {
        matchNo: 31,
        date: "15-Apr-2025",
        team1: "Punjab Kings",
        team2: "Kolkata Knight Riders",
        Venue: "New Chandigarh",
        noonOrNight: "Night"
    },
    {
        matchNo: 32,
        date: "16-Apr-2025",
        team1: "Delhi Capitals",
        team2: "Rajasthan Royals",
        Venue: "Delhi",
        noonOrNight: "Night"
    },
    {
        matchNo: 33,
        date: "17-Apr-2025",
        team1: "Mumbai Indians",
        team2: "Sunrisers Hyderabad",
        Venue: "Mumbai",
        noonOrNight: "Night"
    },
    {
        matchNo: 34,
        date: "18-Apr-2025",
        team1: "Royal Challengers Bengaluru",
        team2: "Punjab Kings",
        Venue: "Bengaluru",
        noonOrNight: "Night"
    },
    {
        matchNo: 35,
        date: "19-Apr-2025",
        team1: "Gujarat Titans",
        team2: "Delhi Capitals",
        Venue: "Ahmedabad",
        noonOrNight: "Day"
    },
    {
        matchNo: 36,
        date: "19-Apr-2025",
        team1: "Rajasthan Royals",
        team2: "Lucknow Super Giants",
        Venue: "Jaipur",
        noonOrNight: "Night"
    },
    {
        matchNo: 37,
        date: "20-Apr-2025",
        team1: "Punjab Kings",
        team2: "Royal Challengers Bengaluru",
        Venue: "New Chandigarh",
        noonOrNight: "Day"
    },
    {
        matchNo: 38,
        date: "20-Apr-2025",
        team1: "Mumbai Indians",
        team2: "Chennai Super Kings",
        Venue: "Mumbai",
        noonOrNight: "Night"
    },
    {
        matchNo: 39,
        date: "21-Apr-2025",
        team1: "Kolkata Knight Riders",
        team2: "Gujarat Titans",
        Venue: "Kolkata",
        noonOrNight: "Night"
    },
    {
        matchNo: 40,
        date: "22-Apr-2025",
        team1: "Lucknow Super Giants",
        team2: "Delhi Capitals",
        Venue: "Lucknow",
        noonOrNight: "Night"
    },
    {
        matchNo: 41,
        date: "23-Apr-2025",
        team1: "Sunrisers Hyderabad",
        team2: "Mumbai Indians",
        Venue: "Hyderabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 42,
        date: "24-Apr-2025",
        team1: "Royal Challengers Bengaluru",
        team2: "Rajasthan Royals",
        Venue: "Bengaluru",
        noonOrNight: "Night"
    },
    {
        matchNo: 43,
        date: "25-Apr-2025",
        team1: "Chennai Super Kings",
        team2: "Sunrisers Hyderabad",
        Venue: "Chennai",
        noonOrNight: "Night"
    },
    {
        matchNo: 44,
        date: "26-Apr-2025",
        team1: "Kolkata Knight Riders",
        team2: "Punjab Kings",
        Venue: "Kolkata",
        noonOrNight: "Night"
    },
    {
        matchNo: 45,
        date: "27-Apr-2025",
        team1: "Mumbai Indians",
        team2: "Lucknow Super Giants",
        Venue: "Mumbai",
        noonOrNight: "Day"
    },
    {
        matchNo: 46,
        date: "27-Apr-2025",
        team1: "Delhi Capitals",
        team2: "Royal Challengers Bengaluru",
        Venue: "Delhi",
        noonOrNight: "Night"
    },
    {
        matchNo: 47,
        date: "28-Apr-2025",
        team1: "Rajasthan Royals",
        team2: "Gujarat Titans",
        Venue: "Jaipur",
        noonOrNight: "Night"
    },
    {
        matchNo: 48,
        date: "29-Apr-2025",
        team1: "Delhi Capitals",
        team2: "Kolkata Knight Riders",
        Venue: "Delhi",
        noonOrNight: "Night"
    },
    {
        matchNo: 49,
        date: "30-Apr-2025",
        team1: "Chennai Super Kings",
        team2: "Punjab Kings",
        Venue: "Chennai",
        noonOrNight: "Night"
    },
    {
        matchNo: 50,
        date: "1-May-2025",
        team1: "Rajasthan Royals",
        team2: "Mumbai Indians",
        Venue: "Jaipur",
        noonOrNight: "Night"
    },
    {
        matchNo: 51,
        date: "2-May-2025",
        team1: "Gujarat Titans",
        team2: "Sunrisers Hyderabad",
        Venue: "Ahmedabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 52,
        date: "3-May-2025",
        team1: "Royal Challengers Bengaluru",
        team2: "Chennai Super Kings",
        Venue: "Bengaluru",
        noonOrNight: "Night"
    },
    {
        matchNo: 53,
        date: "4-May-2025",
        team1: "Kolkata Knight Riders",
        team2: "Rajasthan Royals",
        Venue: "Kolkata",
        noonOrNight: "Day"
    },
    {
        matchNo: 54,
        date: "4-May-2025",
        team1: "Punjab Kings",
        team2: "Lucknow Super Giants",
        Venue: "Dharamsala",
        noonOrNight: "Night"
    },
    {
        matchNo: 55,
        date: "5-May-2025",
        team1: "Sunrisers Hyderabad",
        team2: "Delhi Capitals",
        Venue: "Hyderabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 56,
        date: "6-May-2025",
        team1: "Mumbai Indians",
        team2: "Gujarat Titans",
        Venue: "Mumbai",
        noonOrNight: "Night"
    },
    {
        matchNo: 57,
        date: "7-May-2025",
        team1: "Kolkata Knight Riders",
        team2: "Chennai Super Kings",
        Venue: "Kolkata",
        noonOrNight: "Night"
    },
    {
        matchNo: 58,
        date: "17-May-2025",
        team1: "Royal Challengers Bengaluru",
        team2: "Kolkata Knight Riders",
        Venue: "Bengaluru",
        noonOrNight: "Night"
    },
    {
        matchNo: 59,
        date: "18-May-2025",
        team1: "Rajasthan Royals",
        team2: "Punjab Kings",
        Venue: "Jaipur",
        noonOrNight: "Day"
    },
    {
        matchNo: 60,
        date: "18-May-2025",
        team1: "Delhi Capitals",
        team2: "Gujarat Titans",
        Venue: "Delhi",
        noonOrNight: "Night"
    },
    {
        matchNo: 61,
        date: "19-May-2025",
        team1: "Lucknow Super Giants",
        team2: "Sunrisers Hyderabad",
        Venue: "Lucknow",
        noonOrNight: "Night"
    },
    {
        matchNo: 62,
        date: "20-May-2025",
        team1: "Chennai Super Kings",
        team2: "Rajasthan Royals",
        Venue: "Delhi",
        noonOrNight: "Night"
    },
    {
        matchNo: 63,
        date: "21-May-2025",
        team1: "Mumbai Indians",
        team2: "Delhi Capitals",
        Venue: "Mumbai",
        noonOrNight: "Night"
    },
    {
        matchNo: 64,
        date: "22-May-2025",
        team1: "Gujarat Titans",
        team2: "Lucknow Super Giants",
        Venue: "Ahmedabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 65,
        date: "23-May-2025",
        team1: "Royal Challengers Bengaluru",
        team2: "Sunrisers Hyderabad",
        Venue: "Bengaluru",
        noonOrNight: "Night"
    },
    {
        matchNo: 66,
        date: "24-May-2025",
        team1: "Punjab Kings",
        team2: "Delhi Capitals",
        Venue: "Jaipur",
        noonOrNight: "Night"
    },
    {
        matchNo: 67,
        date: "25-May-2025",
        team1: "Gujarat Titans",
        team2: "Chennai Super Kings",
        Venue: "Ahmedabad",
        noonOrNight: "Day"
    },
    {
        matchNo: 68,
        date: "25-May-2025",
        team1: "Sunrisers Hyderabad",
        team2: "Kolkata Knight Riders",
        Venue: "Delhi",
        noonOrNight: "Night"
    },
    {
        matchNo: 69,
        date: "26-May-2025",
        team1: "Punjab Kings",
        team2: "Mumbai Indians",
        Venue: "Jaipur",
        noonOrNight: "Night"
    },
    {
        matchNo: 70,
        date: "27-May-2025",
        team1: "Lucknow Super Giants",
        team2: "Royal Challengers Bengaluru",
        Venue: "Lucknow",
        noonOrNight: "Night"
    },

    
    {
        matchNo: 71,
        date: "29-May-2025",
        team1: "Punjab Kings",
        team2: "Qualifier1 Team2",
        Venue: "Chandigarh",
        noonOrNight: "Night"
    },
    {
        matchNo: 72,
        date: "30-May-2025",
        team1: "Eliminator Team1",
        team2: "Mumbai Indians",
        Venue: "Chandigarh",
        noonOrNight: "Night"
    },
    {
        matchNo: 73,
        date: "1-June-2025",
        team1: "Qualifier2 Team1",
        team2: "Qualifier2 Team2",
        Venue: "Ahmedabad",
        noonOrNight: "Night"
    },
    {
        matchNo: 74,
        date: "3-June-2025",
        team1: "Finale Team1",
        team2: "Finale Team2",
        Venue: "Ahmedabad",
        noonOrNight: "Night"
    },
]

const fixtureTable = document.getElementById("matchTable");
function matchDataDisplay()
{
    const urlParams = new URLSearchParams(window.location.search);
    const teamNameFromUrl = urlParams.get('team'); // assuming the URL contains ?team=teamName
    let fixtureCards = "";
    let time = "03:30PM";
    
    for(data of fixturesData)
    {
        if(data.noonOrNight == "Night")
        {
            time = "07:30PM";
        }
        if (!teamNameFromUrl || data.team1 === teamNameFromUrl || data.team2 === teamNameFromUrl) {
            fixtureCards += `
                    <tr>
                        <td>Match ${data.matchNo}</td>
                        <td>${data.date}</td>
                        <td>${time}</td>
                        <td class="teamCell"><div class="bgImg" style="background: url('./resources/images/teams-logo/${data.team1} logo.avif') center no-repeat;"></div>${data.team1}</td>
                        <td class="vsCell">vs</td>
                        <td class="teamCell"><div class="bgImg" style="background: url('./resources/images/teams-logo/${data.team2} logo.avif') center no-repeat;"></div>${data.team2}</td>
                        <td>${data.Venue}</td>
                    </tr>
                    `;
        }
    }
    if (fixtureCards === "") {
        fixtureCards = "<tr><td colspan='7'>No fixtures found for this team.</td></tr>";
    }
    fixtureTable.innerHTML = fixtureCards;
}
matchDataDisplay();