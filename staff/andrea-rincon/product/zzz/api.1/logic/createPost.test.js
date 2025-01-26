import createPost from './createPost.js'

try {
    createPost('m2w92r8h09', 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A493675734794E0DD2563A1595988F35F3152BB7062DA6F854515830B702873A/scale?width=1200\&aspectRatio=1.78\&format=webp', 'hello peter')

    console.log('post create')
} catch (error) {
    console.error(error)

}