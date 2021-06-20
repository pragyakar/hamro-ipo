<h1 align="center">
  <br>
  <a href="https://hamro-ipo.vercel.app/">
  <img src="https://user-images.githubusercontent.com/19926249/122668573-7b7f1800-d1d8-11eb-9014-e9616853ed03.png" alt="Hamro IPO" width="300"></a>
  <br>
</h1>

<h4 align="center">Check NEPSE IPO allotment results</h4>

<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/-JavaScript-555555?style=flat&logo=javascript" alt="Javascript">
  </a>
  <a href="https://reactjs.org/docs/getting-started.html">
    <img src="https://img.shields.io/badge/-React-555555?style=flat&logo=react" alt="React">
  </a>
  <a href="https://nodejs.org/en/docs/">
    <img src="https://img.shields.io/badge/-Next.js-555555?style=flat&logo=next.js" alt="Next">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-setup">How To Setup</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contributing">Contributing</a> 
</p>

## Key Features
- Setup multiple BOIDs (under development)
- View list of all available IPOs
- Select an IPO and check if it is alloted for all the configured BOIDs
- Uses the open API by CDSC to get the results (iporesult.cdsc.com.np)

## How To Setup

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone git@github.com:pragyakar/hamro-ipo.git

# Go into the repository
$ cd hamro-ipo

# Install dependencies
$ yarn or npm install

# Copy .env.sample file to create .env.local file and add values to the env variables
$ cp .env.sample .env.local

# Run in development mode
$ yarn dev or npm run dev
```

## Deployment
With CI/CD setup, deployment is just one merge away. Merging into respective branches auto deploys the changes using vercel. `main` branch is set as production.

## Contributing
I am open to contributions and collaboration so feel free to create a Pull Request or HMU anytime.