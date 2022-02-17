const {fetchData} = require('../clearBitClient/clearBitClient');

const getDomainData = async (domainAddress) => {
    try {

        const {domain, logo, type} = await fetchData(domainAddress);
        return {
            domain,
            logo,
            type
        }
    } catch (e) {
        return Promise.reject(e);
    }
}

module.exports = getDomainData;
