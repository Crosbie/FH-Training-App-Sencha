 app.views.Twitter = Ext.extend(Ext.Panel, {
  title: 'Twitter',
  iconCls: 'time',
  width: '100%',
  /*
   * Layout vbox is used to arrnage items (tweets) stacked above one another
   */
  layout: {
    type: 'vbox'
  },

  listeners: {
    show: function() {

    }
  },

  dockedItems: [
    {
      dock: 'top',
      xtype: 'toolbar',
      title: '<img class="logo logoOffset" src="app/images/logo.png" />',
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

  /*
   * Below we declare a list. It's store is set to our twitter store. 
   * This store is defined in another file. 
   * The itemTpl is a template that defines how list items are styled.
   * Anything in the tpl surrounded by {} means that the store 
   * contains this variable and to populate this list item using that data.
   */
  items: [
    {
      xtype: 'list',
      width: '100%',
      store: app.stores.twitter,
      itemTpl: '<img style="float: left; margin: 0px 8px 8px 0px;" src="{profile_image_url}" />' + 
      '<strong>{from_user}</strong>' +
      '{text}',
      flex: 1,
      plugins: [{
        ptype: 'pullrefresh'
      }]
    }
  ]
  });