/** @type {import('tailwindcss').Config} */

// Define color palette first for reuse
const colorPalette = {
  ocean: {
    50: '#E2E6FE',
    100: '#D1D8FC',
    200: '#A8B6FA',
    300: '#90A0F4',
    400: '#667EF4',
    500: '#3B5AF7',
    600: '#284AF6',
    700: '#143AF5',
    800: '#0827C4',
    900: '#07209D',
    1000: '#051876',
    1100: '#03104E',
    1200: '#020827',
  },
  volcano: {
    50: '#FFE5E0',
    100: '#FFD7CF',
    200: '#FFB2A3',
    300: '#FF9985',
    400: '#FF775C',
    500: '#FB5837',
    600: '#F83812',
    700: '#E02500',
    800: '#AE2509',
    900: '#8F1800',
    1000: '#661100',
    1100: '#3D0A00',
    1200: '#140300',
  },
  desert: {
    50: '#FFF2E0',
    100: '#FFEBCF',
    200: '#FFD9A3',
    300: '#FFCC85',
    400: '#FCBA5F',
    500: '#FFAA33',
    600: '#FA980F',
    700: '#E08300',
    800: '#B46A04',
    900: '#8F5300',
    1000: '#663C00',
    1100: '#3D2400',
    1200: '#140C00',
  },
  forest: {
    50: '#E9F6F0',
    100: '#DBF2E7',
    200: '#BBE7D1',
    300: '#A2E2C2',
    400: '#7EDDAD',
    500: '#5CD699',
    600: '#40C984',
    700: '#26BA70',
    800: '#25935C',
    900: '#1A7447',
    1000: '#0F5733',
    1100: '#003D1F',
    1200: '#00140A',
  },
  river: {
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00BCD4',
    600: '#00ACC1',
    700: '#0097A7',
    800: '#00838F',
    900: '#006064',
    1000: '#004D56',
    1100: '#003840',
    1200: '#002329',
  },
  twilight: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
    1000: '#38106B',
    1100: '#270A4D',
    1200: '#160530',
  },
  flamingo: {
    50: '#FCE4EC',
    100: '#F8BBD0',
    200: '#F48FB1',
    300: '#F06292',
    400: '#EC407A',
    500: '#E91E63',
    600: '#D81B60',
    700: '#C2185B',
    800: '#AD1457',
    900: '#880E4F',
    1000: '#6B0B3E',
    1100: '#4D082C',
    1200: '#2F051B',
  },
  sumi: {
    50: '#F8F9FB',
    100: '#F1F1F4',
    200: '#E8E9EB',
    300: '#D8D9DB',
    400: '#B4B5B7',
    500: '#949597',
    600: '#626264',
    700: '#414143',
    800: '#414143',
    900: '#191A1C',
    1000: '#191A1C',
    1100: '#191A1C',
    1200: '#191A1C',
  },
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: [
    'text-h1', 'text-h2', 'text-h3', 'text-h3-bold', 'text-h4', 'text-h5',
    'text-body-l', 'text-body-m', 'text-body-m-bold', 'text-body-s',
    'text-label-l', 'text-label-m', 'text-label-s',
    'text-caption-l', 'text-caption-m',
    'text-button-l', 'text-button-m', 'text-button-s',
  ],
  theme: {
    extend: {
      fontSize: {
        // Headings
        h1: ['36px', { lineHeight: '1.4', fontWeight: '500' }],
        h2: ['32px', { lineHeight: '1.5', fontWeight: '500' }],
        h3: ['20px', { lineHeight: '1.5', fontWeight: '400' }],
        'h3-bold': ['20px', { lineHeight: '1.5', fontWeight: '700' }],
        h4: ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        h5: ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        // Body text
        'body-l': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-m': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-m-bold': ['14px', { lineHeight: '1.6', fontWeight: '700' }],
        'body-s': ['12px', { lineHeight: '1.8', fontWeight: '400' }],
        // Labels
        'label-l': ['14px', { lineHeight: '1.4', fontWeight: '500' }],
        'label-m': ['12px', { lineHeight: '1.5', fontWeight: '500' }],
        'label-s': ['10px', { lineHeight: '1.4', fontWeight: '500' }],
        // Captions/Supplementary
        'caption-l': ['12px', { lineHeight: '1.7', fontWeight: '400' }],
        'caption-m': ['10px', { lineHeight: '1.7', fontWeight: '400' }],
        // Buttons
        'button-l': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'button-m': ['14px', { lineHeight: '1.7', fontWeight: '500' }],
        'button-s': ['12px', { lineHeight: '1.7', fontWeight: '500' }],
      },
      colors: {
        // Color Palette - use these throughout
        ...colorPalette,
        
        // Semantic Tokens - Text Colors
        textColor: {
          primary: colorPalette.sumi[1200],      // Main body text
          secondary: colorPalette.sumi[800],     // Description/muted text
          tertiary: colorPalette.sumi[600],      // Placeholder text
          accent: colorPalette.ocean[400],       // Highlighted/accent text
          inverse: colorPalette.ocean[50],       // Text on filled backgrounds
          disabled: colorPalette.sumi[400],      // Disabled text
          error: colorPalette.volcano[600],      // Alert/error text
          link: colorPalette.ocean[600],         // Link default
          'link-hover': colorPalette.ocean[700], // Link hover
          'link-active': colorPalette.ocean[700],// Link active
          'link-visited': colorPalette.ocean[800],// Link visited
        },
        // Semantic Tokens - Icon Colors
        icon: {
          DEFAULT: colorPalette.sumi[800],       // Default icon
          active: colorPalette.ocean[500],       // Active icon
          warning: colorPalette.desert[600],     // Warning icon
          disabled: colorPalette.sumi[400],      // Disabled icon
        },
        // Semantic Tokens - Button Colors
        button: {
          primary: colorPalette.ocean[500],      // Primary button
          secondary: colorPalette.sumi[700],     // Secondary button
          hover: colorPalette.ocean[500],        // Hover state
          active: colorPalette.ocean[600],       // Active state
          disabled: colorPalette.sumi[400],      // Disabled state
        },
        // Semantic Tokens - Background Colors
        background: {
          DEFAULT: colorPalette.sumi[50],        // Default background (white)
          primary: colorPalette.sumi[50],        // Primary background (white)
          secondary: colorPalette.sumi[50],      // Secondary background
          card: colorPalette.sumi[100],          // Card background
          subtle: colorPalette.sumi[200],        // Subtle background
          accent: colorPalette.ocean[50],        // Accent background
        },
        // Semantic Tokens - Border Colors
        border: {
          DEFAULT: colorPalette.sumi[300],       // Default border
          hover: colorPalette.sumi[400],         // Hover border
          focus: colorPalette.ocean[500],        // Focus border
          error: colorPalette.volcano[600],      // Error border
        },
        // Semantic Tokens - Status Colors
        success: {
          DEFAULT: colorPalette.forest[600],     // Default success
          'fill-select': colorPalette.forest[700],// Filled selected
          'fill-hover': colorPalette.forest[700], // Filled hover
          selected: colorPalette.forest[200],    // Selected state
          hover: colorPalette.forest[100],       // Hover state
          bg: colorPalette.forest[50],           // Background
        },
        alert: {
          DEFAULT: colorPalette.volcano[600],    // Default alert
          'fill-select': colorPalette.volcano[700],// Filled selected
          'fill-hover': colorPalette.volcano[700],// Filled hover
          selected: colorPalette.volcano[200],   // Selected state
          hover: colorPalette.volcano[100],      // Hover state
          bg: colorPalette.volcano[50],          // Background
        },
        warning: {
          DEFAULT: colorPalette.desert[600],     // Default warning
          'fill-select': colorPalette.desert[700],// Filled selected
          'fill-hover': colorPalette.desert[700], // Filled hover
          selected: colorPalette.desert[200],    // Selected state
          hover: colorPalette.desert[100],       // Hover state
          bg: colorPalette.desert[50],           // Background
        },
        // Semantic Tokens - Chart Colors
        chart: {
          primary: colorPalette.ocean[500],      // Primary chart color
          secondary: colorPalette.ocean[400],    // Secondary chart color
          white: colorPalette.sumi[50],          // White for charts
          black: colorPalette.sumi[1200],        // Black for charts
        },
      },
    },
  },
  plugins: [],
}
