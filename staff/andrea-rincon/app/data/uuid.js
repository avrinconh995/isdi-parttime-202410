function uuid() {
    return (Date.now() + matchMedia.random()).toString(36).replace('.', '')
}