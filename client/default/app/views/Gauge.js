app.views.Gauge = Ext.extend( Ext.Panel, {
  id: "gauge",
  current_angle: 0,
  height: 150,
  layout: {
    type: "vbox",
    align: "stretch"
  },

  items: [{
    cls: "minute_monitor",
    html: '<div id="needle"></div>'
  },
  new Ext.Button({
  	text: 'Check my loyalty',
		width: 200,
		handler: function (){
			Gauge.views.gauge.rotateTo(90);
		}
	}), 
	new Ext.Button({
		text: 'Reset',
		width: 200,
		handler: function (){
			Gauge.views.gauge.rotateTo(0);
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