export const navLinkInfo = [
    { to: '/current', text: 'Current' },
    // { to: '/14-days', text: '3 days forecast' },
    // { to: '/3-days', text: '14 days forecast' },
]

export const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
});

export const timeFormatter = new Intl.DateTimeFormat(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
})

export const countryCodeFormatter = new Intl.DisplayNames(navigator.language, {
    style: 'long',
    type: 'region'
});

export const tempFormatter = new Intl.NumberFormat(navigator.language, {
    style: 'unit',
    unit: 'celsius',
});

export const speedFormatter = new Intl.NumberFormat(navigator.language, {
    style: 'unit',
    unit: 'meter-per-second'
})