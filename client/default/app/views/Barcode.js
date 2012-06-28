app.views.Barcode = Ext.extend(Ext.Panel, {

  title: 'Barcode Scanner',
  iconCls: 'home',
  scroll: 'vertical',
  height: '100%',
  layout: 'fit',
  
  dockedItems: [
    {
  		dock: 'top',
  		xtype: 'toolbar',
      title: '<img class="logo" src="app/images/indo/rewards_side.png" />',
      height: 60,
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
    xtype: 'panel',
    layout:{
      type:'vbox',
      align: 'center'
    },
    //defaults:{flex:'1'},
    items: [{
          xtype: 'button',
          text: 'Scan Code Now',
          handler: function() {
            //Ext.dispatch({
              //controller: app.controllers.barcode,
              //action: 'scanCode'
            //});
          }
        }
    ],
   }]
});