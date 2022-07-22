var featureApi = 'http://localhost:3000/feature';

function start() {
    getFeature(renderFeature);
}
start();

function getFeature(callback) {
    fetch(featureApi)
        .then((response) => response.json())
        .then(callback);
}

function renderFeature(feature) {
    const listFeature = document.querySelector('.feature-content');
    const html = feature.map((fea) =>
        `<div class="feature-content__item">
        <h2>${fea.title}</h2>
        <p>${fea.description}</p>
    </div>`
    )
    listFeature.innerHTML = html;
}