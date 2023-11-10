/*
*new exercice
*/

/*
*version sans async avec if dans try catch
const breath = (duration) => {
    return new Promise((resolve, reject) => {
        try {
            if (duration < 500) {
                throw new Error(`Error: respiration retenue pendant: ${duration}ms !`);
            } else {
                setTimeout(() => {
                    resolve(`Respiration retenue pendant: ${duration}ms !`);
                }, duration);
            }
        } catch (error) {
            reject(error);
        }
    });
}

const durations = [1200, 2000, 580, 700, 220, 1800];

durations.map((duration) => {
    breath(duration)
    .then((message) => console.log(message))
    .catch((error) => console.error(error))
});
*/
/*
*version async avec try catch en dehors
*/
const breath = (duration) => {
    return new Promise((resolve, reject) => {
        if (duration < 500) {
            reject(`Error: respiration retenue pendant: ${duration}ms !`);
        } else {
            setTimeout(() => {
                resolve(`Respiration retenue pendant: ${duration}ms !`);
            }, duration);
        }
    });
}

const durations = [1200, 2000, 580, 700, 220, 1800];

const testDurations = async () => {
    for (const duration of durations) {
        try {
            const message = await breath(duration);
            console.log(message);
        } catch (error) {
            console.error(error);
        }
    }
}

testDurations();
