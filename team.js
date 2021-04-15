const teamCardsHolder = document.querySelector("#team-cards");
const houstonButton = document.querySelector("#houston");
const atlantaButton = document.querySelector("#atlanta");
const tampaButton = document.querySelector("#tampa");

const houstonAboutMeSnippits = [
  "I want you looking fly!",
  "I want you to smile!",
  "I care about customer service.",
  "Your satisfaction is my top priority!",
  "I love shoes!",
  "I'm a total clean freak!",
  "I excel in quality and precision.",
  "I do what's right.",
];

const atlantaAboutMeSnippits = [
  "Change the world by being yourself!",
  "I aspire to inspire.",
  "My work is my passion.",
  "I love polishing your shoe diamonds!",
  "I am focused and driven!",
  "I strive for greatness.",
  "I'll care for your shoes like they're my own.",
  "I'm proud of my work.",
];

const tampaAboutMeSnippits = [
  "We are number 1!",
  `'Shoes' is the answer to all questions.`,
  "Nobody's perfect, but your shoes can be!",
  "Stay fresh.",
  "Stand out in the crowd.",
  "#shoesonpoint",
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

const getHoustonTeamInfo = async () => {
  if (teamCardsHolder !== 0) {
    teamCardsHolder.innerHTML = "";
  }
  const allTeamMembers = await fetch(
    "https://randomuser.me/api/?inc=name,picture&results=8&nat=us"
  );
  const teamMembersForSite = await allTeamMembers.json();
  for (let i = 0; i < 8; i++) {
    const teamMemberCard = document.createElement("div");
    teamMemberCard.className = "card";
    teamMemberCard.style.width = "15rem";
    const teamMemberImage = document.createElement("img");
    teamMemberImage.className = "card-img-top";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const nameHolder = document.createElement("h5");
    nameHolder.className = "card-title";
    const createList = document.createElement("ul");
    createList.className = "list-group list-group-flush";
    const jobTitleHolder = document.createElement("li");
    jobTitleHolder.className = "list-group-item";
    const aboutMeHolder = document.createElement("li");
    aboutMeHolder.className = "list-group-item";
    aboutMeHolder.id = "about-me-box";
    const firstName = teamMembersForSite.results[i].name.first;
    const lastName = teamMembersForSite.results[i].name.last;
    const image = teamMembersForSite.results[i].picture.large;
    const fullName = `${firstName} ${lastName}`;
    const jobTitle = jobTitles[i];
    const aboutMe = houstonAboutMeSnippits[i];
    aboutMeHolder.innerHTML = aboutMe;
    jobTitleHolder.innerHTML = jobTitle;
    createList.append(jobTitleHolder, aboutMeHolder);
    nameHolder.innerHTML = fullName;
    cardBody.append(nameHolder);
    teamMemberImage.src = image;
    teamMemberCard.append(teamMemberImage, cardBody, createList);
    teamCardsHolder.append(teamMemberCard);
  }
};

const getAtlantaTeamInfo = async () => {
  if (teamCardsHolder !== 0) {
    teamCardsHolder.innerHTML = "";
  }
  const allTeamMembers = await fetch(
    "https://randomuser.me/api/?inc=name,picture&results=8&nat=us"
  );
  const teamMembersForSite = await allTeamMembers.json();
  for (let i = 0; i < 8; i++) {
    const teamMemberCard = document.createElement("div");
    teamMemberCard.className = "card";
    teamMemberCard.style.width = "15rem";
    const teamMemberImage = document.createElement("img");
    teamMemberImage.className = "card-img-top";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const nameHolder = document.createElement("h5");
    nameHolder.className = "card-title";
    const createList = document.createElement("ul");
    createList.className = "list-group list-group-flush";
    const jobTitleHolder = document.createElement("li");
    jobTitleHolder.className = "list-group-item";
    const aboutMeHolder = document.createElement("li");
    aboutMeHolder.className = "list-group-item";
    aboutMeHolder.id = "about-me-box";
    const firstName = teamMembersForSite.results[i].name.first;
    const lastName = teamMembersForSite.results[i].name.last;
    const image = teamMembersForSite.results[i].picture.large;
    const fullName = `${firstName} ${lastName}`;
    const jobTitle = jobTitles[i];
    const aboutMe = atlantaAboutMeSnippits[i];
    aboutMeHolder.innerHTML = aboutMe;
    jobTitleHolder.innerHTML = jobTitle;
    createList.append(jobTitleHolder, aboutMeHolder);
    nameHolder.innerHTML = fullName;
    cardBody.append(nameHolder);
    teamMemberImage.src = image;
    teamMemberCard.append(teamMemberImage, cardBody, createList);
    teamCardsHolder.append(teamMemberCard);
  }
};

const getTampaTeamInfo = async () => {
  if (teamCardsHolder !== 0) {
    teamCardsHolder.innerHTML = "";
  }
  const allTeamMembers = await fetch(
    "https://randomuser.me/api/?inc=name,picture&results=8&nat=us"
  );
  const teamMembersForSite = await allTeamMembers.json();
  for (let i = 0; i < 6; i++) {
    const teamMemberCard = document.createElement("div");
    teamMemberCard.className = "card";
    teamMemberCard.style.width = "15rem";
    const teamMemberImage = document.createElement("img");
    teamMemberImage.className = "card-img-top";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const nameHolder = document.createElement("h5");
    nameHolder.className = "card-title";
    const createList = document.createElement("ul");
    createList.className = "list-group list-group-flush";
    const jobTitleHolder = document.createElement("li");
    jobTitleHolder.className = "list-group-item";
    const aboutMeHolder = document.createElement("li");
    aboutMeHolder.className = "list-group-item";
    aboutMeHolder.id = "about-me-box";
    const firstName = teamMembersForSite.results[i].name.first;
    const lastName = teamMembersForSite.results[i].name.last;
    const image = teamMembersForSite.results[i].picture.large;
    const fullName = `${firstName} ${lastName}`;
    const jobTitle = jobTitles[i];
    const aboutMe = tampaAboutMeSnippits[i];
    aboutMeHolder.innerHTML = aboutMe;
    jobTitleHolder.innerHTML = jobTitle;
    createList.append(jobTitleHolder, aboutMeHolder);
    nameHolder.innerHTML = fullName;
    cardBody.append(nameHolder);
    teamMemberImage.src = image;
    teamMemberCard.append(teamMemberImage, cardBody, createList);
    teamCardsHolder.append(teamMemberCard);
  }
};

houstonButton.addEventListener("click", (e) => {
  getHoustonTeamInfo();
});

atlantaButton.addEventListener("click", (e) => {
  getAtlantaTeamInfo();
});

tampaButton.addEventListener("click", (e) => {
  getTampaTeamInfo();
});
