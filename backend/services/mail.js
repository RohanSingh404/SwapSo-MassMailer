const ses = require("../utils/ses");

const sendMail = async (emails, subject, html) => {
  if (!Array.isArray(emails)) emails = [emails];
  const params = {
    Destination: {
      ToAddresses: emails,
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: html,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: process.env.AWS_SES_FROM,
  };

  return ses.sendEmail(params).promise();
};

module.exports = sendMail;
