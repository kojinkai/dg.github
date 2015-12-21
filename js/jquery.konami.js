;(function($) {

    $.fn.konami = function(options) {

      var defaults = {
        
        // Our Settings.
        watchFor:        [],
        callback:    function() { }

      };

      var settings = $.extend( defaults, options );
        
      var key_accum = [];
      var match = defaults.watchFor;

      $(document).keyup(function(e) {

          var len = key_accum.push(e.keyCode ? e.keyCode : e.charCode);
          
          if( len > match.length ) key_accum.shift();
          
          if ( key_accum.join('-') === match.join('-') ) {
            key_accum = [];

            if ( defaults.callback ) {
                defaults.callback($(this));
            }
          }
      });
    };

})(jQuery);