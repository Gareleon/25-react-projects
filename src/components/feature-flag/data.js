

const dummyApiResponse = {
    showScrollingProgression: true,
    showLightAndDarkMode: true,
    showTicTacToe: true,
    showRandomColorGenerator: true,
    showAccordian: true,
}

function featureFlagsDataServiceCall() {
    return new Promise((reslove, reject) => {
        if (dummyApiResponse) {
            setTimeout(reslove(dummyApiResponse), 500);
        } else {
            reject('Some error occured, plase try again!');
        }
    })
};

export default featureFlagsDataServiceCall;