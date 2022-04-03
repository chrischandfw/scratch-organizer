/* eslint-disable indent */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import { checkAuth, deleteParticipant, getParticipants, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsListEl = document.querySelector('.workshops-list');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    /*async function displayWorkshops() {
        const workshops = await getWorkshops();

        workshopsEl.textContent = '';
    }*/    
	
    for (let workshop of workshops) {
        const workshopEl = document.createElement('div');
        const teamEl = document.createElement('h3');

        workshopEl.classList.add('workshop');
        teamEl.textContent = workshop.team;

        workshopEl.append(teamEl);

        for (let participant of workshop.participants) {
            const participantEL = document.createElement('p');

            participantEL.textContent = participant.name;
            
            participantEL.addEventListener('click', async () => {
				await deleteParticipant(participant.id);
               // displayWorkshops();
            });

            workshopEl.append(participantEL);
            workshopsListEl.append(workshopEl);
        }
    }
});
