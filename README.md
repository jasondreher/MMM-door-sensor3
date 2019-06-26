# Module: MMM-door-sensor

![](https://github.com/jasondreher/MMM-door-sensor3/blob/master/Screenshot%20from%202019-06-26%2009-24-01.png)

## Using the module

Logic from https://github.com/istepgueu/MMM-door-sensor

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



I set up the below in HomeAssistant to trigger in syslog (https://github.com/paviro/MMM-syslog)
````
   washericon:
      command_on: 'curl "http://MirrorIP:8080/syslog?type=INFO&message=Washer_Running&silent=true"'
      command_off: 'curl "http://MirrorIP:8080/syslog?type=INFO&message=Washer_Empty&silent=true"'      
    dryericon:
      command_on: 'curl "http://MirrorIP:8080/syslog?type=INFO&message=Dryer_Running&silent=true"'
      command_off: 'curl "http://MirrorIP:8080/syslog?type=INFO&message=Dryer_Empty&silent=true"'       
    washerdoneicon:
      command_on: 'curl "http://MirrorIP:8080/syslog?type=INFO&message=Washer_Done&silent=true"'
      command_off: 'curl "http://MirrorIP:8080/syslog?type=INFO&message=Washer_Empty&silent=true"'      
    dryerdoneicon:
      command_on: 'curl "http://MirrorIP:8080/syslog?type=INFO&message=Dryer_Done&silent=true"'
      command_off: 'curl "http://MirrorIP:8080/syslog?type=INFO&message=Dryer_Empty&silent=true"'
````

I also modifed syslog, I believe this needs to be done to send a public message
add lines 61 & 62 (after })
			var datetime = 'NOW-' + new Date().getTime() //added by jason
			this.sendNotification(payload.message,payload.type); //added by jason
add line 127 (after return wrapper;)
		this.sendNotification('syslog-End'); //added by jason