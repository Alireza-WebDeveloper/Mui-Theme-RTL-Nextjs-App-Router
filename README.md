app / theme / index.tsx

Custom Theme :
const theme = createTheme({
direction: 'rtl',
palette: {
mode: 'light',
},
});

RTL :
const options = {
key: 'mui-style-rtl',
stylisPlugins: [prefixer, rtlPlugin],
};
