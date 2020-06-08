import Places from 'google-places-web';
import PlacesController from '../controllers/PlacesController';

Places.apiKey = ''
Places.debug = DEV; // eslint-disable-line

// eslint-disable-next-line consistent-return
export default async (lat, lng) => {
    try {
        const response = await Places.textsearch({
              language: 'ru',
              location: ${lat},${lng}, // LatLon delimited by ,
          query: 'point of interest',
          type: 'point_of_interest',
          // radius: 5,
          rankby: 'DISTANCE',
    });

        const { status, results } = response;

        if (status === 'OK') {
            // eslint-disable-next-line array-callback-return,valid-typeof
            const uniqueList = results.filter(item => !PlacesController.get(item.place_id));

            const newAttrs = await Promise.all(
              uniqueList.filter(item => item.photos && item.photos.length && item.photos[0].photo_reference).map(async (item) => {
                  // eslint-disable-next-line no-undef,max-len
                  const placePhoto = await fetch(https://maps.googleapis.com/maps/api/place/photo?maxwidth=60&photoreference=${item.photos[0].photo_reference}&key=${Places.apiKey}, {
                  method: 'GET',
                    headers: {
                      Accept: 'application/json',
                        'Content-Type': 'application/json',
                  },
              });

            return {
                name: item.name,
                url: placePhoto.url,
                lat: item.geometry.location.lat,
                lng: item.geometry.location.lng,
                id: item.place_id,
                photo_id: item.photos[0].photo_reference,
            };
        })
);

console.warn('newAttrs', newAttrs);

newAttrs.length >= 1 && PlacesController.createFromList(newAttrs);
}
return [];
} catch (error) {
    // eslint-disable-next-line no-console
    console.warn('error getting places', error);
}
};
