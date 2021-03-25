$(document).ready(function() {
					
	// VARIABLES
	var aboutTheShowIsOpen = false;
	var mobileAboutTheShowIsOpen = false;
	var mobileSortButtonIsOpen = false;
	
	
	// EVENT HANDLERS

		// ABOUT THE SHOW BUTTON
		$('.aboutTheShowButton').on('click', function(event){
			event.preventDefault();
			if(aboutTheShowIsOpen == false){
				$('.aboutTheShowContent').css({'transform':'scale(1)'});
				$('.atsBackgroundCircle').fadeOut(1000);

				aboutTheShowIsOpen = true;
			} else if(aboutTheShowIsOpen == true){
				$('.aboutTheShowContent').css({'transform':'scale(0)'});
				$('.atsBackgroundCircle').fadeIn(1000);

				aboutTheShowIsOpen = false;
			}
		});

		//MOBILE ABOUT THE SHOW BUTTON
		$('.mobileAboutTheShowButton').on('click', function(event){
			event.preventDefault();
			console.log('hit');
			if(mobileAboutTheShowIsOpen == false){

				$('.mobileAboutTheShowContent').css({'transform':'scale(1)'});
				$('.matsBackgroundCircle').fadeOut(1000);

				mobileAboutTheShowIsOpen = true;
			} else if(mobileAboutTheShowIsOpen == true){
				$('.mobileAboutTheShowContent').css({'transform':'scale(0)'});
				$('.matsBackgroundCircle').fadeIn(1000);

				mobileAboutTheShowIsOpen = false;
			}
		});

		//MOBILE SORT BUTTON
		$('.mobileSortButton').on('click', function(event){
			event.preventDefault();
			// $(this).css({'opacity':'0'});
			$('.headerButtonContainer').toggleClass('headerButtonContainerExpand');
			// if (mobileSortButtonIsOpen == false){
			// 	$('.headerButtonContainer').addClass('headerButtonContainerExpand');
			// 	mobileSortButtonIsOpen = true;
			// } else if (mobileSortButtonIsOpen == true){
			// 	$('.headerButtonContainer').removeClass('headerButtonContainerExpand');
			// 	mobileSortButtonIsOpen = false;
			// }

		});


		$('.scrollDownButton').on('click', function(){
			event.preventDefault();
			goToTopOfList();
		});
		$('.mobileScrollDownButton').on('click', function(){
			event.preventDefault();
			mobileGoToTop();
		});
		$('.headerLogo').on('click', function(event){
			event.preventDefault();
			mobileGoToTop();
		});


		
		//STUDENT SECTION HOVER STATES
		$('.studentSection').hover(
			function () {
				//DESKTOP
				if (window.matchMedia('(min-width:1025px)').matches){
					bgColor = $(this).attr("data-backgroundColor");
					$('body').addClass(bgColor);
					headerBackgroundColor = $(this).attr("data-headerBackgroundColor");
					$('.headerContainer').addClass(headerBackgroundColor);
					$('.landingPageBackground').addClass(headerBackgroundColor);
					$('.headerLandingPageBumper').addClass(headerBackgroundColor);
					headerTextColor = $(this).attr("data-headerTextColor");
					$('.spnHeader').addClass(headerTextColor);
					bodyTextColor = $(this).attr("data-bodyTextColor");
					$('.sortCriteria').addClass(bodyTextColor);
					$('.shcName').addClass(bodyTextColor);
					$('.sscParagraph').addClass(bodyTextColor);
					linkTextColor = $(this).attr("data-linkTextColor");
					$('.checkItOut').addClass(linkTextColor);
					$('.seeMoreButton').addClass(linkTextColor);
					headerButtonColor = $(this).attr("data-headerButtonColor");
					$('.hbcButton').addClass(headerButtonColor);
					headerSelected = $(this).attr("data-headerSelected");
					$('.selected').addClass(headerSelected);
					borderColor = $(this).attr("data-borderColor");
					$('.studentSection').addClass(borderColor);
					headerLogo = $(this).attr("data-headerLogoColor");
					$('.headerLogo').addClass(headerLogo);
					subHeaderColor = $(this).attr("data-subHeaderColor");
					$('.headerSubHeader').addClass(subHeaderColor);
					$('.sortLabel').addClass(subHeaderColor);
					arrowStem = $(this).attr("data-arrowStem");
					$('.slArrowStem').addClass(arrowStem);
					arrowHead = $(this).attr("data-arrowHead");
					$('.slArrowHead').addClass(arrowHead);
					liveButton = $(this).attr('data-liveButton');
					$('.liveButton').addClass(liveButton);
					liveText = $(this).attr('data-liveText');
					$('.liveText').addClass(liveText);
					liveDot = $(this).attr('data-liveDot');
					$('.liveDot').addClass(liveDot);


				}},
				function() {
					if (window.matchMedia('(min-width:1025px)').matches){
						$('body').removeClass(bgColor)
						$('.headerContainer').removeClass(headerBackgroundColor);
						$('.landingPageBackground').removeClass(headerBackgroundColor);
						$('.headerLandingPageBumper').removeClass(headerBackgroundColor);
						$('.spnHeader').removeClass(headerTextColor);
						$('.sortCriteria').removeClass(bodyTextColor);
						$('.shcName').removeClass(bodyTextColor);
						$('.sscParagraph').removeClass(bodyTextColor);
						$('.checkItOut').removeClass(linkTextColor);
						$('.seeMoreButton').removeClass(linkTextColor);
						$('.hbcButton').removeClass(headerButtonColor);
						$('.selected').removeClass(headerSelected);
						$('.studentSection').removeClass(borderColor);
						// $('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
						$('.headerLogo').removeClass(headerLogo);
						$('.headerSubHeader').removeClass(subHeaderColor);
						$('.sortLabel').removeClass(subHeaderColor);
						$('.slArrowStem').removeClass(arrowStem);
						$('.slArrowHead').removeClass(arrowHead);
						$('.liveButton').removeClass(liveButton);
						$('.liveText').removeClass(liveText);
						$('.liveDot').removeClass(liveDot);
					}
					
				}
		);
		$('.studentSection').each(function(event){
			commentExpanded=false;
			var button = $(this).find('.studentSectionHeader');
			var bumper = $(this).find('.studentSectionContent');
			var arrow = $(this).find('.checkItOut');

			$(button).on('click', function(event){
				if (window.matchMedia('(max-width:1024px)').matches){
					backgroundColor = $(this).attr('data-mobBackgroundColor');
					headerColor = $(this).attr('data-mobHeaderColor');
					headerLogo = $(this).attr('data-mobHeaderLogo');
					headerText = $(this).attr('data-mobHeaderText');
					bodyText = $(this).attr('data-mobBodyText');
					linkText = $(this).attr('data-mobLinkText');
					selected = $(this).attr('data-mobSelected');
					bigTextStroke = $(this).attr('data-mobBigTextStroke');
					bigTextColor = $(this).attr('data-mobBigTextColor');
					borderColor = $(this).attr('data-mobBorderColor');
					liveButton = $(this).attr('data-mobLiveButton');
					liveText = $(this).attr('data-mobLiveText');
					liveDot = $(this).attr('data-mobLiveDot');

					//SHRINK DRAWER
					if($(bumper).hasClass('drawerExpand') == true){

						$(bumper).removeClass('drawerExpand');

						$('body').css({'background-color':'#ffffff'});
						$('.headerContainer').css({'background-color':'#ffcc33'});
						$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
						$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
						$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
						$('.spnHeader').css({'color':'#ffffff'});
						$('.sortCriteria').css({'color':'#000000'});
						$('.shcName').css({'color':'#000000'});
						$('.checkItOut').css({'color':'#ffcc33'});
						$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
						$('.seeMoreButton').css({'color':'#ffcc33'});
						$('.hbcButton').css({'background-color':'#ffcc33'});
						$('.hbcButton h1').css({'color':'#000'});
						$('.selected h1').css({'color':'#000000'});
						$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
						$('.sscParagraph').css({'color':'#000000'});
						$('.mobileSortButton').css({'color':'#333333'});
						$('.headerLogo').css({'color':'#fff'});
						$('.mobileLiveButton').css({'border':'3px solid #f00'});
						$('.mobileLiveText').css({'color':'#f00'});
						$('.mobileLiveDot').css({'background-color':'#f00'});


					//EXPAND DRAWER
					} else if ($(bumper).hasClass('drawerExpand') == false) {

						console.log(backgroundColor);

						$('.studentSectionContent').removeClass('drawerExpand');
						$(bumper).addClass('drawerExpand');

						$('body').css({'background-color':backgroundColor});
						$('.headerContainer').css({'background-color':headerColor});
						$('.headerLogo').css({'color':headerLogo});
						$('.mobileLandingPageBackground').css({'background-color':headerColor});
						$('.headerLandingPageBumper').css({'background-color':headerColor});
						$('.spnHeader').css({'-webkit-text-stroke':bigTextStroke});
						$('.spnHeader').css({'color':bigTextColor});
						$('.sortCriteria').css({'color':bodyText});
						$('.shcName').css({'color':bodyText});
						$('.checkItOut').css({'color':linkText});
						$('.mobileSeeMoreButton').css({'color':linkText});
						$('.seeMoreButton').css({'color':linkText});
						$('.hbcButton').css({'background-color':headerColor});
						$('.hbcButton h1').css({'color':headerText});
						$('.selected h1').css({'color':selected});
						$('.studentSection').css({'border-bottom':borderColor});
						$('.sscParagraph').css({'color':bodyText});
						$('.mobileSortButton').css({'color':selected});
						$('.mobileLiveButton').css({'border':liveButton});
						$('.mobileLiveText').css({'color':liveText});
						$('.mobileLiveDot').css({'background-color':liveDot});

					}

				}
			});
		});

		$('.studentSection').each(function(event){
			commentExpanded=false;
			var button = $(this).find('.studentSectionHeader');
			var bumper = $(this).find('.studentSectionContent');
			var arrow = $(this).find('.checkItOut');


			$(button).on('click', function(event){

				if (window.matchMedia('(min-width:1025px)').matches){
					event.preventDefault();
					$(bumper).toggleClass('drawerExpand');
				} 
				
			});
		});

		



		// SCROLL BACK UP TO HEADER
		$(window).scroll(function(){
			event.preventDefault();
			st = $(window).scrollTop();

			if (st <= $('.headerLandingPageBumper').offset().top){
				if (window.matchMedia('(min-width:1025px)').matches){
					$('body').removeClass(bgColor);
					$('.headerContainer').removeClass(headerBackgroundColor);
					$('.landingPageBackground').removeClass(headerBackgroundColor);
					$('.headerLandingPageBumper').removeClass(headerBackgroundColor);
					$('.spnHeader').removeClass(headerTextColor);
					$('.shcName').removeClass(bodyTextColor);
					$('.sscParagraph').removeClass(bodyTextColor);
					$('.checkItOut').removeClass(linkTextColor);
					$('.seeMoreButton').removeClass(linkTextColor);
					$('.hbcButton').removeClass(headerButtonColor);
					$('.selected').removeClass(headerSelected);
					$('.studentSection').removeClass(borderColor);
					$('.headerLogo').removeClass(headerLogo);
					$('.headerSubHeader').removeClass(subHeaderColor);
				} else if (window.matchMedia('(max-width:1024px)').matches){

					$('body').css({'background-color':'#ffffff'});
					$('.headerContainer').css({'background-color':'#ffcc33'});
					$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
					$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
					$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
					$('.spnHeader').css({'color':'#ffffff'});
					$('.sortCriteria').css({'color':'#000000'});
					$('.shcName').css({'color':'#000000'});
					$('.checkItOut').css({'color':'#ffcc33'});
					$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
					$('.hbcButton').css({'background-color':'#ffcc33'});
					$('.hbcButton h1').css({'color':'#000'});
					$('.selected h1').css({'color':'#000000'});
					$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
					$('.sscParagraph').css({'color':'#000000'});
					$('.mobileSortButton').css({'color':'#333333'});
					$('.headerLogo').css({'color':'#fff'});
				}
				

			}
		});

		//SORTING FUNCTIONS
		var $divs = $(".studentSection");


		$('.byName').on('click', function(){

			$('.byMiles').removeClass('selected');
		 	$('.byProject').removeClass('selected');
		 	$('.byMonth').removeClass('selected');
		 	$('.bySign').removeClass('selected');
		 	$('.byHeight').removeClass('selected');
		 	$('.byPower').removeClass('selected');
		 	$(this).addClass('selected');

		    var alphabeticallyOrderedDivsByName = $divs.sort(function(a,b){
		        return $(a).attr("data-tempLastName") - $(b).attr("data-tempLastName");
		    });

		    $('.studentSection').each(function(){
				var sortingCriteria = $(this).find('.sortCriteria');
				$(sortingCriteria).html('</br>');
		    });

		    $(".studentSectionContainer").html(alphabeticallyOrderedDivsByName);
		    $('.studentSectionContent').removeClass('drawerExpand');

		    if (window.matchMedia('(max-width:1024px)').matches){
		    	$('.headerButtonContainer').removeClass('headerButtonContainerExpand');

		    	$(this).addClass('selected');
		    	$('.byProject').removeClass('selected');
		    	$('.byMonth').removeClass('selected');
		    	$('.byMiles').removeClass('selected');


		    	$('.studentSectionContent').removeClass('drawerExpand');

				$('body').css({'background-color':'#ffffff'});
				$('.headerContainer').css({'background-color':'#ffcc33'});
				$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
				$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
				$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
				$('.spnHeader').css({'color':'#ffffff'});
				$('.sortCriteria').css({'color':'#000000'});
				$('.shcName').css({'color':'#000000'});
				$('.checkItOut').css({'color':'#ffcc33'});
				$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
				$('.hbcButton').css({'background-color':'#ffcc33'});
				$('.hbcButton h1').css({'color':'#000'});
				$('.selected h1').css({'color':'#000000'});
				$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
				$('.sscParagraph').css({'color':'#000000'});
				$('.mobileSortButton').css({'color':'#333333'});
				$('.headerLogo').css({'color':'#fff'});

		    	
		    }
		    mobileGoToTop();
		    // goToTopOfList();
		    addDynamicEventHandler();
		});

		$('.byProject').on('click', function(){

			$('.byMiles').removeClass('selected');
		 	$('.byMonth').removeClass('selected');
		 	$('.byName').removeClass('selected');
		 	$('.bySign').removeClass('selected');
		 	$('.byHeight').removeClass('selected');
		 	$('.byPower').removeClass('selected');
		 	$(this).addClass('selected');

		    var alphabeticallyOrderedDivsByProject = $divs.sort(function(a,b){
		        return $(a).attr("data-tempProjectName") - $(b).attr("data-tempProjectName");
		    });

		    $('.studentSection').each(function(){
				var sortingCriteria = $(this).find('.sortCriteria');
				$(sortingCriteria).html('</br>');
		    });

		    $(".studentSectionContainer").html(alphabeticallyOrderedDivsByProject);
		    $('.studentSectionContent').removeClass('drawerExpand');

		    if (window.matchMedia('(max-width:1024px)').matches){
		    	$('.headerButtonContainer').removeClass('headerButtonContainerExpand');

		    	$(this).addClass('selected');
		    	$('.byProject').removeClass('selected');
		    	$('.byMonth').removeClass('selected');
		    	$('.byMiles').removeClass('selected');


		    	$('.studentSectionContent').removeClass('drawerExpand');

				$('body').css({'background-color':'#ffffff'});
				$('.headerContainer').css({'background-color':'#ffcc33'});
				$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
				$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
				$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
				$('.spnHeader').css({'color':'#ffffff'});
				$('.sortCriteria').css({'color':'#000000'});
				$('.shcName').css({'color':'#000000'});
				$('.checkItOut').css({'color':'#ffcc33'});
				$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
				$('.hbcButton').css({'background-color':'#ffcc33'});
				$('.hbcButton h1').css({'color':'#000'});
				$('.selected h1').css({'color':'#000000'});
				$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
				$('.sscParagraph').css({'color':'#000000'});
				$('.mobileSortButton').css({'color':'#333333'});
				$('.headerLogo').css({'color':'#fff'});
		    }
		    
		    mobileGoToTop();
		    // goToTopOfList();
		    addDynamicEventHandler();
		});

		$('.byMiles').on('click', function(){


		 	$('.byName').removeClass('selected');
		 	$('.byProject').removeClass('selected');
		 	$('.byMonth').removeClass('selected');
		 	$('.bySign').removeClass('selected');
		 	$('.byHeight').removeClass('selected');
		 	$('.byPower').removeClass('selected');
		 	$(this).addClass('selected');


		    var orderedDivsByDistance = $divs.sort(function(a,b){
		        return $(a).attr("data-distance") - $(b).attr("data-distance");
		    });
		    $('.studentSection').each(function(){
		    	var distanceText = $(this).attr('data-prettyDistance');
				var sortingCriteria = $(this).find('.sortCriteria');
				$(sortingCriteria).html(distanceText);
		    });
		    $(".studentSectionContainer").html(orderedDivsByDistance);
		 
		    $('.studentSectionContent').removeClass('drawerExpand');

		    if (window.matchMedia('(max-width:1024px)').matches){
		    	$('.headerButtonContainer').toggleClass('headerButtonContainerExpand');

		    	$(this).addClass('selected');
		    	$('.byProject').removeClass('selected');
		    	$('.byMonth').removeClass('selected');
		    	$('.byMiles').removeClass('selected');


		    	$('.studentSectionContent').removeClass('drawerExpand');

				$('body').css({'background-color':'#ffffff'});
				$('.headerContainer').css({'background-color':'#ffcc33'});
				$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
				$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
				$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
				$('.spnHeader').css({'color':'#ffffff'});
				$('.sortCriteria').css({'color':'#000000'});
				$('.shcName').css({'color':'#000000'});
				$('.checkItOut').css({'color':'#ffcc33'});
				$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
				$('.hbcButton').css({'background-color':'#ffcc33'});
				$('.hbcButton h1').css({'color':'#000'});
				$('.selected h1').css({'color':'#000000'});
				$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
				$('.sscParagraph').css({'color':'#000000'});
				$('.mobileSortButton').css({'color':'#333333'});
				$('.headerLogo').css({'color':'#fff'});
		    }
		    
		    mobileGoToTop();
		    // goToTopOfList();
		    addDynamicEventHandler();
		});

		$('.byMonth').on('click', function(){

		 	$('.byName').removeClass('selected');
		 	$('.byProject').removeClass('selected');
		 	$('.byMiles').removeClass('selected');
		 	$(this).addClass('selected');

		    var orderedDivsByMonth = $divs.sort(function(a,b){
		        return $(a).attr("data-birthMonth") - $(b).attr("data-birthMonth");
		    });
		    $('.studentSection').each(function(){
		    	var monthText = $(this).attr('data-prettyBirthMonth');
		    	var sortingCriteria = $(this).find('.sortCriteria');
				$(sortingCriteria).html(monthText);
		    });
		    $(".studentSectionContainer").html(orderedDivsByMonth);
		    $('.studentSectionContent').removeClass('drawerExpand');

		    if (window.matchMedia('(max-width:1024px)').matches){
		    	$('.headerButtonContainer').toggleClass('headerButtonContainerExpand');

		    	$(this).addClass('selected');
		    	$('.byProject').removeClass('selected');
		    	$('.byMonth').removeClass('selected');
		    	$('.byMiles').removeClass('selected');


		    	$('.studentSectionContent').removeClass('drawerExpand');

				$('body').css({'background-color':'#ffffff'});
				$('.headerContainer').css({'background-color':'#ffcc33'});
				$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
				$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
				$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
				$('.spnHeader').css({'color':'#ffffff'});
				$('.sortCriteria').css({'color':'#000000'});
				$('.shcName').css({'color':'#000000'});
				$('.checkItOut').css({'color':'#ffcc33'});
				$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
				$('.hbcButton').css({'background-color':'#ffcc33'});
				$('.hbcButton h1').css({'color':'#000'});
				$('.selected h1').css({'color':'#000000'});
				$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
				$('.sscParagraph').css({'color':'#000000'});
				$('.mobileSortButton').css({'color':'#333333'});
				$('.headerLogo').css({'color':'#fff'});
		    }
		   
		   	mobileGoToTop();
		    // goToTopOfList();
		    addDynamicEventHandler()
		});

		$('.bySign').on('click', function(){

		 	$('.byName').removeClass('selected');
		 	$('.byProject').removeClass('selected');
		 	$('.byMiles').removeClass('selected');
		 	$('.byHeight').removeClass('selected');
		 	$('.byPower').removeClass('selected');
		 	$(this).addClass('selected');

		    var orderedDivsBySign = $divs.sort(function(a,b){
		        return $(a).attr("data-zodiac") - $(b).attr("data-zodiac");
		    });
		    $('.studentSection').each(function(){
		    	var signText = $(this).attr('data-prettyZodiac');
		    	var sortingCriteria = $(this).find('.sortCriteria');
				$(sortingCriteria).html(signText);
		    });
		    $(".studentSectionContainer").html(orderedDivsBySign);
		    $('.studentSectionContent').removeClass('drawerExpand');

		    if (window.matchMedia('(max-width:1024px)').matches){
		    	$('.headerButtonContainer').toggleClass('headerButtonContainerExpand');

		    	$(this).addClass('selected');
		    	$('.byProject').removeClass('selected');
		    	$('.byMonth').removeClass('selected');
		    	$('.byMiles').removeClass('selected');


		    	$('.studentSectionContent').removeClass('drawerExpand');

				$('body').css({'background-color':'#ffffff'});
				$('.headerContainer').css({'background-color':'#ffcc33'});
				$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
				$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
				$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
				$('.spnHeader').css({'color':'#ffffff'});
				$('.sortCriteria').css({'color':'#000000'});
				$('.shcName').css({'color':'#000000'});
				$('.checkItOut').css({'color':'#ffcc33'});
				$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
				$('.hbcButton').css({'background-color':'#ffcc33'});
				$('.hbcButton h1').css({'color':'#000'});
				$('.selected h1').css({'color':'#000000'});
				$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
				$('.sscParagraph').css({'color':'#000000'});
				$('.mobileSortButton').css({'color':'#333333'});
				$('.headerLogo').css({'color':'#fff'});
		    }
		   
		   	mobileGoToTop();
		    // goToTopOfList();
		    addDynamicEventHandler()
		});

		$('.byHeight').on('click', function(){


		 	$('.byName').removeClass('selected');
		 	$('.byProject').removeClass('selected');
		 	$('.byMonth').removeClass('selected');
		 	$('.bySign').removeClass('selected');
		 	$('.byMiles').removeClass('selected');
		 	$('.byPower').removeClass('selected');
		 	$(this).addClass('selected');


		    var orderedDivsByHeight = $divs.sort(function(a,b){
		        return $(a).attr("data-height") - $(b).attr("data-height");
		    });
		    $('.studentSection').each(function(){
		    	var distanceText = $(this).attr('data-prettyHeight');
				var sortingCriteria = $(this).find('.sortCriteria');
				$(sortingCriteria).html(distanceText);
		    });
		    $(".studentSectionContainer").html(orderedDivsByHeight);
		 
		    $('.studentSectionContent').removeClass('drawerExpand');

		    if (window.matchMedia('(max-width:1024px)').matches){
		    	$('.headerButtonContainer').toggleClass('headerButtonContainerExpand');

		    	$(this).addClass('selected');
		    	$('.byProject').removeClass('selected');
		    	$('.byMonth').removeClass('selected');
		    	$('.byMiles').removeClass('selected');
		    	$('.bySign').removeClass('selected');
		    	$('.byPower').removeClass('selected');


		    	$('.studentSectionContent').removeClass('drawerExpand');

				$('body').css({'background-color':'#ffffff'});
				$('.headerContainer').css({'background-color':'#ffcc33'});
				$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
				$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
				$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
				$('.spnHeader').css({'color':'#ffffff'});
				$('.sortCriteria').css({'color':'#000000'});
				$('.shcName').css({'color':'#000000'});
				$('.checkItOut').css({'color':'#ffcc33'});
				$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
				$('.hbcButton').css({'background-color':'#ffcc33'});
				$('.hbcButton h1').css({'color':'#000'});
				$('.selected h1').css({'color':'#000000'});
				$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
				$('.sscParagraph').css({'color':'#000000'});
				$('.mobileSortButton').css({'color':'#333333'});
				$('.headerLogo').css({'color':'#fff'});
		    }
		    
		    mobileGoToTop();
		    // goToTopOfList();
		    addDynamicEventHandler();
		});

		$('.byPower').on('click', function(){


		 	$('.byName').removeClass('selected');
		 	$('.byProject').removeClass('selected');
		 	$('.byMonth').removeClass('selected');
		 	$('.bySign').removeClass('selected');
		 	$('.byMiles').removeClass('selected');
		 	$('.byHeight').removeClass('selected');
		 	$(this).addClass('selected');


		    var orderedDivsByPower = $divs.sort(function(a,b){
		        return $(a).attr('data-superpower') - $(b).attr('data-superpower');
		    });
		    $('.studentSection').each(function(){
		    	var distanceText = $(this).attr('data-prettySuperpower');
				var sortingCriteria = $(this).find('.sortCriteria');
				$(sortingCriteria).html(distanceText);
		    });
		    $(".studentSectionContainer").html(orderedDivsByPower);
		 
		    $('.studentSectionContent').removeClass('drawerExpand');

		    if (window.matchMedia('(max-width:1024px)').matches){
		    	$('.headerButtonContainer').toggleClass('headerButtonContainerExpand');

		    	$(this).addClass('selected');
		    	$('.byProject').removeClass('selected');
		    	$('.byMonth').removeClass('selected');
		    	$('.byMiles').removeClass('selected');
		    	$('.bySign').removeClass('selected');
		    	$('.byHeight').removeClass('selected');


		    	$('.studentSectionContent').removeClass('drawerExpand');

				$('body').css({'background-color':'#ffffff'});
				$('.headerContainer').css({'background-color':'#ffcc33'});
				$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
				$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
				$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
				$('.spnHeader').css({'color':'#ffffff'});
				$('.sortCriteria').css({'color':'#000000'});
				$('.shcName').css({'color':'#000000'});
				$('.checkItOut').css({'color':'#ffcc33'});
				$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
				$('.hbcButton').css({'background-color':'#ffcc33'});
				$('.hbcButton h1').css({'color':'#000'});
				$('.selected h1').css({'color':'#000000'});
				$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
				$('.sscParagraph').css({'color':'#000000'});
				$('.mobileSortButton').css({'color':'#333333'});
				$('.headerLogo').css({'color':'#fff'});
		    }
		    
		    mobileGoToTop();
		    // goToTopOfList();
		    addDynamicEventHandler();
		});

		$(window).on('beforeunload', function() {
			if (window.matchMedia('(max-width:767px)').matches){
				$(window).scrollTop(0);
			}
		});


		
	

























	// FUNCTIONS

	function mobileScrollButtonFade(){
		$('.msdBounce').delay(3000).fadeIn(1000);
	}
	function desktopScrollButtonFade(){
		$('.sdBounce').delay(5000).fadeIn(1000);
	}

	function goToTopOfList(){
		var destination = $('.studentSectionBumper');
		$('html, body').stop(true).animate({
				scrollTop: $(destination).offset().top
			}, 1500,'easeInOutExpo'); 
	}

	function mobileGoToTop(){
		var destination = $('.headerLandingPageBumper');
		$('html, body').stop(true).animate({
			scrollTop: $(destination).offset().top + $(destination).outerHeight(true)
		}, 1500,'easeInOutExpo');
	}

	function giveDistance(){
		var distanceText = $(this).attr('data-prettyDistance');
		var sortingCriteria = $(this).find('.sortCriteria');
		$(sortingCriteria).html(distanceText);
	}

	function addDynamicEventHandler(){


		// //MOBILE SORT BUTTON
		// $('.mobileSortButton').on('click', function(event){
		// 	event.preventDefault();
		// 	// $(this).css({'opacity':'0'});
		// 	$('.headerButtonContainer').toggleClass('headerButtonContainerExpand');
		// 	// if (mobileSortButtonIsOpen == false){
		// 	// 	$('.headerButtonContainer').addClass('headerButtonContainerExpand');
		// 	// 	mobileSortButtonIsOpen = true;
		// 	// } else if (mobileSortButtonIsOpen == true){
		// 	// 	$('.headerButtonContainer').removeClass('headerButtonContainerExpand');
		// 	// 	mobileSortButtonIsOpen = false;
		// 	// }

		// });


		$('.scrollDownButton').on('click', function(){
			event.preventDefault();
			goToTopOfList();
		});
		$('.mobileScrollDownButton').on('click', function(){
			event.preventDefault();
			mobileGoToTop();
		});
		$('.headerLogo').on('click', function(event){
			event.preventDefault();
			mobileGoToTop();
		});


		
		//STUDENT SECTION HOVER STATES
		$('.studentSection').hover(
			function () {
				//DESKTOP
				if (window.matchMedia('(min-width:1025px)').matches){
					bgColor = $(this).attr("data-backgroundColor");
					$('body').addClass(bgColor);
					headerBackgroundColor = $(this).attr("data-headerBackgroundColor");
					$('.headerContainer').addClass(headerBackgroundColor);
					$('.landingPageBackground').addClass(headerBackgroundColor);
					$('.headerLandingPageBumper').addClass(headerBackgroundColor);
					headerTextColor = $(this).attr("data-headerTextColor");
					$('.spnHeader').addClass(headerTextColor);
					bodyTextColor = $(this).attr("data-bodyTextColor");
					$('.sortCriteria').addClass(bodyTextColor);
					$('.shcName').addClass(bodyTextColor);
					$('.sscParagraph').addClass(bodyTextColor);
					linkTextColor = $(this).attr("data-linkTextColor");
					$('.checkItOut').addClass(linkTextColor);
					$('.seeMoreButton').addClass(linkTextColor);
					headerButtonColor = $(this).attr("data-headerButtonColor");
					$('.hbcButton').addClass(headerButtonColor);
					headerSelected = $(this).attr("data-headerSelected");
					$('.selected').addClass(headerSelected);
					borderColor = $(this).attr("data-borderColor");
					$('.studentSection').addClass(borderColor);
					headerLogo = $(this).attr("data-headerLogoColor");
					$('.headerLogo').addClass(headerLogo);
					subHeaderColor = $(this).attr("data-subHeaderColor");
					$('.headerSubHeader').addClass(subHeaderColor);
					$('.sortLabel').addClass(subHeaderColor);
					arrowStem = $(this).attr("data-arrowStem");
					$('.slArrowStem').addClass(arrowStem);
					arrowHead = $(this).attr("data-arrowHead");
					$('.slArrowHead').addClass(arrowHead);
					liveButton = $(this).attr('data-liveButton');
					$('.liveButton').addClass(liveButton);
					liveText = $(this).attr('data-liveText');
					$('.liveText').addClass(liveText);
					liveDot = $(this).attr('data-liveDot');
					$('.liveDot').addClass(liveDot);


				}},
				function() {
					if (window.matchMedia('(min-width:1025px)').matches){
						$('body').removeClass(bgColor)
						$('.headerContainer').removeClass(headerBackgroundColor);
						$('.landingPageBackground').removeClass(headerBackgroundColor);
						$('.headerLandingPageBumper').removeClass(headerBackgroundColor);
						$('.spnHeader').removeClass(headerTextColor);
						$('.sortCriteria').removeClass(bodyTextColor);
						$('.shcName').removeClass(bodyTextColor);
						$('.sscParagraph').removeClass(bodyTextColor);
						$('.checkItOut').removeClass(linkTextColor);
						$('.seeMoreButton').removeClass(linkTextColor);
						$('.hbcButton').removeClass(headerButtonColor);
						$('.selected').removeClass(headerSelected);
						$('.studentSection').removeClass(borderColor);
						// $('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
						$('.headerLogo').removeClass(headerLogo);
						$('.headerSubHeader').removeClass(subHeaderColor);
						$('.sortLabel').removeClass(subHeaderColor);
						$('.slArrowStem').removeClass(arrowStem);
						$('.slArrowHead').removeClass(arrowHead);
						$('.liveButton').removeClass(liveButton);
						$('.liveText').removeClass(liveText);
						$('.liveDot').removeClass(liveDot);
					}
					
				}
		);
		$('.studentSection').each(function(event){
			commentExpanded=false;
			var button = $(this).find('.studentSectionHeader');
			var bumper = $(this).find('.studentSectionContent');
			var arrow = $(this).find('.checkItOut');

			$(button).on('click', function(event){
				if (window.matchMedia('(max-width:1024px)').matches){
					backgroundColor = $(this).attr('data-mobBackgroundColor');
					headerColor = $(this).attr('data-mobHeaderColor');
					headerLogo = $(this).attr('data-mobHeaderLogo');
					headerText = $(this).attr('data-mobHeaderText');
					bodyText = $(this).attr('data-mobBodyText');
					linkText = $(this).attr('data-mobLinkText');
					selected = $(this).attr('data-mobSelected');
					bigTextStroke = $(this).attr('data-mobBigTextStroke');
					bigTextColor = $(this).attr('data-mobBigTextColor');
					borderColor = $(this).attr('data-mobBorderColor');
					liveButton = $(this).attr('data-mobLiveButton');
					liveText = $(this).attr('data-mobLiveText');
					liveDot = $(this).attr('data-mobLiveDot');

					//SHRINK DRAWER
					if($(bumper).hasClass('drawerExpand') == true){

						$(bumper).removeClass('drawerExpand');

						$('body').css({'background-color':'#ffffff'});
						$('.headerContainer').css({'background-color':'#ffcc33'});
						$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
						$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
						$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
						$('.spnHeader').css({'color':'#ffffff'});
						$('.sortCriteria').css({'color':'#000000'});
						$('.shcName').css({'color':'#000000'});
						$('.checkItOut').css({'color':'#ffcc33'});
						$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
						$('.seeMoreButton').css({'color':'#ffcc33'});
						$('.hbcButton').css({'background-color':'#ffcc33'});
						$('.hbcButton h1').css({'color':'#000'});
						$('.selected h1').css({'color':'#000000'});
						$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
						$('.sscParagraph').css({'color':'#000000'});
						$('.mobileSortButton').css({'color':'#333333'});
						$('.headerLogo').css({'color':'#fff'});
						$('.mobileLiveButton').css({'border':'3px solid #f00'});
						$('.mobileLiveText').css({'color':'#f00'});
						$('.mobileLiveDot').css({'background-color':'#f00'});


					//EXPAND DRAWER
					} else if ($(bumper).hasClass('drawerExpand') == false) {

						console.log(backgroundColor);

						$('.studentSectionContent').removeClass('drawerExpand');
						$(bumper).addClass('drawerExpand');

						$('body').css({'background-color':backgroundColor});
						$('.headerContainer').css({'background-color':headerColor});
						$('.headerLogo').css({'color':headerLogo});
						$('.mobileLandingPageBackground').css({'background-color':headerColor});
						$('.headerLandingPageBumper').css({'background-color':headerColor});
						$('.spnHeader').css({'-webkit-text-stroke':bigTextStroke});
						$('.spnHeader').css({'color':bigTextColor});
						$('.sortCriteria').css({'color':bodyText});
						$('.shcName').css({'color':bodyText});
						$('.checkItOut').css({'color':linkText});
						$('.mobileSeeMoreButton').css({'color':linkText});
						$('.seeMoreButton').css({'color':linkText});
						$('.hbcButton').css({'background-color':headerColor});
						$('.hbcButton h1').css({'color':headerText});
						$('.selected h1').css({'color':selected});
						$('.studentSection').css({'border-bottom':borderColor});
						$('.sscParagraph').css({'color':bodyText});
						$('.mobileSortButton').css({'color':selected});
						$('.mobileLiveButton').css({'border':liveButton});
						$('.mobileLiveText').css({'color':liveText});
						$('.mobileLiveDot').css({'background-color':liveDot});

					}

				}
			});
		});

		$('.studentSection').each(function(event){
			commentExpanded=false;
			var button = $(this).find('.studentSectionHeader');
			var bumper = $(this).find('.studentSectionContent');
			var arrow = $(this).find('.checkItOut');


			$(button).on('click', function(event){

				if (window.matchMedia('(min-width:1025px)').matches){
					event.preventDefault();
					$(bumper).toggleClass('drawerExpand');
				} 
				
			});
		});

		



		// SCROLL BACK UP TO HEADER
		$(window).scroll(function(){
			event.preventDefault();
			st = $(window).scrollTop();

			if (st <= $('.headerLandingPageBumper').offset().top){
				if (window.matchMedia('(min-width:1025px)').matches){
					$('body').removeClass(bgColor);
					$('.headerContainer').removeClass(headerBackgroundColor);
					$('.landingPageBackground').removeClass(headerBackgroundColor);
					$('.headerLandingPageBumper').removeClass(headerBackgroundColor);
					$('.spnHeader').removeClass(headerTextColor);
					$('.shcName').removeClass(bodyTextColor);
					$('.sscParagraph').removeClass(bodyTextColor);
					$('.checkItOut').removeClass(linkTextColor);
					$('.seeMoreButton').removeClass(linkTextColor);
					$('.hbcButton').removeClass(headerButtonColor);
					$('.selected').removeClass(headerSelected);
					$('.studentSection').removeClass(borderColor);
					$('.headerLogo').removeClass(headerLogo);
					$('.headerSubHeader').removeClass(subHeaderColor);
				} else if (window.matchMedia('(max-width:1024px)').matches){

					$('body').css({'background-color':'#ffffff'});
					$('.headerContainer').css({'background-color':'#ffcc33'});
					$('.mobileLandingPageBackground').css({'background-color':'#ffcc33'});
					$('.headerLandingPageBumper').css({'background-color':'#ffcc33'});
					$('.spnHeader').css({'-webkit-text-stroke':'1px #000'});
					$('.spnHeader').css({'color':'#ffffff'});
					$('.sortCriteria').css({'color':'#000000'});
					$('.shcName').css({'color':'#000000'});
					$('.checkItOut').css({'color':'#ffcc33'});
					$('.mobileSeeMoreButton').css({'color':'#ffcc33'});
					$('.hbcButton').css({'background-color':'#ffcc33'});
					$('.hbcButton h1').css({'color':'#000'});
					$('.selected h1').css({'color':'#000000'});
					$('.studentSection').css({'border-bottom':'2px dashed #ffcc33'});
					$('.sscParagraph').css({'color':'#000000'});
					$('.mobileSortButton').css({'color':'#333333'});
					$('.headerLogo').css({'color':'#fff'});
				}
				

			}
		});

	}
	
	
	// INITIALIZATION
	mobileScrollButtonFade();
	desktopScrollButtonFade();
	
	
});