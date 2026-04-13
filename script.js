// To avoid gumming up the HTML with a bunch of information...
// Encode it here as a variable and call it when needed!
const roster = {
    player1: {
        name: "Igor Chernyshov",
        number: "92",
        position: "Left Wing",
        drafted: "2024, 33rd overall (2nd round, 1st pick)",
        points: "16",
        goals: "7",
        assists: "9",
        gp: "25",
        img: "https://sanjosehockeynow.com/wp-content/uploads/sites/7/2026/03/Chernyshov-HS_Sharks_vs_Flames_0221-1536x1023.jpg",
        alt: "Igor Chernyshov gets warmed up"
    },
    player2: {
        name: "Macklin Celebrini",
        number: "71",
        position: "Center",
        drafted: "2024, 1st overall (1st round, 1st pick)",
        points: "110",
        goals: "42",
        assists: "68",
        gp: "79",
        img: "https://wp.clutchpoints.com/wp-content/uploads/2025/11/San-Jose-Sharks-center-Macklin-Celebrini-71.jpg?w=1200",
        alt: "Macklin looking just so cute"
    },
    player3: {
        name: "William Eklund",
        number: "72",
        position: "Left Wing",
        drafted: "2020, 7th overall (1st round, 7th pick)",
        points: "49",
        goals: "14",
        assists: "35",
        gp: "75",
        img: "https://epr-cdn.eliteprospects-assets.com/fm/eprinkside/files/2/images/2024-01/eklund.jpg",
        alt: "William Eklund looking a bit smug"
    },
    player4: {
        name: "Will Smith",
        number: "2",
        position: "Center",
        drafted: "2023, 4th overall (1st round, 4th pick)",
        points: "56",
        goals: "23",
        assists: "33",
        gp: "66",
        img: "https://sanjosehockeynow.com/wp-content/uploads/sites/7/2025/12/Smith-Screen-Shot-2025-12-18-at-12.52.03-PM-1000x600.jpeg",
        alt: "Will Smith without a helmet, nice flow!"
    },
    player5: {
        name: "John Klingberg",
        number: "3",
        position: "Defense",
        drafted: "2010, 131st overall (5th round, 11th pick)",
        points: "24",
        goals: "10",
        assists: "14",
        gp: "55",
        img: "https://www.mercurynews.com/wp-content/uploads/2025/10/BNG-L-SHARKS-1010-37.jpg?w=1080",
        alt: "John Klingberg showing off his buzzcut on the ice"
    },
    player6: {
        name: "Vincent Deshar(k)nais",
        number: "5",
        position: "Defense",
        drafted: "2016, 183rd overall (7th round, 2nd pick)",
        points: "7",
        goals: "1",
        assists: "6",
        gp: "51",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dailyfaceoff.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fpublish.dailyfaceoff.com%252Fwp-content%252Fuploads%252F2025%252F03%252FUSATSI_25672082_168383996_lowres.jpg%26w%3D3840%26q%3D75&f=1&nofb=1&ipt=fb4723895daa00c939aa76eb2af67416bee3c38f2749d356292bc771f238f607",
        alt: "Vincent Desharnais yaps it up with a referee"
    },
    player7: {
        name: "Sam Dickinson",
        number: "6",
        position: "Defense",
        drafted: "2024, 11th overall (1st round, 11th pick)",
        points: "14",
        goals: "1",
        assists: "13",
        gp: "69",
        img: "https://www.eastbaytimes.com/wp-content/uploads/2025/10/BNG-L-SHARKS-1012-5-1.jpg?w=992",
        alt: "Sam Dickinson skates around with no helmet"
    },
    player8: {
        name: "Ty Dellandrea",
        number: "10",
        position: "Center",
        drafted: "2018, 13th overall (1st round, 13th pick)",
        points: "11",
        goals: "2",
        assists: "9",
        gp: "45",
        img: "https://deweb-519a7.b-cdn.net/migration/thehockeynews.com/MjEwMzI5ODM1MzIxNDM1MzQw/hs_sharks_vs_anaheim_0269.jpg",
        alt: "Just Ty Dellandrea on the ice"
    },
    player9: {
        name: "Alexander Wennberg",
        number: "21",
        position: "Center",
        drafted: "2013, 14th overall (1st round, 14th pick)",
        points: "54",
        goals: "18",
        assists: "36",
        gp: "78",
        img: "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_236,w_4500,h_2531/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/images/GettyImages/mmsport/12/01k4axp3mfv0ba77pgn8.jpg",
        alt: "Alexander Wennberg flips a puck with no helmet on"
    },
    player10: {
        name: "Barclay Goodrow",
        number: "23",
        position: "Center",
        drafted: "Undrafted",
        points: "12",
        goals: "5",
        assists: "7",
        gp: "79",
        img: "https://staticg.sportskeeda.com/editor/2024/10/de039-17301309225014-1920.jpg",
        alt: "Barclay Goodrow on the ice"
    },
    player11: {
        name: "Yaroslav Askarov",
        number: "30",
        position: "Goalie",
        drafted: "2020, 11th overall (1st round, 11th pick)",
        points: "21",
        // Goalie points are going to be number of wins rather than goals scored
        // Setting goals and assists to 0.1 so they don't mess up the order (0 is the highest level as default!)
        goals: "0.1",
        assists: "0.1",
        sv: "0.885",
        gp: "46",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-s-msn-com.akamaized.net%2Ftenant%2Famp%2Fentityid%2FAA1QRHGz.img%3Fw%3D2500%26h%3D1667%26m%3D4%26q%3D94&f=1&nofb=1&ipt=f18792fde83656a1cbc78955b4eb70e86277eba3b81d8d32983a04f25f09ff8a",
        alt: "Yaroslav Askarov celebrates a win"
    },
    player12: {
        name: "Alex Nedeljkovic",
        number: "33",
        position: "Goalie",
        drafted: "2014, 37th overall (2nd round, 7th pick)",
        points: "16",
        // Goalie points are going to be number of wins rather than goals scored
        // Setting goals and assists to 0.1 so they don't mess up the order (0 is the highest level as default!)
        goals: "0.1",
        assists: "0.1",
        sv: "0.893",
        gp: "38",
        img: "https://s3951.pcdn.co/wp-content/uploads/2025/11/San-Jose-Sharks-Alex-Nedeljkovic-scaled.jpg",
        alt: "Ned shows off his awesome helmet design"
    },
    player13: {
        name: "Mario Ferraro",
        number: "38",
        position: "Defense",
        drafted: "2017, 49th overall (2nd round, 18th pick)",
        points: "21",
        goals: "6",
        assists: "15",
        gp: "79",
        img: "https://www.mercurynews.com/wp-content/uploads/2025/03/BNG-L-SHARKS-0312-03.jpg?w=1080",
        alt: "Mario Ferraro probably arguing with a referee"
    },
    player14: {
        name: "Kiefer Sherwood",
        number: "44",
        position: "Left Wing",
        drafted: "Undrafted",
        points: "33",
        goals: "23",
        assists: "10",
        gp: "69",
        img: "https://www.nhltraderumor.com/wp-content/uploads/2026/01/kiefer-sherwood-vancouver-canucks-trade-rumor-sharks-1024x615.jpg",
        alt: "Kiefer Sherwood in a maybe-Photoshopped Sharks away jersey"
    },
    player15: {
        name: "Collin Graf",
        number: "51",
        position: "Right Wing",
        drafted: "Undrafted",
        points: "44",
        goals: "20",
        assists: "24",
        gp: "78",
        img: "https://deweb-519a7.b-cdn.net/migration/thehockeynews.com/MjA2OTIyMDMzMjQ5MjY1MTIz/usatsi_23069291.jpg",
        alt: "Collin Graf looking very determined with his tongue out"
    },
    player16: {
        name: "Zack Ostapchuk",
        number: "63",
        position: "Center",
        drafted: "2021, 39th overall (2nd round, 7th pick)",
        points: "7",
        goals: "4",
        assists: "3",
        gp: "56",
        img: "https://www.mercurynews.com/wp-content/uploads/2025/03/BNG-L-SHARKS-0316-1.jpg?w=863",
        alt: "Zack Ostapchuk looking very intense"
    },
    player17: {
        name: "Tyler Toffoli",
        number: "73",
        position: "Center",
        drafted: "2010, 47th overall (2nd round, 17th pick)",
        points: "49",
        goals: "19",
        assists: "30",
        gp: "77",
        img: "https://media.bleacherreport.com/image/upload/v1728741424/y80nxq6ewwhkwrvpqpzo.jpg",
        alt: "Tyler Toffoli looking focused on the ice"
    },
    player18: {
        name: "Ryan Reaves",
        number: "75",
        position: "Right Wing",
        drafted: "2005, 156th overall (5th round, 31st pick)",
        points: "3",
        goals: "3",
        assists: "0",
        gp: "50",
        img: "https://static01.nyt.com/athletic/uploads/wp/2025/12/11123647/USATSI_27680731-1024x683.jpg?width=1440&quality=70&auto=webp",
        alt: "Ryan Reaves not in a fight for once"
    },
    player19: {
        name: "Michael Misa",
        number: "77",
        position: "Center",
        drafted: "2025, 2nd overall (1st round, 2nd pick)",
        points: "18",
        goals: "7",
        assists: "11",
        gp: "42",
        img: "https://media.nbcsportsbayarea.com/2025/10/Michael-Misa-Sharks.jpg?quality=85&strip=all&resize=1200%2C675",
        alt: "Michael Misa looks a bit nervous before his first NHL game"
    },
    player20: {
        name: "Adam Gaudette",
        number: "81",
        position: "Right Wing",
        drafted: "2015, 149th overall (5th round, 28th pick)",
        points: "25",
        goals: "17",
        assists: "8",
        gp: "64",
        img: "https://deweb-519a7.b-cdn.net/post-images/7f2f9f91-477d-4ff5-894e-8352d8532495.jpeg",
        alt: "Adam Gaudette shows off his sick flow without a helmet on"
    },
    player21: {
        name: "Pavol Regenda",
        number: "84",
        position: "Left Wing",
        drafted: "Undrafted",
        points: "10",
        goals: "9",
        assists: "1",
        gp: "23",
        img: "https://s3951.pcdn.co/wp-content/uploads/2025/10/Pavol-Regenda-Sharks-1536x1023.jpg",
        alt: "Pavol Regenda on the ice looking very focused"
    },
    player22: {
        name: "Sha(r)kir Mukhamadullin",
        number: "85",
        position: "Defense",
        drafted: "2020, 20th overall (1st round, 20th pick)",
        points: "12",
        goals: "5",
        assists: "7",
        gp: "47",
        img: "https://www.mercurynews.com/wp-content/uploads/2024/12/BNG-L-SHARKS-1218-27.jpg?w=1401",
        alt: "Shakir Mukhamadullin looks focused and Russian"
    },
    player23: {
        name: "Phillipp Kurashev",
        number: "96",
        position: "Center",
        drafted: "2018, 120th overall (4th round, 27th pick)",
        points: "20",
        goals: "7",
        assists: "13",
        gp: "42",
        img: "https://img.blick.ch/incoming/21442863-v2-gettyimages-2247129317.jpg?imwidth=2000&ratio=16_9&x=1507&y=386&width=1641&height=924",
        alt: "Phillipp Kurashev celebrates a goal"
    },
    player24: {
        name: "Nick Leddy",
        number: "4",
        position: "Defense",
        drafted: "2009, 16th overall (1st round, 16th pick)",
        points: "7",
        goals: "1",
        assists: "6",
        gp: "32",
        img: "https://www.yardbarker.com/media/1/6/16d6ae87c56d67fa4b6878411775c78fd6694fdf/thumb_16x9/oct-11-2025-san-jose-california-usa-san-jose.jpg",
        alt: "Nick Leddy shows off his ugly beard and bad vibes"
    },
    player25: {
        name: "Dmitry Orlov",
        number: "9",
        position: "Defense",
        drafted: "2009, 55th overall (2nd round, 25th pick)",
        points: "36",
        goals: "3",
        assists: "33",
        gp: "79",
        img: "https://sanjosehockeynow.com/wp-content/uploads/sites/7/2025/12/Orlov-HS_Sharks_vs_Vegas_0039-scaled.jpg",
        alt: "Dmitry Orlov always has his mouth open, what's up with that?"
    },
    player26: {
        name: "Luca Cagnoni",
        number: "42",
        position: "Defense",
        drafted: "2023, 123rd overall (4th round, 27th pick)",
        points: "2",
        goals: "0",
        assists: "2",
        gp: "6",
        img: "https://static01.nyt.com/athletic/uploads/wp/2025/04/07102954/USATSI_25745787-1024x683.jpg?width=1000&quality=70&auto=webp",
        alt: "Luca Cagnoni looking focused on the ice during his NHL debut"
    },
}

// Function purpose: sort the boxes by a given key and fill in information for each player
// Troubleshooting in conjunction with Claude, because JS is hard for me. FYI Claude was wrong half the time, like pair programming with an idiot except we're both idiots
function sortPlayers(key) {
    // Looks like class 3 map demo with pizza markers, except there's some format issues
    // Convert roster object to array so we can sort
    const rosterArray = Object.entries(roster).map(([key, p]) => ({ key, ...p }));

    // Sort roster by the key (number or points), making sure the key is treated as a number for sorting purposes (since it's currently a string in the roster object)
    // Also, sort the jerseys by ascending number but points and games played should show the higher number first. Mostly for intuition!
    if (key == 'number') {
        rosterArray.sort((a, b) => Number(a[key]) - Number(b[key]));
    } else {
        rosterArray.sort((a, b) => Number(b[key]) - Number(a[key]));
    }

    // Update each player element's order and content
    rosterArray.forEach((player, index) => {
        const playerEl = document.getElementById('player' + (index + 1)); 
        if (!playerEl) return;
        
        // Set CSS order so the flex container reorders visually (note: this does not change for screenreaders - not accessible!)
        playerEl.style.order = index;

        // Each player has their own flip box content element, which is what we need to be updating!
        const contentEl = playerEl.querySelector('.flip-box-content');

        if (player.position == 'Goalie') {
            // If the player is a goalie, we want to change the points label to wins and saves
            contentEl.innerHTML = `
                <h3>${player.name}<br>#${player.number}</h3>
                <p><b>Position:</b> ${player.position}<br>
                <b>Drafted:</b> ${player.drafted}<br>
                <b>Wins:</b> ${player.points} in ${player.gp} games<br>
                <b>Save Percentage:</b> ${player.sv}
            </p>
            `;
        } else {
        // Update the box text for all other skaters
            contentEl.innerHTML = `
                <h3>${player.name}<br>#${player.number}</h3>
                <p>
                    <b>Position:</b> ${player.position}<br>
                    <b>Drafted:</b> ${player.drafted}<br>
                    <b>Points:</b> ${player.points} (${player.goals} G, ${player.assists} A)<br>
                    <b>Games Played:</b> ${player.gp}
                </p>
            `;}
            // Also update the image and its alt text!
        playerEl.querySelector('.flip-box-front img').src = player.img;
        playerEl.querySelector('.flip-box-front img').alt = player.alt;    
    });
}

// Add event listeners to the sort buttons so we know what to do when they're clicked
document.getElementById('sortPoints').addEventListener('click', () => sortPlayers('points'));
document.getElementById('sortNumber').addEventListener('click', () => sortPlayers('number'));
document.getElementById('sortGames').addEventListener('click', () => sortPlayers('gp'));

// The default view will be to sort by jersey number, so call that function on page load
sortPlayers('number');

// Dealing with the collapsible menu when clicked, from the W3Schools tutorial: https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 