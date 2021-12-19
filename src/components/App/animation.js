import { gsap } from 'gsap';

let canShowNewPage = false;
let isCompleteMinTimeout = false;
let wrapper = null;
let nextPageNode = null;

export const hideNextPage = page => {
    isCompleteMinTimeout = false;
    nextPageNode = page;

    if (nextPageNode) {
        nextPageNode.style.display = 'none';
        setTimeout(() => nextPageNode.style.display = 'block', 500);
    };
};

export const showLoader = () => {
    wrapper = document.createElement('div');
    wrapper.classList.add('Wrapper');
    document.body.appendChild(wrapper);

    gsap.from('.Wrapper', {
        x: '100%', duration: 0.5, onComplete: () => {
            setTimeout(() => {
                isCompleteMinTimeout = true;
                showPage();
            }, 300)
        }
    });
};

export const onReadyNewRoute = () => {
    canShowNewPage = true;
    showPage();
};

const reset = () => {
    canShowNewPage = false;
    isCompleteMinTimeout = false;
    wrapper = null;
    nextPageNode = null;
};

const showPage = () => {
    if (nextPageNode && isCompleteMinTimeout && canShowNewPage) {
        nextPageNode.style.display = 'display';
        gsap.to('.Wrapper', {
            x: '-100%', duration: 0.5, onComplete: () => {
                if (wrapper) {
                    document.body.removeChild(wrapper)
                    reset();
                }
            }
        });
    }
};

