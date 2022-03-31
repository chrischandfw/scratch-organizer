import { createParticipant } from '../fetch-utils';

const form = document.querySelector('form');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(form);

    await createParticipant(data.get('name'), data.get('workshop_id'));
});