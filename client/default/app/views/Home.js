app.views.Home = Ext.extend(Ext.Panel, {
  title: 'Home',
  cls: 'homepanel',
  iconCls: 'home',

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		title: '<img class="logo" src="app/images/indo/rewards_black.png" />',
      height: 120
  	}
  ],

  items: [
    {
  		xtype: 'panel',
  		height: 20
  	},

  	/* Twitter & Google Maps Buttons */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'mapIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.map, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'twitterIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.twitter, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),

  	{
  		xtype: 'panel',
  		height: 20
  	},

  	/* Camera and Payment Buttons */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls:  'gaugeIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.gauge, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'cameraIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  		  Ext.dispatch({
			        controller: app.controllers.camera,
			        action: 'openCamera'
			      });
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),

  	{
  		xtype: 'panel',
  		height: 20
  	},

  	/* Stocks & Settings Buttons  */
  	new Ext.Panel({
  		height: 100,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		xtype: 'spacer'
		  	},
		  	{
		  		xtype: 'button',
		  		cls: 'barcodeIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.barcode, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	},		  	
		  	{
		  		xtype: 'button',
		  		cls: 'settingsIcon',
		  		width:  100,
		  		height: 100,
		  		handler: function() {
		  			app.views.viewport.setActiveItem(app.views.settings, {type: 'slide', direction: 'left'});
		  		}
		  	},
		  	{
		  		xtype: 'spacer'
		  	}
	    ]
  	}),
  ]
});