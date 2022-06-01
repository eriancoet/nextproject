export const pageview = (url) => {
    window.gtag('config', process.env.GOOGLE_ANALETICS_ID, {
        path_url: url,
    })
}