import goforFactory from '@fiverr/gofor';

const gofor = goforFactory();

export const get = () =>
    gofor('https://randomuser.me/api')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error('Request Error');
            }
            return response.json();
        });
