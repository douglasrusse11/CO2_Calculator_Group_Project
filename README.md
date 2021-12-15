# Carbon Footprint Calculator

## Project Description
This application takes user input and returns a graph which informs the user of their carbon footprint based on the input fields. It provides the user with comparison graphs so that they can see how they compare with various demographics.

## Technologies used
We used react to build the app. Data is gathered from the carbon interface API. An API key is required to use this app and is not provided in this build. Highcharts is used to build the charts in addition to the globe function. Fontawesome is used for some button symbols. Google fonts is used for one of the fonts.

## Challenges faced and future implementations
If we had more time we would have added dynamic geospecific calculations, added another API for Diet rather than hardcoding it, add in options for shopping habits and recycling, and add options for more granularity (city to city rather than continent to continent for filghts for example).

The most challenging aspects were the globe and the calculating the filghts.

## How to install and run the project
You will need to use npm install, and then create a file in the helpers folder called getAccessToken.js with the following text: 

<code>const getAccessToken = () => {

    return “{insertAPIkey}”;

}</code>

export default getAccessToken;

{insertAPIkey} should be replaced by the API key you have acquired.

Following this simply run npm start in your terminal.

## How to use the project
Follow the prompts to input user data and you will recieve a carbon footprint calculation. Very self evident.

## Credits
This project was built by Douglas Russell, Gavin Hargin and David McIntyre. Special thanks to our instructors at CodeClan Juan Mata Ruiz, Keith Douglas, and Stuart Houston, without whom this project would not have been possible.

## Licences
Free API access is available upon request and no other licenes required.

## Image
<img width="1355" alt="Screenshot 2021-12-15 at 13 32 44" src="https://user-images.githubusercontent.com/57117685/146196416-8102f8e0-1385-425b-92d3-c52f9a20e053.png">


