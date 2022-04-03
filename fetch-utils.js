const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indra3ViZGVpanZybnRkbXVucWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1MTcsImV4cCI6MTk2MzEyOTUxN30.qE-NCGctQQqftyEJnJ49hNdOGf4jDNo61YYMlpDAr2g';

const SUPABASE_URL = 'https://wkkubdeijvrntdmunqer.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getWorkshops() {
    const response = await client
        .from('jrotc_workshops')
        .select('*, participants (*)');
    return response.body;
}

export async function getParticipants(someId) {
    const response = await client
        .from('participants')
        .select('*, jrotc_workshops (*)')
        .match({ id: someId })
        .single();

    return response.body;
}

export async function createParticipant(name, workshop_id) {
    const response = await client
        .from('participants')
        .insert({
            name:name,
            workshop_id: workshop_id,
            user_id: client.auth.user().id
        });

    return response.body;
}

export async function deleteParticipant(id) {
    // delete a single participant using the id argument
    const response = await client
        .from('participants')
        .delete()
        .match({ id })
        .single();

    return response.body;
}

/*export async function displayWorkshops() {

}*/


export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
