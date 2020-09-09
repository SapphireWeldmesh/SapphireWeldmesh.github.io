// function throttle(cb, ms = 0, ctx) {
//     let lastTime = 0;
//     let applyTimeout;
//     return (...args) => {
//         const now = (performance || Date).now();
//         if (lastTime && now < lastTime + ms) {
//             clearTimeout(applyTimeout);
//             applyTimeout = setTimeout(() => {
//                 lastTime = now;
//                 cb.apply(ctx, args);
//             }, ms);
//         } else {
//             lastTime = now;
//             cb.apply(ctx, args);
//         }
//     };
// }

window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0)
})

window.onload = () => {
    document.body.style.overflow = 'auto'
    document.getElementById('loader').classList.toggle('loaded')
}




// let lastFrameTime = 0;
// let tolerance = 0.1;
// let interval = 16
// const render = elapsedTime => {
//     let delta = elapsedTime - (lastFrameTime || 0);
//     let nextFrame = requestAnimationFrame(render)
//     if (lastFrameTime && (delta <= interval - tolerance)) return
//     lastFrameTime = elapsedTime - (delta % interval);

//     try {
//         // s.update(delta)
//     } catch (e) {
//         console.log('[Error in update loop]:', e)
//         cancelAnimationFrame(nextFrame)
//     }
// }

// requestAnimationFrame(render)