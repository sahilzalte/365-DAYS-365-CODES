import { heavy } from './heavyModule.js';

const btn = document.querySelector('button')

btn.addEventListener('click', async () => {
    let heavyModule = await import('./heavyModule.js');
    heavyModule.heavy();
});