// const teamMemberCard = document.createElement("div");
// const teamMemberImage = document.createElement("img");
// const teamMemberName = document.createElement("h3");
// teamMemberName.id = "name";
// const teamMemberTitle = document.createElement("h4");
// teamMemberTitle.id = "title";
const teamMemberAboutMe = document.createElement("h4");
teamMemberAboutMe.id = "about-me";
const teamCardsHolder = document.querySelector(".team-cards");

const aboutMeSnippits = [
  "I love shoes!",
  "I'm a total clean freak!",
  "I care about customer service.",
  "I excel in quality and precision.",
  "I do what's right.",
  "I want you looking fly!",
  "Your satisfaction is my top priority!",
  "I want you to smile!",
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
  for (let person of teamMembersForSite.results) {
    const teamMemberCard = document.createElement("div");
    const teamMemberImage = document.createElement("img");
    const teamMemberName = document.createElement("h3");
    teamMemberName.id = "name";
    const teamMemberTitle = document.createElement("h4");
    teamMemberTitle.id = "title";
    const firstName = person.name.first;
    const lastName = person.name.last;
    const image = person.picture.large;
    const fullName = `${firstName} ${lastName}`;
    teamMemberName.innerHTML = fullName;
    teamMemberImage.src = image;
    teamMemberCard.append(teamMemberImage, teamMemberName);
    teamCardsHolder.append(teamMemberCard);
  }
};

getTeamInfo();
