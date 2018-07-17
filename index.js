console.log('Before');

// getUser(1, (user) => {
//     getRepository(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });

// Promise-based approach 
// getUser(1)
//     .then(user => getRepository(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// Async and Await approach
async function displayCommits() {
    try {
    const user = await getUser(1);
    const repos = await getRepository(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);    
    } catch (err) {
        console.log('Error', err.message);
    }

}
displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a databases...');
            resolve({ id: id, gitHubUsername: 'TheBrown' })
        }, 2000);
    });

}

function getRepository(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('Calling Github API...');
            resolve(['repo1', 'repo2', 'repo3']);
            // reject(new Error('Could not get the 
        }, 2000);
    });

}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API...');
            resolve(['commit']);
        }, 2000);
    });
}