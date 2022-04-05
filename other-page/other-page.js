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

async function displayWorkshops() {
	workshopsListEl.textContent = '';  

	const workshops = await getWorkshops();
	
    for (let workshop of workshops) {
        const workshopEl = document.createElement('div');
        const teamEl = document.createElement('h3');
		const partDiv = document.createElement('div');

        workshopEl.classList.add('workshop');
        teamEl.textContent = workshop.team;

		partDiv.classList.add('participants');

        for (let participant of workshop.participants) {
            const participantEL = document.createElement('p');

            participantEL.textContent = participant.name;
            participantEL.classList.add('partEl');

            participantEL.addEventListener('click', async () => {
				await deleteParticipant(participant.id);
				
				displayWorkshops();
            });

            partDiv.append(participantEL);
		}
            workshopEl.append(teamEl, partDiv);
			workshopsListEl.append(workshopEl);
    }
}

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();
	displayWorkshops(workshops);
});