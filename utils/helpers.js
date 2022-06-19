module.exports = {
    testIt: () => {
        return "boo";
    },
    checkAdmin: () => {
        if (adminPriv) {
            return "tada";
        } else {
            return "nope";
        };
    },
};
