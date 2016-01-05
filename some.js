<div class="c_detailed_view">
		<div class="leftside">
			<h1>{{ product.title }}</h1>
			<img src="{{ product.featured_image | product_img_url: 'large' }}" alt="{{ product.title | escape  }}" class="xDetail_img" />

        </div>

      {% if product.images.size > 1%}
      <!-- Begin thumbnails -->
      <div class="thumbs clearfix" style="margin-left:-15px;">
	        {% for image in product.images %}
		        {% if settings.enable_product_image_zoom %}
		        <div class="image {% cycle 'last-in-row': '', '', '', ' last-in-row' %}">
		          <a href="#" class="cloud-zoom-gallery" rel="useZoom: 'placeholder', smallImage: '{{ image | product_img_url: 'original' }}', tint: '#ffffff'">
		            <img src="{{ image | product_img_url: 'medium' }}" alt="{{ image.alt | escape }}" title="click here!" class="xThumb_img" />
		          </a>
		        </div>
		        {% else %}
			        <div class="image {% cycle 'last-in-row': '', '' ,'', ' last-in-row' %}">
			          <a href="#" data-original-image="{{ image | product_img_url: 'original' }}">
			            <img src="{{ image | product_img_url: 'medium' }}" alt="{{ image.alt | escape }}"  title="click here!" class="xThumb_img"/>
			          </a>
			        </div>
		        {% endif %}
	        {% endfor %}
	      </div>
     {% endif %}
</div>



//JS that changes the images on thumbnails clicks



var detail_img = $('.xDetail_img');
original_src = detail_img.attr('src');
// console.dir("obj "+detail_img );

$('.xThumb_img').on('click', function() {
    // console.log("clicked" +$(this).attr('src'));
    var thumbI = $(this).attr('src');
    detail_img.attr('src', thumbI);
    original_src = $(this).attr('src');
});



$('.xThumb_img').hover(function() {
    var thumbI = $(this).attr('src');
    detail_img.fadeOut(100);
    detail_img.fadeIn(500);
    detail_img.attr('src', thumbI);
}, function() {
    $(this).attr('src', original_src);
});