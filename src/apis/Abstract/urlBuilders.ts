export const aGeolocationUrl = (fields: string | string[] = []) => {
    if (!Array.isArray(fields)) {
        fields = [fields];
    }

    return `https://ipgeolocation.abstractapi.com/v1/?api_key=${import.meta.env.VITE_ABSTRACTAPI_API_KEY}&fields=latitude,longitude${fields.join(',')}`
};