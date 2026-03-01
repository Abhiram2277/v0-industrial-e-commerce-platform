# Performance Optimization Guide for PND Industrial Suppliers

## ✅ Implemented Optimizations

### 1. **Next.js Configuration**
- ✓ SWC minification enabled for faster builds
- ✓ CSS optimization enabled
- ✓ Disabled browser source maps in production
- ✓ Configured on-demand entries for better memory usage
- ✓ Compression enabled for all responses

### 2. **Font Optimization**
- ✓ Added `preload: true` for Google Fonts
- ✓ Added `display: swap` for faster font rendering
- ✓ Preconnect links to Google Fonts servers

### 3. **CSS Performance**
- ✓ Reduced motion media query for users with motion sensitivity
- ✓ GPU acceleration with `will-change`
- ✓ Font smoothing for crisp text rendering

### 4. **Analytics**
- ✓ Vercel Analytics integrated for real-time performance monitoring

## 📊 Performance Hooks Available

The following hooks are available in `/lib/performance-hooks.ts`:

### `useIntersectionObserver(options?)`
Used for lazy loading images and content.
```tsx
const { ref, isVisible } = useIntersectionObserver()
return <img ref={ref} src={...} loading={isVisible ? 'eager' : 'lazy'} />
```

### `useDebounce<T>(value, delay)`
Reduces re-renders on rapid value changes.
```tsx
const debouncedSearch = useDebounce(searchTerm, 300)
```

### `useThrottle<T>(value, delay)`
Limits function execution frequency.
```tsx
const throttledScroll = useThrottle(scrollPosition, 100)
```

### `useMemoryMonitor()`
Tracks memory usage in development (logs every 30s).

## 🚀 Best Practices

### Images
- Always use Next.js `<Image>` component with proper sizing
- Provide `alt` text for accessibility
- Use `priority` prop for above-the-fold images
- Use responsive `sizes` prop for proper srcset generation

### Components
- Split large pages into smaller, lazy-loaded components
- Use `React.memo()` for expensive components that rarely change
- Implement code splitting with dynamic imports
```tsx
import dynamic from 'next/dynamic'
const HeavyComponent = dynamic(() => import('./heavy'), { loading: () => <div>Loading...</div> })
```

### State Management
- Keep state as local as possible
- Use Context API carefully (can cause excessive re-renders)
- Memoize expensive computations with `useMemo`

### Network Requests
- Implement request debouncing for search/filter operations
- Cache API responses when possible
- Use SWR or React Query for data fetching with built-in caching

### Bundle Size
- Review bundle size with `next/bundle-analyzer`
- Lazy load non-critical routes
- Remove unused Radix UI components

## 📈 Monitoring

1. **Vercel Analytics**: Check real-time performance metrics
2. **Lighthouse**: Run locally with `npm run build && npm start`, then use DevTools
3. **Web Vitals**: Monitor Core Web Vitals (LCP, FID, CLS)

## 🔧 Troubleshooting

### Slow Page Load
1. Check Lighthouse Performance tab
2. Identify largest JS bundle
3. Implement code splitting for that module
4. Check for render-blocking resources

### Janky Animations
1. Ensure animations use `transform` and `opacity`
2. Avoid animating `left`, `top`, `width`, `height`
3. Enable GPU acceleration with `will-change` (but use sparingly)
4. Profile with DevTools Performance tab

### High Memory Usage
1. Check for memory leaks in useEffect cleanup
2. Remove unused dependencies
3. Implement pagination for large lists
4. Use virtual scrolling for long lists

## 📝 Checklist for New Features

- [ ] Images use Next.js `<Image>` component
- [ ] Heavy components are code-split
- [ ] State is kept as local as possible
- [ ] No render-blocking resources
- [ ] Animations use GPU-accelerated properties
- [ ] Large lists use pagination or virtual scrolling
- [ ] API calls are debounced/throttled if needed
- [ ] No console warnings or errors
- [ ] Lighthouse Performance score > 85
