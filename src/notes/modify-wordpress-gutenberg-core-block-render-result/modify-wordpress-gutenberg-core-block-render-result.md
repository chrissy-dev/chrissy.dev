---
title: Modifying the Core Gutenberg blocks output in WordPress 5.5+
date: 2020-09-22
featured_image: cover.jpg
---

I recently had to restructure the output of one of the Core Gutenberg blocks to use Tailwind CSS and to add an additional element. 

I couldn't find many articles explaining how to go about this but you can re-declare a Core block output using its core name through PHP.

Here's an example on how to manipulate the output of the "Core Image" block to use Tailwind CSS classes. 

```php
function custom_image_block_markup( $attributes, $content ) {
  // Get the image URL in medium 
  $image_src = wp_get_attachment_image_src($attributes['id'], 'medium')[0];

  // Get the rest of the details loading the html via DOMDocument
  libxml_use_internal_errors( TRUE );
  $dom = new DOMDocument();
  $dom->preserveWhiteSpace = FALSE;
  $dom->loadHtml( mb_convert_encoding( $content, 'HTML-ENTITIES', 'UTF-8' ) );

  // Get the <figure> element     
  $figure = $dom->getElementsByTagName( 'figure' )[ 0 ];
  $figCaption = $figure->getElementsByTagName( 'figcaption' );
  if ( count( $figCaption ) ) {
      $caption = '';
      foreach ( $figCaption[ 0 ]->childNodes as $child ) {
          $caption .= $dom->saveHTML( $child );
      }
  }

  // Output custom HTML
  $output = '<figure class="my-6 w-full">';
  $output .=    '<img src='. $image_src .' alt="" class="w-full"/>';
  $output .=  '<figcaption>'.  $caption .'</figcaption>';
  $output .= '</figure>';

  return $output;
}

function register_custom_image_block() {
    register_block_type( 'core/image', array(
        'render_callback' => 'custom_image_block_markup',
    ) );
}

// Enable this for WordPress versions 5.5+
add_action( 'after_setup_theme', 'register_custom_image_block' ); 

// Enable this for WordPress versions below 5.4
// add_action( 'init', 'register_custom_image_block' );
```

✌️