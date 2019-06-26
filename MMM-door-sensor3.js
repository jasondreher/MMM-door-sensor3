/* global Module */

/* Magic Mirror
 * Module: MMM-door-sensor3
 *
 * By iStepgueu http://www.twitter.com/istepgueu
 * MIT Licensed.
 */

Module.register("MMM-door-sensor3",{

        // Default module config.
        defaults: {
                
        },


        // Define start sequence.
        start: function() {
                Log.info("Starting module: " + this.name);
		this.iconone_state = "Blank.png";
		this.icontwo_state = "Blank.png";
		this.iconthree_state = "Blank.png";
        },



                getDom: function() {

			var wrapper = document.createElement("div");
			
			if (this.cur_mod === "Trash_Recy_Change") {
			wrapper.innerHTML = "<img src='/modules/MMM-door-sensor3/img/"+this.iconone_state+"' width='100' />";
			wrapper.innerHTML += "<img src='/modules/MMM-door-sensor3/img/"+this.icontwo_state+"' width='100' />";
            wrapper.innerHTML += "<img src='/modules/MMM-door-sensor3/img/"+this.iconthree_state+"' width='100' />";            
			}
			
			if (this.cur_mod === "Trash_Recy_Change2") {
			wrapper.innerHTML = "<img src='/modules/MMM-door-sensor3/img/"+this.iconone_state+"' width='100' />";
			wrapper.innerHTML += "<img src='/modules/MMM-door-sensor3/img/"+this.icontwo_state+"' width='100' />";
            wrapper.innerHTML += "<img src='/modules/MMM-door-sensor3/img/"+this.iconthree_state+"' width='100' />";            
			}

			return wrapper;
//		    }
                },

		notificationReceived: function(notification, payload, sender) {
			{
				//Washer		
 				if (notification === 'Washer_Running') {
				this.iconone_state = "Washer_Running.png";
				this.cur_mod="Trash_Recy_Change"
        			this.updateDom(3000);
    				}
				if (notification === 'Washer_Empty') {
				this.iconone_state = "Blank.png";
				this.cur_mod="Trash_Recy_Change"
        			this.updateDom(3000);
    				}
 				if (notification === 'Washer_Done') {
				this.iconone_state = "Washer_Done.png";
				this.cur_mod="Trash_Recy_Change2"
        			this.updateDom(3000);
    				}
				//Dryer	
				if (notification === 'Dryer_Running') {
				this.icontwo_state = "Dryer_Running.png";
				this.cur_mod="Trash_Recy_Change"
        			this.updateDom(3000);
    				}
				if (notification === 'Dryer_Empty') {
				this.icontwo_state = "Blank.png";
				this.cur_mod="Trash_Recy_Change"
        			this.updateDom(3000);
    				}
				if (notification === 'Dryer_Done') {
				this.icontwo_state = "Dryer_Done.png";
				this.cur_mod="Trash_Recy_Change2"
        			this.updateDom(3000);
    				}
                //Dishwasher		
 				if (notification === 'Dishwasher_Running') {
				this.iconthree_state = "Dishwasher_Running.png";
				this.cur_mod="Trash_Recy_Change"
        			this.updateDom(3000);
    				}
				if (notification === 'Dishwasher_Empty') {
				this.iconthree_state = "Blank.png";
				this.cur_mod="Trash_Recy_Change"
        			this.updateDom(3000);
    				}
 				if (notification === 'Dishwasher_Done') {
				this.iconthree_state = "Dishwasher_Done.png";
				this.cur_mod="Trash_Recy_Change2"
        			this.updateDom(3000);
    				}
 				
			}

        },
});