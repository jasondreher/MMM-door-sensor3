# Module: MMM-door-sensor



## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "MMM-door-sensor3",
		position: "top_left",	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
			
		}
	},
]
````



I set up the below in HomeAssistant to trigger in syslog
   washericon:
      command_on: 'curl "http://192.168.0.57:8080/syslog?type=INFO&message=Washer_Running&silent=true"'
      command_off: 'curl "http://192.168.0.57:8080/syslog?type=INFO&message=Washer_Empty&silent=true"'      
    dryericon:
      command_on: 'curl "http://192.168.0.57:8080/syslog?type=INFO&message=Dryer_Running&silent=true"'
      command_off: 'curl "http://192.168.0.57:8080/syslog?type=INFO&message=Dryer_Empty&silent=true"'       
    washerdoneicon:
      command_on: 'curl "http://192.168.0.57:8080/syslog?type=INFO&message=Washer_Done&silent=true"'
      command_off: 'curl "http://192.168.0.57:8080/syslog?type=INFO&message=Washer_Empty&silent=true"'      
    dryerdoneicon:
      command_on: 'curl "http://192.168.0.57:8080/syslog?type=INFO&message=Dryer_Done&silent=true"'
      command_off: 'curl "http://192.168.0.57:8080/syslog?type=INFO&message=Dryer_Empty&silent=true"'