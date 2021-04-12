const teamCardsHolder = document.querySelector(".team-cards");

const aboutMeSnippits = [
  "I want you looking fly!",
  "I want you to smile!",
  "I care about customer service.",
  "Your satisfaction is my top priority!",
  "I love shoes!",
  "I'm a total clean freak!",
  "I excel in quality and precision.",
  "I do what's right.",
];

const jobTitles = [
  "Store Manager",
  "Assistant Manager",
  "Client Services",
  "Client Services",
  "Restoration Engineer",
  "Restoration Engineer",
  "Restoration Engineer",
  "Restoration Engineer",
];

const getTeamInfo = async () => {
  //   if (teamCardsHolder !== 0) {
  //     teamCardsHolder.innerHTML = "";
  //   }
  const allTeamMembers = await fetch(
    "https://randomuser.me/api/?inc=name,picture&results=8&nat=us"
  );
  const teamMembersForSite = await allTeamMembers.json();
  for (let i = 0; i < 8; i++) {
    const teamMemberCard = document.createElement("div");
    const teamMemberImage = document.createElement("img");
    const teamMemberName = document.createElement("h3");
    const teamMemberTitle = document.createElement("h4");
    const firstName = teamMembersForSite.results[i].name.first;
    const lastName = teamMembersForSite.results[i].name.last;
    const image = teamMembersForSite.results[i].picture.large;
    const fullName = `${firstName} ${lastName}`;
    teamMemberName.innerHTML = fullName;
    teamMemberImage.src = image;
    const teamMemberAboutMe = document.createElement("h4");
    const jobTitle = jobTitles[i];
    const aboutMe = aboutMeSnippits[i];
    teamMemberAboutMe.innerHTML = aboutMe;
    teamMemberTitle.innerHTML = jobTitle;
    teamMemberCard.append(
      teamMemberImage,
      teamMemberName,
      teamMemberTitle,
      teamMemberAboutMe
    );
    teamCardsHolder.append(teamMemberCard);
  }
};

getTeamInfo();
