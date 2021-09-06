exports.sendSMS = async (phone) => { // función sn tiempo para ejecución
    let code = Math.random(10);
    console.log(`sending sms...with code ${code} to the phone ${phone}`);
};