	$.fn.setupFilterInput = function() {
		log("setupFilterInput");
		var $searchX = $(this).parent.find("x-icon");

		this.focus(function(event) {
				if(this.value == $(this).attr("placeholder"))
					this.value = "";
			}).blur(function(event) {
				if(this.value == "")
					this.value = $(this).attr("placeholder");
			}).keyup(function(event) {
				log("keyUp");
				if(this.value.length > 0)
					$searchX.addClass("active");
				else
					$searchX.removeClass("active");
			});

		return this;
	};