app.controllers.camera = new Ext.Controller({

  /*
   * Open up the native camera app
   * On success we set the view to be our app.views.Camera view.
   * After we set the view we update the image container to hold the taken picture.
   */
  openCamera: function() {
    console.log('openCamera function called by controller');
    $fh.cam({
      act: 'picture',
      uri: true
    }, function (res) {
      if (res.uri) {
        // Store the filepath to the image
        var pathToImage = res.uri;

        // Change the view
        app.views.viewport.setActiveItem(app.views.camera);

        // Update the view
        Ext.getCmp("camera_image").update({
          image: pathToImage
        });
      }, function (msg, err){
        Ext.msg.Alert(msg);
      }
    })
  }

});