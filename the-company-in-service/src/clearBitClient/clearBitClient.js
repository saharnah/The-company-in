const axios = require('axios');
const accessToken = '';
const baseClientUrl = 'https://company.clearbit.com/v2/companies'

const fetchData = async (domain) => {
    try {
        const result = await axios.get(`${baseClientUrl}/find?domain=${domain}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return result.data;
    } catch (e) {
        return Promise.reject(e);
    }
}

module.exports = {fetchData}
