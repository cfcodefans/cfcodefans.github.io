branch:gh-pages

```html
    <script>
        window.dataLayer = window.dataLayer || []
        function gtag() { dataLayer.push(arguments) }
        gtag('js', new Date());
        gtag('config', 'G-2B0HY5T3JZ', {
            page_path: window.location.pathname,
        });
    </script>
```

```javascript
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            i("_app.tsx", "url on routeChangeComplete event", url)
            gtag.pageview(url)
        }
        router.events.on("routeChangeComplete", handleRouteChange)
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router.events])
```

```cmd
yarn preload
```

```cmd
yarn export && copy _git out\.git && copy _nojekyll out\.nojekyll
```

```cmd
yarn preload && yarn export && copy settings\_git out\.git && copy settings\_nojekyll out\.nojekyll
```