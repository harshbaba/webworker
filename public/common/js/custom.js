jQuery(document).ready(function(){
	
	var users = [
		{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
		address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
		geo: {
		lat: "-37.3159",
		lng: "81.1496"
		}
		},
		phone: "1-770-736-8031 x56442",
		website: "hildegard.org",
		company: {
		name: "Romaguera-Crona",
		catchPhrase: "Multi-layered client-server neural-net",
		bs: "harness real-time e-markets"
		}
		},
		{
		id: 2,
		name: "Ervin Howell",
		username: "Antonette",
		email: "Shanna@melissa.tv",
		address: {
		street: "Victor Plains",
		suite: "Suite 879",
		city: "Wisokyburgh",
		zipcode: "90566-7771",
		geo: {
		lat: "-43.9509",
		lng: "-34.4618"
		}
		},
		phone: "010-692-6593 x09125",
		website: "anastasia.net",
		company: {
		name: "Deckow-Crist",
		catchPhrase: "Proactive didactic contingency",
		bs: "synergize scalable supply-chains"
		}
		},
		{
		id: 3,
		name: "Clementine Bauch",
		username: "Samantha",
		email: "Nathan@yesenia.net",
		address: {
		street: "Douglas Extension",
		suite: "Suite 847",
		city: "McKenziehaven",
		zipcode: "59590-4157",
		geo: {
		lat: "-68.6102",
		lng: "-47.0653"
		}
		},
		phone: "1-463-123-4447",
		website: "ramiro.info",
		company: {
		name: "Romaguera-Jacobson",
		catchPhrase: "Face to face bifurcated interface",
		bs: "e-enable strategic applications"
		}
		},
		{
		id: 4,
		name: "Patricia Lebsack",
		username: "Karianne",
		email: "Julianne.OConner@kory.org",
		address: {
		street: "Hoeger Mall",
		suite: "Apt. 692",
		city: "South Elvis",
		zipcode: "53919-4257",
		geo: {
		lat: "29.4572",
		lng: "-164.2990"
		}
		},
		phone: "493-170-9623 x156",
		website: "kale.biz",
		company: {
		name: "Robel-Corkery",
		catchPhrase: "Multi-tiered zero tolerance productivity",
		bs: "transition cutting-edge web services"
		}
		},
		{
		id: 5,
		name: "Chelsey Dietrich",
		username: "Kamren",
		email: "Lucio_Hettinger@annie.ca",
		address: {
		street: "Skiles Walks",
		suite: "Suite 351",
		city: "Roscoeview",
		zipcode: "33263",
		geo: {
		lat: "-31.8129",
		lng: "62.5342"
		}
		},
		phone: "(254)954-1289",
		website: "demarco.info",
		company: {
		name: "Keebler LLC",
		catchPhrase: "User-centric fault-tolerant solution",
		bs: "revolutionize end-to-end systems"
		}
		},
		{
		id: 6,
		name: "Mrs. Dennis Schulist",
		username: "Leopoldo_Corkery",
		email: "Karley_Dach@jasper.info",
		address: {
		street: "Norberto Crossing",
		suite: "Apt. 950",
		city: "South Christy",
		zipcode: "23505-1337",
		geo: {
		lat: "-71.4197",
		lng: "71.7478"
		}
		},
		phone: "1-477-935-8478 x6430",
		website: "ola.org",
		company: {
		name: "Considine-Lockman",
		catchPhrase: "Synchronised bottom-line interface",
		bs: "e-enable innovative applications"
		}
		},
		{
		id: 7,
		name: "Kurtis Weissnat",
		username: "Elwyn.Skiles",
		email: "Telly.Hoeger@billy.biz",
		address: {
		street: "Rex Trail",
		suite: "Suite 280",
		city: "Howemouth",
		zipcode: "58804-1099",
		geo: {
		lat: "24.8918",
		lng: "21.8984"
		}
		},
		phone: "210.067.6132",
		website: "elvis.io",
		company: {
		name: "Johns Group",
		catchPhrase: "Configurable multimedia task-force",
		bs: "generate enterprise e-tailers"
		}
		},
		{
		id: 8,
		name: "Nicholas Runolfsdottir V",
		username: "Maxime_Nienow",
		email: "Sherwood@rosamond.me",
		address: {
		street: "Ellsworth Summit",
		suite: "Suite 729",
		city: "Aliyaview",
		zipcode: "45169",
		geo: {
		lat: "-14.3990",
		lng: "-120.7677"
		}
		},
		phone: "586.493.6943 x140",
		website: "jacynthe.com",
		company: {
		name: "Abernathy Group",
		catchPhrase: "Implemented secondary concept",
		bs: "e-enable extensible e-tailers"
		}
		},
		{
		id: 9,
		name: "Glenna Reichert",
		username: "Delphine",
		email: "Chaim_McDermott@dana.io",
		address: {
		street: "Dayna Park",
		suite: "Suite 449",
		city: "Bartholomebury",
		zipcode: "76495-3109",
		geo: {
		lat: "24.6463",
		lng: "-168.8889"
		}
		},
		phone: "(775)976-6794 x41206",
		website: "conrad.com",
		company: {
		name: "Yost and Sons",
		catchPhrase: "Switchable contextually-based project",
		bs: "aggregate real-time technologies"
		}
		},
		{
		id: 10,
		name: "Clementina DuBuque",
		username: "Moriah.Stanton",
		email: "Rey.Padberg@karina.biz",
		address: {
		street: "Kattie Turnpike",
		suite: "Suite 198",
		city: "Lebsackbury",
		zipcode: "31428-2261",
		geo: {
		lat: "-38.2386",
		lng: "57.2232"
		}
		},
		phone: "024-648-3804",
		website: "ambrose.net",
		company: {
		name: "Hoeger LLC",
		catchPhrase: "Centralized empowering task-force",
		bs: "target end-to-end models"
		}
		}
	];

	var userData = {
		"usersList"		: users,
		"userId"		: 0,
		"currentUser"	: null
	};
	
	//console.log(users);

	function createGrid(usersList, done){
		var html = '';
		for(var i = 0; i < 5 && i < usersList.length; i++){
			html += '<li>'+
						'<div class="user-ind">'+
							'<div class="user-pic">'+
								'<img src="common/images/placeholder.jpeg" alt="" />'+
							'</div>'+
							'<div class="user-short-details">'+
								'<div class="short-details">'+
									'<h3>'+usersList[i].name+'</h3>'+
									'<p><a href="mailTo:'+usersList[i].email+'" target="_blank">'+usersList[i].email+'</a></p>'+
								'</div>'+
								'<div class="user-know-more">'+
									'<a class="know-more-btn" href="#" data-userId="'+usersList[i].id+'">'+
										'Know More'+
									'</a>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</li>';
		}
		done(html);
	}

	function loadUserPopup(){
		$('.layout-overlay').fadeIn(300);
		$('.layout-popup-wrap').fadeIn(600);
		userHtml = '';
		$('.popup-header > h3').html(userData.currentUser.name);
		var userHtml = '<p><label>Address:</label>'+userData.currentUser.address.suite+' '+userData.currentUser.address.street+' '+userData.currentUser.address.city+' '+userData.currentUser.address.zipcode+'</p>'+
						'<p><label>Phone:</label>'+userData.currentUser.phone+'</p>'+
						'<p><label>Company Name:</label>'+userData.currentUser.company.name+'</p>'+
						'<p><label>Website:</label>'+userData.currentUser.website+'</p>';
		$('.useraddress-box').html(userHtml);

		$('.close-popup-btn').click(function(event){
			$('.layout-overlay').fadeOut(400);
			$('.layout-popup-wrap').fadeOut(200);
			$('.popup-header > h3').html('');
			$('.useraddress-box').html('');
			event.preventDefault();
		});
	}

	function loadGridEvents(){
		$('.user-know-more > .know-more-btn').on('click', function(event){
			userData.userId = $(this).attr('data-userid');
			//console.log(userData.userId);
			var index = _.findIndex(users, function(usersI) { return usersI.id == userData.userId })
			userData.currentUser = userData.usersList[index];
			//console.log(users[index]);
			loadUserPopup();
			event.preventDefault();
		});
	}

	createGrid(users, function(gridHtml){
		$('.users-list-box > .users-list').html(gridHtml);
		loadGridEvents();
	});

	$('.pagination-list > li > a').click(function(event){

		if(!$(this).parent().hasClass('active')){
			var pageId = $(this).attr('data-pageid');
			var userListPage = users.slice((pageId-1)*5, pageId*5);
			console.log(userListPage);
			$('.pagination-list > li').removeClass('active');
			$(this).parent('li').addClass('active');
			$('.page-loader').addClass('show');
			setTimeout(function(){
				$('.page-loader').removeClass('show');
				createGrid(userListPage, function(gridHtml){
					$('.users-list-box > .users-list').html(gridHtml);
					loadGridEvents();
				});
			},2000);
		}
		event.preventDefault();
	});

	$('#sort-by').change(function(){
		$('.page-loader').addClass('show');
		var sortByvalue = $(this).find(":selected").val();
		var sortedArray = [];
		console.log(sortByvalue);
		if(sortByvalue == 'asc'){
			console.log('reverse');
			
			sortedArray = _.sortBy(users,'name');
			console.log(sortedArray);
		}
		else{
			sortedArray = _.sortBy(users,'name').reverse();
			console.log('reverse');
			console.log(sortedArray);
		}
		$('.page-loader').addClass('show');
		setTimeout(function(){
			$('.page-loader').removeClass('show');
			createGrid(sortedArray, function(gridHtml){
				$('.users-list-box > .users-list').html(gridHtml);
				loadGridEvents();
			});
		},1000);
	});
});


var statesList = [
	{
		stateName	:"Uttar Pradesh",
		stateCode	:"up",
		cities		:[
			{
				cityName:"Noida",
				cityCode:"noida",
			},
			{
				cityName:"Muzaffar Nagar",
				cityCode:"muzaffarNagar",
			},
			{
				cityName:"Sitapur",
				cityCode:"sitapur",
			}
		]
	}
]

var dates = [
		{
			date:"20170425",
			states:{
				up:{
					cities:[
						{
							cityCode:"noida",
							//givenData
							total:113,
							newCaseCount:1,
							totalRecovered:59,
							totalDeaths:0,
							//we can add new keys just based on calculation
							newRecoveredCount: 2,
							newDeathsCount: 0
						}
					]
				}
			},
			
		}
]
				

