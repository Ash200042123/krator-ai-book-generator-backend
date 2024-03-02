const axios = require('axios');

exports.generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    const apiKey = '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';

    // Set up the request headers with the Authorization header
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + apiKey,
    };

    // Set up the request payload
    const data = {
      prompt: prompt,
      model: 'dall-e-3',
    };

    // Make the request to the OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      data,
      { headers }
    );

    // Send the response back to the client
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};
