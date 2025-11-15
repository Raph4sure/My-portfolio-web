const modules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg.svg}', { eager: true });

const images = {};

for (const path in modules) {
    const key = path.replace('/src/assets/', '');
    images[key] = modules[path].default;
}

export default images;