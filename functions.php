<?php
/**
 * Theme Functions - blasramosv9Final
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Theme Setup
function blasramosv9_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Menu', 'blasramosv9-final' ),
    ) );
}
add_action( 'after_setup_theme', 'blasramosv9_setup' );

// Enqueue Styles
function blasramosv9_enqueue_styles() {
    // Google Fonts
    wp_enqueue_style(
        'blasramosv9-google-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap',
        array(),
        null
    );
    // Theme stylesheet
    wp_enqueue_style(
        'blasramosv9-style',
        get_stylesheet_uri(),
        array( 'blasramosv9-google-fonts' ),
        filemtime( get_stylesheet_directory() . '/style.css' )
    );
}
add_action( 'wp_enqueue_scripts', 'blasramosv9_enqueue_styles' );

// Enqueue Scripts
function blasramosv9_enqueue_scripts() {
    wp_enqueue_script(
        'blasramosv9-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        filemtime( get_template_directory() . '/assets/js/main.js' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'blasramosv9_enqueue_scripts' );

// Remove WordPress emoji scripts (cleaner output)
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
