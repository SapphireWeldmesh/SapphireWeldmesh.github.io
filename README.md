# Built with: swiss-starter

A minimal and lightweight starter for creative development by @SiddharthSham

# Dependencies
 - [x] `OGL` for WebGl
 - [x] `AnimeJS` for animations and tweening
 - [ ] `Highway` for managing transitions

# Dev dependencies
 - `Parcel` (npm i -g parcel@next)
 - `Autoprefixer` (npm i autoprefixer)

# Features
- CSS
    - Brutal CSS reset (custom)
    - Helpful CSS easings variables
    - Fullscreen canvas styling
- JS
    - `utils`
        - Simple event delegation
        - Helpful math functions
        - UA sniffing
        - Wrapper around IntersectionObserver
    - `main`
        - Tightly controlled rAF loop
    - `scene`
        - Minimal OGL scene with a spinning cube with Phong shading
- HTML
    - Deferred JS and non-blocking CSS load
- Build Scripts
    - `dev` : runs a local dev server via Parcel
    - `build` : outputs a production build to the `/dist` folder

# Installation
```
 $ git clone https://github.com/SiddharthSham/swiss-starter.git
 $ cd swiss-starter
 $ yarn 
 $ yarn run dev 
 ```
