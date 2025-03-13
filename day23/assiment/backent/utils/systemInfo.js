const os = require('os');

const getSystemInfo = () => {
  return {
    hostname: os.hostname(),
    osType: os.type(),
    totalMemory: os.totalmem()
  };
};

module.exports = getSystemInfo;