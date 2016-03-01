// HEADER AND INTRO
var bio = {
	"name": "Aldi Zhupani",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "510-529-1247",
		"email": "aldizhupani@gmail.com",
		"github": "www.github.com/Aldizh",
		"linkedin": "@aldi zhupani",
		"location": "Dallas, Texas"
	},
	"welcomeMessage": "Hi, I love solving puzzles math has been my passion since i was a little kid.",
	"skills": ["Team Leader", "Documenting Processes", "Object Oriented Programming", "RoR", "Python"],
	"biopic": "images/me.jpg"
};

// This is the function for internationalizing name
function inName() {
  namesArray = bio.name.trim().split(" ");
  return namesArray[0] + " " + (namesArray[1].toUpperCase());
}

//$("#main").prepend(internationalizeButton);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
bio.display = function() {
	//Contact part
	var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedHTMLlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);

	$("#topContacts").prepend(formattedHTMLmobile);
	$("#topContacts").prepend(formattedHTMLemail);
	$("#topContacts").prepend(formattedHTMLlinkedin);
	$("#topContacts").prepend(formattedHTMLgithub);
	$("#topContacts").prepend(formattedHTMLlocation);

	$("#footerContacts").append(formattedHTMLmobile);
	$("#footerContacts").append(formattedHTMLemail);
	$("#footerContacts").append(formattedHTMLlinkedin);
	$("#footerContacts").append(formattedHTMLgithub);
	$("#footerContacts").append(formattedHTMLlocation);

	$("#header").append(formattedMessage);
	$("#header").append(formattedPic);
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills){
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
	}
}
bio.display();


//WORK
var work = {
	"jobs": [
		{
			"employer": "Copart",
			"title": "Software Developer",
			"location": "Dallas, TX",
			"dates": "2015-2016",
			"description": "Developing industry standard web applications which serve as the key compoent in day to day operations within the company"
		},
		{
			"employer": "Ciao Telecom",
			"title": "Software Developer",
			"location": "Dallas, TX",
			"dates": "2013-2014",
			"description": "Developing VoIP and CRM Applications"
		}
	]
};

work.display = function() {
	$('#workExperience').append(HTMLworkStart);
	for (var i in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		$(".work-entry:last").append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedTitle);
		var formattedDates= HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();


//EDUCATION
var education = {
	"schools": [
		{
			"name": "Diabo Valley College",
			"location": "Pleasant Hill, California",
			"degree": "Associates",
			"majors": ["Computer Science", "English"],
			"dates": "2009-2011",
			"url": "#"
		},
		{
			"name": "UC Berkeley",
			"location": "Berkeley, California",
			"degree": "Bachelors",
			"majors": ["Computer Science", "Economics"],
			"dates": "2011-2013",
			"url": "#"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Programming",
			"school": "Udacity",
			"date": "2016",
			"url": "www.udacity.com"
		},
		{
			"title": "SQL Introduction",
			"school": "Code School",
			"date": "2014",
			"url": "www.codeschool.com"
		}
	]
};

education.display = function() {
	for (var i in education.schools) {
		$('#education').append(HTMLschoolStart);
	 	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates= HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors.join());
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$('#education').append(HTMLonlineClasses);
	for (var i in education.onlineCourses) {
		$('#education').append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates= HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		$(".education-entry:last").append(formattedDates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedUrl);
	}
}
education.display();


// PROJECTS
var projects = [
	{
		"title": "Pacman",
		"dates": "2011",
		"description": "Based on the pacman game, implement an pacman agent that will finish the game in the fastest possible way",
		"images": ["images/pacman.png"]
	},
	{
		"title": "Copart Web App",
		"dates": "2015",
		"description": "An application that enables yard employees to enter information into the main database/system",
		"images": ["images/copart.jpg"]
	}
]

for (var i in projects) {
	$('#projects').append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates= HTMLprojectDates.replace("%data%", projects[i].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
	$(".project-entry:last").append(formattedDescription);
	var formattedImage = HTMLprojectImage.replace("%data%", projects[i].images[0]);
	$(".project-entry:last").append(formattedImage);
}

// Adding the map section
$("#mapDiv").append(googleMap);

