window.addEventListener('load', () => {
    let t = 0;

    const scene = document.querySelector('#scene');

    const onGlobalClick = () => {
        let newBox = document.createElement('a-cylinder');
        newBox.setAttribute('id', 'ultra-box');
        newBox.setAttribute('mixin', 'box');
        newBox.setAttribute('position', '-1 5 -3');
        newBox.setAttribute('color', '#55b9f9');
        newBox.setAttribute('height', '0.4');
        newBox.setAttribute('width', '0.4');
        document.querySelector('.boxes-container').appendChild(newBox);
        render(document.querySelector('#ultra-box'));
        scene.removeEventListener('click', onGlobalClick);
    };


    scene.addEventListener('click', onGlobalClick);

    function render(el) {
        t += 0.01;
        requestAnimationFrame(() => render(el));
        el.setAttribute('position', `2 ${Math.sin(t * 2) + 3} -3`);
        el.setAttribute('rotation', `${t * 100 + 50} 0 0`);
    }
});