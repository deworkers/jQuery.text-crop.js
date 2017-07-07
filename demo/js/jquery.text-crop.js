(function( $ ){
  $.fn.textCrop = function(options) {
    var options = $.extend( {
      'size' : 50,
      'symbol' : '...'
    }, options);

    newsText = this.text();

    if(newsText.length > options.size){
        this.text(newsText.slice(0, options.size) + options.symbol);
    }
  };
})( jQuery );
