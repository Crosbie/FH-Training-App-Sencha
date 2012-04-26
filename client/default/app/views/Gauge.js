app.views.Gauge = Ext.extend( Ext.Panel, {
  id: "gauge",
  current_angle: 0,
  height: 150,
  layout: {
    type: "vbox",
    align: "stretch"
  },
  
  dockedItems: [
    {
    	dock: 'top',
  		xtype: 'toolbar',
      title: '<img class="logo" src="app/images/indo/top_background_full.png" />',
  		items: [
  			{
  				text: 'Back',
          ui: 'back',
          hidden: app.hideBack || false,
  				handler: function() {
  					app.views.viewport.setActiveItem(app.views.home, {type: 'slide', direction: 'right'});
  				}
  			}
  		]
  	}
  ],

  items: [{
    cls: "minute_monitor",
    html: '<div id="needle"></div>'
  },
  new Ext.Button({
  	text: 'Check my loyalty',
		width: 200,
		handler: function (){
			app.views.gauge.rotateTo(90);
		}
	}), 
	new Ext.Button({
		text: 'Reset',
		width: 200,
		handler: function (){
			app.views.gauge.rotateTo(0);
		}
	})],

  rotateTo: function(deg) {
    var needle = Ext.get('needle').dom;
  console.log(needle);
    Wilq32.PhotoEffect._handleRotation(needle, {
      angle: this.current_angle,
      animateTo: deg
    });
    this.current_angle = deg;
  },
  
});